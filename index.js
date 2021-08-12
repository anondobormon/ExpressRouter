const express = require("express");
const admin = require("./Router/AdminPage");
const user = require("./Router/User");

const app = express();

app.use("/admin", admin);
app.use("/user", user);

app.listen(3000, () => {
  console.log("Server Running on port 3000");
});
