const Destination = require("../models/Destination");

// Get all destinations
exports.getDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get details of a specific destination
exports.getDestinationById = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    if (!destination) {
      return res.status(404).json({ message: "Destination not found" });
    }
    res.json(destination);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get travel highlights
exports.getTravelHighlights = async (req, res) => {
  try {
    const highlights = await Destination.find({}, "title description image");
    res.json(highlights);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
