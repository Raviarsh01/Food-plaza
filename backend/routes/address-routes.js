const express = require("express");
const { AddAddress, GetAddress } = require("../controller/address-contoller");
const verifyToken = require("../middleware/verify-token");

const router = express.Router();

router.post("/add-address", verifyToken, AddAddress);
router.get("/get-address", verifyToken, GetAddress);

module.exports = router;
