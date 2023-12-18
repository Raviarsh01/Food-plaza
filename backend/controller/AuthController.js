const userRegister = require("../models/AuthModel");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "ravihfgdhfgdfhdgfh";

const signup = async (req, res) => {
  let body = Object.entries(req.body).length > 0;
  if (!body) {
    return res.status(400).json({ error: "Enter details" });
  }
  const user = await userRegister({
    name: req.body.name,
    city: req.body.city,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password,
    role: 1,
  });
  user.save();
  obj = {
    message: "User register successfully",
    data: user,
  };
  res.json(obj);
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await userRegister.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Enter correct detail" });
    }
    if (password !== user.password) {
      return res.status(400).json({ error: "Enter correct detail" });
    }
    const userID = {
      id: user.id,
    };
    const authToken = jwt.sign(userID, JWT_SECRET);
    const userData = {
      user,
      authToken,
    };
    res.json(userData);
  } catch (error) {
    return res.status(500).send("Internal server error");
  }
};

module.exports = { signup, login };
