const express = require("express");
const app = express();
const port = 3000;

const { adminAuth, userAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth);

// No need to check userAuth in user/login route handler
app.post("/user/login", (req, res) => {
  res.send("User logged in successfully");
});

app.get("/user", userAuth, (req, res) => {
  res.send("User Data Sent");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("All Data Sent!");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("Deleted a User");
});

app.listen(port, (req, res) => {
  console.log(`Server is successfully listening on port ${port}`);
});
