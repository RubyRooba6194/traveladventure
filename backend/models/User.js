const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },  // Name field is required
  email: { type: String, required: true, unique: true },  // Email is required and unique
  password: { type: String, required: true },  // Password is required
});

module.exports = mongoose.model("User", userSchema);
