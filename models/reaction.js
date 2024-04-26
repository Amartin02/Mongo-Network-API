const mongoose = require("mongoose");

const reactionSchema = new mongoose.Schema({
  reactionId: {
    type: mongoose.isValidObjectId,
    default: new mongoose.isValidObjectId(),
  },
  reactionBody: { type: String, required: true, maxLength: 280 },
  username: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = reactionSchema;
