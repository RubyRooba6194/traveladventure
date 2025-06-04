
// import mongoose from "mongoose";

// const adminUserSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   role: {
//     type: String,
//     enum: ["admin", "editor", "staff"],
//     required: true,
//   },
// }, { timestamps: true });

// const User = mongoose.models.User || mongoose.model("User", adminUserSchema);

// export default User;
// models/AdminUser.js
const mongoose = require("mongoose");

const adminUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "editor", "staff"],
    required: true,
  },
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model("User", adminUserSchema);

module.exports = User;
