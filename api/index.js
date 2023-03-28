const express = require("express");

const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connection.once("open", () => {
  console.log("MongoDb Connection Ready....");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

mongoose.connect(process.env.MONGO_URL);

app.listen(8800, () => {
  console.log("Listening on port 8800");
});
