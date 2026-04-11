const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    package: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Package",
      default: null,
    },
    destinationName: { type: String, default: "" },
    duration: { type: String, default: "" },
    travelers: { type: Number, required: true, default: 1 },
    travelDate: { type: Date, required: true },
    returnDate: { type: Date, default: null },
    transport: { type: String, default: "" },
    accommodation: { type: String, default: "" },
    totalPrice: { type: Number, required: true },
    paymentId: { type: String, required: true },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Cancelled"],
      default: "Confirmed",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Booking", bookingSchema);
