const express = require("express");
const router = express.Router();
const {
  GetItems,
  GetSingleItem,
} = require("../controller/MenuItemsController");

router.get("/all-items", GetItems);
router.get("/single-item/:itemId", GetSingleItem);

module.exports = router;
