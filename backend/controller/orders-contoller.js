const Orders = require("../models/order-model");

const CreateOrder = async (req, res) => {
  const customerID = req.user.userId;
  const { deliveryAddress, cartData, totalAmount } = req.body;
  if (!customerID || !deliveryAddress || !cartData.length > 0 || !totalAmount) {
    return res.status(400).json({ errors: "Please fill all fields" });
  }

  try {
    const newOrder = new Orders({
      customerID,
      deliveryAddress,
      cartData,
      totalAmount,
    });
    await newOrder.save();
    res.status(201).json({ success: true, message: "Order created" });
  } catch (error) {
    res.status(500).json({ success: "false", error: "Internal Server Error" });
  }
};

const GetOrders = async (req, res) => {
  const customerID = req.user.userId;
  if (!customerID) {
    return res.status(400).json({ errors: "Field is required" });
  }

  try {
    const data = await Orders.find({ customerID })
      .populate({
        path: "cartData.itemID",
        select: "category image name price -_id",
      })
      .populate({
        path: "deliveryAddress",
        select: "addressLine1 addressLine2 city postalCode state -_id",
      });
    res.status(200).json({
      success: true,
      page: null,
      data,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { CreateOrder, GetOrders };
