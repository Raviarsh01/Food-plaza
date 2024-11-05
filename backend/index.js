const express = require("express");
const cors = require("cors");
const ConnectToMongo = require("./db");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
ConnectToMongo();

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Welcome to food plaza");
});
app.use("/auth", require("./routes/auth-routes"));
app.use("/menu", require("./routes/menu-items-routes"));
app.use("/address", require("./routes/address-routes"));

app.listen(process.env.PORT_URL, () => {
  console.log(`Server at ${process.env.PORT_URL} port`);
});
