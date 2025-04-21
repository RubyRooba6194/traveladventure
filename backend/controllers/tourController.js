const Tour = require("../models/Tour");

// GET all tours
const getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find().populate("destinationId");
    res.status(200).json(tours);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch tours" });
  }
};

// POST new tour
const createTour = async (req, res) => {
  try {
    const { name, destinationId, price } = req.body;
    const newTour = new Tour({ name, destinationId, price });
    await newTour.save();
    res.status(201).json(newTour);
  } catch (err) {
    res.status(500).json({ error: "Failed to create tour" });
  }
};

// PUT update tour
const updateTour = async (req, res) => {
  try {
    const updated = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update tour" });
  }
};

// DELETE tour
const deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Tour deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete tour" });
  }
};

module.exports = {
  getAllTours,
  createTour,
  updateTour,
  deleteTour
};
