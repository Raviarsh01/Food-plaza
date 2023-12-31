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

// const mongoose = require("mongoose");

// const connectionString = "mongodb://127.0.0.1:27017";

// mongoose.connect(connectionString);

// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// db.once("open", () => {
//   console.log("Connected to MongoDB");
// });

// module.exports = db;
