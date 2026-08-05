const express = require("express");
const app = express();
const port = 3000;

// /ac, /abc
app.get("/user/:userId/:name/:password", (req, res) => {
  console.log(req.params);
  res.send({ firstName: "Ajay", lastName: "Prakash" });
});

app.listen(port, (req, res) => {
  console.log(`Server is successfully listening on port ${port}`);
});
