const express = require("express");
const requestRouter = express.Router();
const { userAuth } = require("../middlewares/auth");
const connectionRequestModel = require("../models/connectionRequest");

const User = require("../models/user");

// - connectionRequestRouter
// - POST /request/send/:status/:userId (dynamic)
// - POST /request/review/accepted/:requestId
// - POST /request/review/rejected/:requestId

requestRouter.post(
  "/request/send/:status/:toUserId",
  userAuth,
  async (req, res, next) => {
    try {
      // Sending a connection request
      const fromUserId = req.user._id;
      const toUserId = req.params.toUserId;
      const status = req.params.status;

      const allowedStatus = ["ignored", "interested"];

      if (!allowedStatus.includes(status)) {
        return res.status(400).json({ message: "Invalid status: " + status });
      }

      const toUser = await User.findById(toUserId);

      if (!toUser) {
        return res.status(404).json({ message: "User not found!" });
      }

      // If there is an existing connectionRequest
      const existingConnectionRequest = await connectionRequestModel.findOne({
        $or: [
          { fromUserId, toUserId },
          {
            fromUserId: toUserId,
            toUserId: fromUserId,
          },
        ],
      });
      // Corner Case B to A
      if (existingConnectionRequest) {
        return res
          .status(400)
          .json({ message: "Connection Request already exist" });
      }
      // Corner case A to A

      const connectionRequest = new connectionRequestModel({
        fromUserId,
        toUserId,
        status,
      });
      const data = await connectionRequest.save();
      res.json({
        message: `Connection request ${status} successfully`,
        data,
      });
    } catch (err) {
      console.log("Err: " + err.message);
      res.status(400).send("ERROR: " + err.message);
    }
  },
);

module.exports = requestRouter;
