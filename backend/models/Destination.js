const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  location: { type: String, required: true },
  folder: { type: String, required: true },
});

module.exports = mongoose.model("Destination", destinationSchema);
