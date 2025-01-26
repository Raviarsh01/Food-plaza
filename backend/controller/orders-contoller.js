const Orders = require("../models/order-model");

const CreateOrder = async (req, res) => {
  const { customerID, deliveryAddress, cartData, totalAmount } = req.body;
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
  const { customerId } = req.params;
  if (!customerId) {
    return res.status(400).json({ errors: "Field is required" });
  }
  try {
    const data = await Orders.find({ customerID: customerId })
      .populate({
        path: "customerID",
        select: "firstName lastName email",
      })
      .populate({
        path: "cartData.itemID",
      })
      .populate({
        path: "deliveryAddress",
        select: "-_id -customerID -createdAt -updatedAt -__v",
      });
    res.status(200).json({
      success: "Get successfully",
      page: null,
      response: data,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { CreateOrder, GetOrders };
