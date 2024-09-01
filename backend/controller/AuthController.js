const userRegister = require("../models/AuthModel");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

const UserSignup = async (req, res) => {
  const { firstName, lastName, phoneNumber, email, password } = req.body;
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

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
      .select("-password -_id -__v");

    const data = {
      UserData,
      message: "Success data fetch",
    };
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
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

  try {
    const isemail = await userRegister.findOne({ email });
    if (!isemail) {
      return res.status(400).json({ message: "User not found" });
    }

    const otp = generateOTP();

    await userRegister.updateOne({ email }, { otp });
    const filePath = path.join(
      "D:/.My work/Food Plaza/backend/public/html/forget-password.html"
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

    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ status: "success", message: "Email sent successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const VerifyMail = async (req, res) => {
  const { email, otp } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
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

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
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
};
