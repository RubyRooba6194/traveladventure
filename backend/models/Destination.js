// const mongoose = require("mongoose");

// const destinationSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String },
//   image: { type: String },
//   location: { type: String, required: true },
//   folder: { type: String, required: true },
// });

// module.exports = mongoose.model("Destination", destinationSchema);
const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
});

module.exports = mongoose.model("Destination", destinationSchema);
