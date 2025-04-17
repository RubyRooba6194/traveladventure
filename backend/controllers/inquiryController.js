const Inquiry = require("../models/inquiry");

// POST: Create new inquiry
const createInquiry = async (req, res) => {
  try {
    const newInquiry = new Inquiry(req.body);
    await newInquiry.save();
    res.status(201).json({ message: "Inquiry submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit inquiry", details: error.message });
  }
};

// GET: Fetch all inquiries (for admin)
const getInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.status(200).json(inquiries);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch inquiries" });
  }
};
      
module.exports = {
  createInquiry,
  getInquiries,
};
