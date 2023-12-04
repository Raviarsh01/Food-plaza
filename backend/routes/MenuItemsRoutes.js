const express = require("express");
const router = express.Router();
const ItemsMenu = require("../models/MenuItems");

const JWT_SECRET = "ravihfgdhfgdfhdgfh";

router.get("/all-items", async (req, res) => {
  try {
    const data = await ItemsMenu.find();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
