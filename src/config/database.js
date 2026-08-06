const mongoose = require("mongoose");

const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = async () => {
  // Connect to the Cluster
  await mongoose.connect(
    "mongodb+srv://nodedev:ajay123@nodejs.pjdqstq.mongodb.net/DevTinderNode",
  );
}; // return promise- Asynchronous operation

module.exports = connectDB;
