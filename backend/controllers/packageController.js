const Package = require("../models/Package");

exports.createPackage = async (req, res) => {
  try {
    const travelPackage = new Package(req.body);
    await travelPackage.save();
    res.status(201).json(travelPackage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllPackages = async (req, res) => {
  try {
    const packages = await Package.find().populate("destinationId");
    res.json(packages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
