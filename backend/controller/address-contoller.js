const Address = require("../models/address-model");

const AddAddress = async (req, res) => {
  const userId = req.user.userId;
  const { addressLine1, addressLine2, city, state, postalCode } = req.body;

  if (!addressLine1 || !city || !state || !postalCode) {
    return res.status(400).json({ errors: "Please fill all fields" });
  }

  try {
    const address = new Address({
      customerID: userId,
      addressLine1,
      addressLine2,
      city,
      state,
      postalCode,
    });
    await address.save();
    res.status(201).json({ success: true, message: "Address added" });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ success: "false", error: "Internal Server Error" });
  }
};

const GetAddress = async (req, res) => {
  const userId = req.user.userId;

  console.log("userId", userId);
  try {
    const data = await Address.find({ customerID: userId }).populate(
      "customerID",
      "firstName lastName email"
    );
    res.status(200).json({
      success: "Get successfully",
      page: null,
      response: data.reverse(),
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { AddAddress, GetAddress };
