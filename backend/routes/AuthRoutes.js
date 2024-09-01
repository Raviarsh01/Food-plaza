const express = require("express");
const router = express.Router();
const {
  UserSignup,
  UserLogin,
  UserProfile,
  SendMail,
  VerifyMail,
  RestPassword,
} = require("../controller/AuthController");
const verifyToken = require("../middleware/VerifyToken");
const userSignupValidationRules = require("../validations/signup-form");
const {
  VerifyOtpValidations,
  RestPasswordValidations,
} = require("../validations/reset-password");

router.post("/signup", userSignupValidationRules, UserSignup);
router.post("/login", UserLogin);
router.get("/user-profile", verifyToken, UserProfile);
router.post("/send-mail", SendMail);
router.post("/verify-otp", VerifyOtpValidations, VerifyMail);
router.post("/reset-password", RestPasswordValidations, RestPassword);

module.exports = router;
