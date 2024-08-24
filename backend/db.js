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
<<<<<<< HEAD
    .connect(process.env.PROD_URL || process.env.DEV_URL)
=======
    .connect(process.env.PROD_URL ||process.env.LOCAL_URL )
>>>>>>> 1c7b9e23393e82c348eadc7dee69f94a8c05dba8
    .then(() => {
      console.log("Database connection successful");
    })
    .catch((err) => {
      console.log("Database connection error", err);
    });
};

module.exports = ConnectToMongo;
