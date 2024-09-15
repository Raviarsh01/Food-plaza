const express = require("express");
const router = express.Router();
const {
  GetItems,
  GetSingleItem,
} = require("../controller/menu-items-controller");

router.get("/all-items", GetItems);
router.get("/single-item/:itemId", GetSingleItem);

module.exports = router;
