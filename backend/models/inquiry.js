const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Inquiry = mongoose.model("Inquiry", inquirySchema);
module.exports = Inquiry;
