const express = require("express");
const router = express.Router();
const {
  UserSignup,
  UserLogin,
  UserProfile,
} = require("../controller/AuthController");
const verifyToken = require("../middleware/VerifyToken");

router.post("/signup", UserSignup);
router.post("/login", UserLogin);
router.get("/user-profile", verifyToken, UserProfile);

module.exports = router;
