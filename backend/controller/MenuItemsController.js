const ItemsMenu = require("../models/MenuItems");

const GetItems = async (req, res) => {
  try {
    const response = await ItemsMenu.find();
    res.status(200).json({ success: true, page: null, response });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const GetSingleItem = async (req, res) => {
  const { itemId } = req.params;
  try {
    const data = await ItemsMenu.find({ itemId });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { GetItems, GetSingleItem };
