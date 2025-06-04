// const mongoose = require("mongoose");

// const bookingSchema = new mongoose.Schema(
//   {
//     customerName: { type: String, required: true },
//     customerEmail: { type: String, required: true },
//     tourName: { type: String, required: true },
//     startDate: { type: Date, required: true },
//     endDate: { type: Date, required: true },
//     numberOfPeople: { type: Number, required: true },
//     totalPrice: { type: Number, required: true },
//     status: {
//       type: String,
//       enum: ["pending", "confirmed", "cancelled"],
//       default: "pending",
//     },
//   },
//   { timestamps: true }
// );

// const Booking = mongoose.model("Booking", bookingSchema);

// module.exports = Booking;


const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  destination: String,
  travelers: Number,
  travelDate: Date,
  returnDate: Date,
  transport: String,
  accommodation: String,
  price: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
