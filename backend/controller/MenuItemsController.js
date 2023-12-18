const ItemsMenu = require("../models/MenuItems");

const GetItems = async (req, res) => {
  try {
    const data = await ItemsMenu.find();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { GetItems };
