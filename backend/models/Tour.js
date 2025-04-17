const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  destinationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Destination",
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
