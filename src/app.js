const express = require("express");
const app = express();

const connectDB = require("./config/database");
const validator = require("validator");
const cookieParser = require("cookie-parser");
const { userAuth } = require("./middlewares/auth");
const cors = require("cors");
const http = require("http");

require("dotenv").config();
// require("./utils/cronjob");

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");
const paymentRouter = require("./routes/payment");
const initializeSocket = require("./utils/socket");
const chatRouter = require("./routes/chat");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);
app.use("/", paymentRouter);
app.use("/", chatRouter);

const server = http.createServer(app);
initializeSocket(server);

connectDB()
  .then(() => {
    console.log("Database connection established");
    server.listen(process.env.PORT, () => {
      console.log(`Server is successfully listening on port 7777`);
    });
  })
  .catch((err) => {
    console.error(err.message);
    console.log("Database can't be connected");
  });
