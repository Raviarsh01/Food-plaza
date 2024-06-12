const ItemsMenu = require("../models/MenuItems");

const GetItems = async (req, res) => {
  // try {
  //   const data = await ItemsMenu.find();
  //   res.json(data);
  // } catch (error) {
  //   res.status(500).json({ error: "Internal Server Error" });
  // }
  const data = {
    next: "",
    prev: "",
    products: [],
  };
  res.json(data);
};

const GetSingleItem = async (req, res) => {
  const { itemId } = req.params;
  try {
    const data = await ItemsMenu.find({ itemId });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { GetItems, GetSingleItem };
