const express = require("express");
const router = express.Router();
const {
  UserSignup,
  UserLogin,
  UserProfile,
  SendMail,
  VerifyMail,
  RestPassword,
  UserProfileUpdate,
  ChangePassword,
} = require("../controller/auth-controller");
const verifyToken = require("../middleware/verify-token");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/signup", UserSignup);
router.post("/login", UserLogin);

router.post("/send-mail", SendMail);
router.post("/verify-otp", VerifyMail);
router.post("/reset-password", RestPassword);

router.get("/user-profile", verifyToken, UserProfile);
router.post(
  "/user-profile",
  verifyToken,
  upload.single("profileimage"),
  UserProfileUpdate
);
router.post("/change-password", verifyToken, ChangePassword);

module.exports = router;
