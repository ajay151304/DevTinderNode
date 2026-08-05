const express = require("express");
const app = express();
const port = 3000;

app.use(
  "/user",
  (req, res, next) => {
    // Route Handler
    console.log("Handling the route user 1!!");
    next();
    // res.send("Response 1");
  },
  (req, res, next) => {
    // Route Handler 2
    console.log("Handling the route user 2!!");
    // res.send("Response 2");
    next();
  },
  (req, res, next) => {
    // Route Handler 2
    console.log("Handling the route user 3!!");
    // res.send("Response 3");
    next();
  },
  (req, res, next) => {
    // Route Handler 2
    console.log("Handling the route user 4!!");
    // res.send("Response 4");
    next();
  },
  (req, res, next) => {
    // Route Handler 2
    console.log("Handling the route user 5!!");
    res.send("Response 5");
  },
);

app.listen(port, (req, res) => {
  console.log(`Server is successfully listening on port ${port}`);
});
