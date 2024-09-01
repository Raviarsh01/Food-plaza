const express = require("express");
const router = express.Router();
const {
  UserSignup,
  UserLogin,
  UserProfile,
  sendMail,
} = require("../controller/AuthController");
const verifyToken = require("../middleware/VerifyToken");
const userSignupValidationRules = require("../validations/signup-form");

router.post("/signup", userSignupValidationRules, UserSignup);
router.post("/login", UserLogin);
router.get("/user-profile", verifyToken, UserProfile);
router.post('/send-email', sendMail);

module.exports = router;
