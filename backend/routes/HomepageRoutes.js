const express = require("express");
const router = express.Router();
const { HomeData } = require("../controller/HomeController");

router.get("/", HomeData);

module.exports = router;
