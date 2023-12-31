const mongoose = require("mongoose");

const data = new mongoose.Schema({
  happycutomers: Number,
  outlets: Number,
  countries: Number,
  sectionFourimgs: {
    img1: {
      name: String,
      url: String,
    },
    img2: {
      name: String,
      url: String,
    },
    img3: {
      name: String,
      url: String,
    },
    img4: {
      name: String,
      url: String,
    },
  },
  section2Menu: {
    name: String,
    url: String,
  },
});

module.exports = mongoose.model("HomepageData", data);
