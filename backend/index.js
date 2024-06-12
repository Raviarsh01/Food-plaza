const express = require("express");
const cors = require("cors");
const ConnectToMongo = require("./db");
const dotenv = require("dotenv");

dotenv.config();
ConnectToMongo();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to food plaza");
});
app.use("/auth", require("./routes/AuthRoutes"));
app.use("/menu", require("./routes/MenuItemsRoutes"));

app.listen(process.env.PORT_URL, () => {
  console.log(`Server at ${process.env.PORT_URL} port`);
});
