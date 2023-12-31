const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    // const token = req.header("auth-token");
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

// const jwt = require("jsonwebtoken");

// const verifyToken = (req, res, next) => {
//   const token = req.header("Authorization")?.split(" ")[1];
//   if (!token) {
//     return res.status(403).json({ message: "Token not provided" });
//   }

//   jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ message: "Invalid token" });
//     }
//     req.user = decoded;
//     next();
//   });
// };

// module.exports = verifyToken;
