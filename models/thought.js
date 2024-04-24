const mongoose = require("mongoose");

const thoughtModel = new mongoose.Schema({
  thoughtText: { type: String, required: true }, //must be between 1 and 280 characters
  createdAt: { type: Date, default: Date.now() },
  username: { type: String, required: true },
  reactions: [], //array of nested documents created with reactionSchema
});
