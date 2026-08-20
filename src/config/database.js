const mongoose = require("mongoose");

const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = async () => {
  // Connect to the Cluster
  await mongoose.connect(process.env.DB_CONNECTION_SECRET);
}; // return promise- Asynchronous operation

module.exports = connectDB;
