const express = require("express");
const admin = express.Router();

admin.get("/", (req, res) => {
  res.send("Admin page");
});
admin.get("/user", (req, res) => {
  res.send("User page");
});
module.exports = admin;
