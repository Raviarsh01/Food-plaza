const { body } = require("express-validator");

const VerifyOtpValidations = [
  body("email").isEmail().withMessage("Invalid email format"),

  body("otp").isLength({ min: 6 }).withMessage("Otp must be 6 digit"),
];

const RestPasswordValidations = [
  body("email").isEmail().withMessage("Invalid email format"),

  body("newpassword")
    .isLength({ min: 6 })
    .withMessage("Password must be 6 digit"),

  body("oldpassword").isLength({ min: 6 }),
];

module.exports = { VerifyOtpValidations,RestPasswordValidations };
