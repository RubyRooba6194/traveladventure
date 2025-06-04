const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema({
  name: String,
  description: String,
  location: String,
  image: String,
  highlights: [String],
});

module.exports = mongoose.model("Destination", destinationSchema);
