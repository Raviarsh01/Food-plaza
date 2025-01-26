const express = require("express");
const { CreateOrder, GetOrders } = require("../controller/orders-contoller");
const verifyToken = require("../middleware/verify-token");
const router = express.Router();

router.post("/create", verifyToken, CreateOrder);
router.get("/get-orders", verifyToken, GetOrders);

module.exports = router;
