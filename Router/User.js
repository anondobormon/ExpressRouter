const express = require("express");

const User = express.Router();

User.get("/", (req, res) => {
  res.send("This is user home page");
});

module.exports = User;
