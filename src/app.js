const express = require("express");
const app = express();
const port = 3000;

app.use("/user", (req, res) => {
  res.send("wild card HAHAHAHAHAH");
});

app.get("/user", (req, res) => {
  res.send({ firstName: "Ajay", lastName: "Prakash" });
});
app.post("/user", (req, res) => {
  // Saving data to DB
  res.send("Data successfully saved to the DB");
});

app.delete("/user", (req, res) => {
  res.send("Deleted successfully");
});
// This will match all the HTTP method API call to /test
app.use("/test", (req, res) => {
  res.send("Hello from the server");
});

app.listen(port, (req, res) => {
  console.log(`Server is successfully listening on port ${port}`);
});
