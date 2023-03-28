const express = require("express");
const User = require("../models/User");
const CryptoJS = require("crypto-js");

const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
  });

  try {
    const user = await newUser.save();
    console.log(user);
    res.status(201).json(user);
  } catch (err) {
    res.status(501).json(err);
  }
});

module.exports = router;
