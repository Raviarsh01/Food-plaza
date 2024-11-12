const userRegister = require("../models/auth-model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

const UserSignup = async (req, res) => {
  const { firstName, lastName, phoneNumber, email, password } = req.body;

  if (!firstName || !lastName || !phoneNumber || !email || !password) {
    return res.status(400).json({ errors: "Please fill all fields" });
  }

  try {
    const isemail = await userRegister.findOne({ email });

    if (!isemail) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = {
        firstName,
        lastName,
        phoneNumber,
        email,
        password: hashedPassword,
      };

      const register = new userRegister(user);
      await register.save();
      return res.status(201).json({ message: "User Registered" });
    } else {
      return res.status(400).json({ message: "Email already exists" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const UserLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ errors: "Please fill all fields" });
  }

  try {
    const isemail = await userRegister.findOne({ email });
    if (!isemail) {
      return res.status(400).json({ message: "Enter valid credential" });
    }

    const isPassword = await bcrypt.compare(password, isemail.password);
    if (!isPassword) {
      return res.status(400).json({ message: "Enter valid credential" });
    }

    const tokenData = {
      userId: isemail._id,
      email: isemail.email,
    };
    const token = jwt.sign(tokenData, process.env.SECRET_KEY);

    return res.status(200).json({ message: "Login success", token });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const UserProfile = async (req, res) => {
  try {
    const UserData = await userRegister
      .findById(req.user.userId)
      .select("-password -_id -__v -otp");

    const data = {
      UserData,
      message: "Success data fetch",
    };
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const UserProfileUpdate = async (req, res) => {
  const { firstName, lastName, phoneNumber, email } = req.body;
  const userImage = req?.file?.path;
  const userId = req.user.userId;

  try {
    const updateFields = {
      firstName,
      lastName,
      phoneNumber,
      email,
    };

    updateFields.profileImage = !userImage ? null : userImage?.slice(7);
    const updatedUser = await userRegister
      .findByIdAndUpdate(userId, { $set: updateFields }, { new: true })
      .select("-password -_id -__v -otp");

    return res
      .status(200)
      .json({ success: "true", message: "Profile updated", user: updatedUser });
  } catch (error) {
    return res
      .status(500)
      .json({ success: "false", message: "Internal Server Error" });
  }
};

const ChangePassword = async (req, res) => {
  const { password, newpassword } = req.body;
  const email = req.user.email;
  if (!password || !newpassword) {
    return res.status(400).json({ errors: "Please fill all fields" });
  }

  try {
    const isemail = await userRegister.findOne({ email });
    if (!isemail) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPassword = await bcrypt.compare(password, isemail.password);
    if (!isPassword) {
      return res.status(400).json({ message: "Password is not correct" });
    }

    const hashedNewPassword = await bcrypt.hash(newpassword, 10);
    isemail.password = hashedNewPassword;
    await isemail.save();

    return res.status(200).json({ message: "Password updated" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  host: "smtp.gmail.com",
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000);
}

const SendMail = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ errors: "Email is required" });
  }
  try {
    const isemail = await userRegister.findOne({ email });
    if (!isemail) {
      return res.status(400).json({ message: "User not found" });
    }

    const otp = generateOTP();

    await userRegister.updateOne({ email }, { otp });

    const filePath = path.join(
      process.cwd(),
      "public",
      "html",
      "forget-password.html"
    );

    let htmlTemplate = fs.readFileSync(filePath, "utf8");
    htmlTemplate = htmlTemplate.replace("{{otp}}", otp);

    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: isemail?.email,
      replyTo: process.env.REPLY_TO,
      subject: "Reset password",
      html: htmlTemplate,
    };

    await transporter.sendMail(mailOptions, (err, res) => {
      if (err) {
        // no code
      }
    });

    return res
      .status(200)
      .json({ status: "success", message: "Email sent successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const VerifyMail = async (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) {
    return res.status(400).json({ errors: "Please fill all fields" });
  }
  try {
    const isemail = await userRegister.findOne({ email });

    if (!isemail) {
      return res.status(400).json({ message: "User not found" });
    }

    if (isemail.otp === parseInt(otp)) {
      await userRegister.updateOne({ email: isemail?.email }, { otp: null });
      return res.status(200).json({ status: "success", message: "Otp verify" });
    }
    return res.status(400).json({ message: "OTP not match" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const RestPassword = async (req, res) => {
  const { email, newpassword } = req.body;

  if (!email || !newpassword) {
    return res.status(400).json({ errors: "Please fill all fields" });
  }

  try {
    const isemail = await userRegister.findOne({ email });

    if (!isemail) {
      return res.status(400).json({ message: "User not found" });
    }
    const hashedPassword = await bcrypt.hash(newpassword, 10);
    await userRegister.updateOne(
      { email: isemail?.email },
      { password: hashedPassword }
    );
    return res.status(200).json({ message: "Password Update" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  UserSignup,
  UserLogin,
  UserProfile,
  SendMail,
  VerifyMail,
  RestPassword,
  UserProfileUpdate,
  ChangePassword,
};
