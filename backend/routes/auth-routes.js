const express = require("express");
const router = express.Router();
const {
  UserSignup,
  UserLogin,
  UserProfile,
  SendMail,
  VerifyMail,
  RestPassword,
} = require("../controller/auth-controller");
const verifyToken = require("../middleware/verify-token");

router.post("/signup", UserSignup);
router.post("/login", UserLogin);
router.get("/user-profile", verifyToken, UserProfile);
router.post("/send-mail", SendMail);
router.post("/verify-otp", VerifyMail);
router.post("/reset-password", RestPassword);

module.exports = router;
