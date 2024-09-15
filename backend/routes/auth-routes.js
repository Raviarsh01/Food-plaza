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
const userSignupValidationRules = require("../utils/validations/signup-form");
const {
  VerifyOtpValidations,
  RestPasswordValidations,
} = require("../utils/validations/reset-password");

router.post("/signup", userSignupValidationRules, UserSignup);
router.post("/login", UserLogin);
router.get("/user-profile", verifyToken, UserProfile);
router.post("/send-mail", SendMail);
router.post("/verify-otp", VerifyOtpValidations, VerifyMail);
router.post("/reset-password", RestPasswordValidations, RestPassword);

module.exports = router;
