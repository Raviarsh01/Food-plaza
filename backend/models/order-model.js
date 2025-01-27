const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  itemID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "MenuItems",
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
});

const addressSchema = new mongoose.Schema({
  customerID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Customers",
  },
  deliveryAddress: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Address",
  },
  cartData: [itemSchema],
  totalAmount: {
    type: Number,
    required: true,
  },
  orderDelivered: {
    type: String,
    default: "Yes",
  },
  payment: {
    type: String,
    default: "Done",
  },
  paymentMode: {
    type: String,
    default: "Online",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

addressSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("Orders", addressSchema);
