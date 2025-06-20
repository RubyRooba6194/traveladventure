const Destination = require("../models/Destination");

exports.createDestination = async (req, res) => {
  try {
    const destination = new Destination(req.body);
    await destination.save();
    res.status(201).json(destination);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteDestination = async (req, res) => {
  try {
    const destination = await Destination.findByIdAndDelete(req.params.id);
    if (!destination) {
      return res.status(404).json({ message: "Destination not found" });
    }
    res.status(200).json({ message: "Destination deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
exports.updateDestination = async (req, res) => {
  try {
    const updatedDestination = await Destination.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedDestination) {
      return res.status(404).json({ message: "Destination not found" });
    }

    res.status(200).json(updatedDestination);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

