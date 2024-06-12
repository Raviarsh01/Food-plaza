// const mongoose = require("mongoose");

// const url =
//   "mongodb+srv://raviarsh786:<0C0uyvnLFhuOToD9>@cluster0.8w4fcgw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// const ConnectToMongo = () => {
//   mongoose
//     .connect(url)
//     .then(() => {
//       console.log("Database connection successful");
//     })
//     .catch((err) => {
//       console.log("Database connection error", err);
//     });
// };

// module.exports = ConnectToMongo;

const mongoose = require("mongoose");
const ConnectToMongo = () => {
  mongoose
    .connect(process.env.PROD_URL)
    .then(() => {
      console.log("Database connection successful");
    })
    .catch((err) => {
      console.log("Database connection error", err);
    });
};

module.exports = ConnectToMongo;
