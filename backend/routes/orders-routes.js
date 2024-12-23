const express = require("express");
const { CreateOrder, GetOrders } = require("../controller/orders-contoller");
const router = express.Router();

router.post("/create", CreateOrder);
router.get("/get-orders/:customerId", GetOrders);

module.exports = router;
