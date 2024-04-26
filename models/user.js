const { Schema, model } = require("mongoose");
const Thought = require("./thought");
const emailRegex = "/^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/";

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true, trim: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [emailRegex, "Not a valid Email, Please try again"],
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ], //Array of _id values referencing the Thought model
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ], //Array of _id values referencing the User model (self-reference)
});

const User = mongoose.model("User", userSchema);

module.exports = User;
