const express = require("express");
const app = express();
const port = 3000;

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something went wrong");
  }
});

app.get("/getUserData", (req, res) => {
  // try {
  // Logic of DB call and get user Data
  throw new Error("dvdsvshhs");
  res.send("User Data Sent");
  // } catch (err) {
  // res.status(500).send("Some Error contact support team");
  // }
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something went wrong");
  }
});

app.listen(port, (req, res) => {
  console.log(`Server is successfully listening on port ${port}`);
});
