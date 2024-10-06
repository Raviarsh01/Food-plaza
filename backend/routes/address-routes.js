const express = require("express");
const {
  AddAddress,
  GetAddress,
} = require("../controller/address-contoller");
const router = express.Router();

router.post("/add-address", AddAddress);
router.get("/get-address/:customerId", GetAddress);

module.exports = router;
