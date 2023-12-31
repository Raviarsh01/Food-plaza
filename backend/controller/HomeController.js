const HomepageData = require("../models/HomeModel");

const HomeData = async (req, res) => {
  try {
    const data = await HomepageData.find();
    res.json(data[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { HomeData };
