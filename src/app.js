const express = require("express");
const app = express();
const port = 3000;

app.use("/", (req, res) => {
  res.send("Namaste from the dashboard");
});

app.use("/hello", (req, res) => {
  res.send("Hello Hello Hello");
});

app.use("/test", (req, res) => {
  res.send("Hello from server");
});

app.listen(port, (req, res) => {
  console.log(`Server is successfully listening on port ${port}`);
});
