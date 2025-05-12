// const express = require("express");
// const router = express.Router();
// const {
//   createDestination,
//   getAllDestinations,
//   deleteDestination,updateDestination,
// } = require("../controllers/destinationController");

// router.post("/", createDestination);
// router.get("/", getAllDestinations);
// router.delete("/:id", deleteDestination);
// router.put("/:id", updateDestination);



// module.exports = router;
const express = require("express");
const router = express.Router();
const Destination = require("../models/Destination");

// Get all destinations
router.get("/", async (req, res) => {
  const destinations = await Destination.find();
  res.json(destinations);
});

// Add new destination
router.post("/", async (req, res) => {
  const { name, image, description } = req.body;
  const newDestination = new Destination({ name, image, description });
  await newDestination.save();
  res.status(201).json(newDestination);
});

// Update destination
router.put("/:id", async (req, res) => {
  const { name, image, description } = req.body;
  const updated = await Destination.findByIdAndUpdate(
    req.params.id,
    { name, image, description },
    { new: true }
  );
  res.json(updated);
});

// Delete destination
router.delete("/:id", async (req, res) => {
  await Destination.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

module.exports = router;
