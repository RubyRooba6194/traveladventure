const express = require("express");
const {
  getDestinations,
  getDestinationById,
  getTravelHighlights,
} = require("../controllers/exploreController");
const router = express.Router();

// Route to get all destinations
router.get("/destinations", getDestinations);

// Route to get details of a specific destination
router.get("/destinations/:id", getDestinationById);

// Route to get travel highlights
router.get("/travel-highlights", getTravelHighlights);

module.exports = router;
