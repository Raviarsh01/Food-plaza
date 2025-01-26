const express = require("express");
const router = express.Router();
const {
  GetItems,
} = require("../controller/menu-items-controller");

router.get("/all-items", GetItems);

module.exports = router;
