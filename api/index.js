const express = require("express");

const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users.route");

mongoose.connection.once("open", () => {
  console.log("MongoDb Connection Ready....");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

mongoose.connect(process.env.MONGO_URL);

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(8800, () => {
  console.log("Listening on port 8800");
});
