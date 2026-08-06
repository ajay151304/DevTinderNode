const express = require("express");
const app = express();

const connectDB = require("./config/database");

const User = require("./models/user");

app.use(express.json()); // to read JSON data from postman body (req.body) - use this middleware

app.post("/signup", async (req, res) => {
  // Reading Data from (API) Postman body - req.body
  // Creating a new instance of User Model
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User Added Successfully");
  } catch (err) {
    res.status(400).send("Error saving the user: " + err.message);
  }
});

// Get User by email
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;

  try {
    const users = await User.find({ emailId: userEmail });

    if (users.length === 0) {
      res.status(404).send("User not found");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

// Feed API - GET/feed - get all the users from the DB
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    if (users.length === 0) {
      res.send("User Not Found");
    } else {
      res.status(400).send(users);
    }
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established");
    app.listen(7777, () => {
      console.log(`Server is successfully listening on port 7777`);
    });
  })
  .catch((err) => {
    console.error(err.message);
    console.log("Database can't be connected");
  });
