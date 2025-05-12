// backend/models/Trip.js
// import mongoose from "mongoose";

// const tripSchema = new mongoose.Schema(
//   {
//     destination: { type: String, required: true },
//     travelers: { type: Number, required: true },
//     travelDate: { type: Date, required: true },
//     returnDate: { type: Date, required: true },
//     transport: { type: String, required: true },
//     accommodation: { type: String, required: true },
//     price: { type: Number, required: true },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Trip", tripSchema);


const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  destination: String,
  travelers: Number,
  travelDate: String,
  returnDate: String,
  transport: String,
  accommodation: String,
  price: Number,
});

module.exports = mongoose.model("Trip", tripSchema);
