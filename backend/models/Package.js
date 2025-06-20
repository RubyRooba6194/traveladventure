const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: String },
  details: { type: String },
  destinationId: { type: mongoose.Schema.Types.ObjectId, ref: "Destination" },
});

module.exports = mongoose.model("Package", packageSchema);
