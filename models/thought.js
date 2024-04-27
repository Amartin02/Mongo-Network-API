const { Schema, model } = require("mongoose");
const reactionSchema = require("./reaction");

const thoughtSchema = new Schema({
  thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
  createdAt: { type: Date, default: Date.now() },
  username: { type: String, required: true },
  reactions: [reactionSchema], //array of nested documents created with reactionSchema
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
