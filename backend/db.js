const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017";

const ConnectToMongo = () => {
  mongoose
    .connect(url, {
      dbName: "FreshBox",
    })
    .then(() => {
      console.log("Database connection successful");
    })
    .catch((err) => {
      console.log("Database connection error");
    });
};

module.exports = ConnectToMongo;
