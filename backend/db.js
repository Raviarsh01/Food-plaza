const mongoose = require("mongoose");
const ConnectToMongo = () => {
  mongoose
    .connect(process.env.PROD_URL || process.env.DEV_URL)
    .then(() => {
      console.log("Database connection successful");
    })
    .catch((err) => {
      console.log("Database connection error", err);
    });
};

module.exports = ConnectToMongo;
