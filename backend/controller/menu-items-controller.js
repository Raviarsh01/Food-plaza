const ItemsMenu = require("../models/menu-items-model");

const GetItems = async (req, res) => {
  try {
    const response = await ItemsMenu.find();
    res.status(200).json({ success: true, page: null, response });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};


module.exports = { GetItems };
