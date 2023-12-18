const express = require("express");
const router = express.Router();
const { GetItems } = require("../controller/MenuItemsController");

router.get("/all-items", GetItems);

module.exports = router;
