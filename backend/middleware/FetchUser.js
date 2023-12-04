const jwt = require("jsonwebtoken");
const JWT_SECRET = "ravihfgdhfgdfhdgfh";

const fetchUser = (req, res, next) => {
  try {
    const token = req.header("auth-token");
    if (!token) {
      res.status(401).send({ error: "Please send valid token" });
    }
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data;
    next();
  } catch (err) {
    res.status(401).send({ error: "Please send valid token" });
  }
};

module.exports = fetchUser;
