const express = require("express");
const cors = require("cors");
const ConnectToMongo = require("./db");

ConnectToMongo();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", require("./routes/AuthRoutes"));
app.use("/menu", require("./routes/MenuItemsRoutes"));

app.listen(5000, () => {
  console.log("Server at 5000 port");
});
