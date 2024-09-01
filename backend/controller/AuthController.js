const userRegister = require("../models/AuthModel");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const nodemailer = require('nodemailer');

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
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false, // use false for STARTTLS; true for SSL on port 465
  auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
  }
});

// Email sending endpoint.
const sendMail =  async (req, res) => {
  try {
      const { name, subject, email,message  } = req.body; // Destructure and retrieve data from request body.


      // Validate required fields.
      if (!name || !subject || !email) {
          return res.status(400).json({ status: 'error', message: 'Missing required fields' });
      }


      // Prepare the email message options.
      const mailOptions = {
          from: process.env.SENDER_EMAIL, // Sender address from environment variables.
          to: `${name} <${email}>`, // Recipient's name and email address.
          replyTo: process.env.REPLY_TO, // Sets the email address for recipient responses.
          subject: subject, // Subject line.
          text: message // Plaintext body.
      };


      // Send email and log the response.
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);
      res.status(200).json({ status: 'success', message: 'Email sent successfully' });
  } catch (err) {
      // Handle errors and log them.
      console.error('Error sending email:', err);
      res.status(500).json({ status: 'error', message: 'Error sending email, please try again.' });
  }
}

module.exports = { UserSignup, UserLogin, UserProfile ,sendMail};
