const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) {
      res.status(401).send({ error: "Please send valid token" });
    }
    const data = jwt.verify(token, process.env.SECRET_KEY);
    req.user = data;
    next();
  } catch (err) {
    res.status(401).send({ error: "Please send valid token" });
  }
};

module.exports = verifyToken;
