const userRegister = require("../models/AuthModel");
const jwt = require("jsonwebtoken");

const UserSignup = async (req, res) => {
  const user = req.body;
  try {
    const isemail = await userRegister.findOne({ email: user.email });
    if (!isemail) {
      const register = new userRegister(user);
      await register.save();
      return res.status(201).json({ message: "User Registered" });
    } else {
      return res.status(400).json({ message: "Email already exists" });
    }
  } catch (error) {
    console.error("error....", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const UserLogin = async (req, res) => {
  const user = req.body;
  try {
    const isemail = await userRegister.findOne({ email: user.email });
    if (!isemail) {
      return res.status(400).json({ message: "Enter valid credential" });
    }
    if (isemail.password != user.password) {
      return res.status(400).json({ message: "Enter valid credential" });
    }

    const tokenData = {
      userId: isemail._id,
      email: isemail.email,
    };
    const token = jwt.sign(tokenData, process.env.SECRET_KEY);

    const apiData = {
      message: "Login success",
      userData: {
        UserId: isemail._id,
        Email: isemail.email,
        FirstName: isemail.firstName,
        LastName: isemail.lastName,
        Role: isemail.role,
      },
      token,
    };
    return res.status(200).json(apiData);
  } catch (error) {
    console.log("error....", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const UserProfile = async (req, res) => {
  console.log("profile api hti");
  try {
    const UserData = await userRegister
      .findById(req.user.userId)
      .select("-password");

    const data = {
      UserData: {
        ...UserData.toObject(),
        fullName: `${UserData.firstName} ${UserData.lastName}`,
        // dateCreatedModified: "sdhsjd",
      },
      message: "Success data fetch",
    };
    return res.status(200).json(data);
  } catch (error) {
    console.log("error....", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = { UserSignup, UserLogin, UserProfile };
