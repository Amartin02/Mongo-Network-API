const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  username: { type: String, unique: true, required: true, trim: true },
  email: { type: String, required: true, unique: true }, //needs email validation
  thoughts: [],
  friends: [],
});
