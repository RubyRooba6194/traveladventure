// // backend/controllers/tripController.js
// import Trip from "../models/Trip.js";

// export const createTrip = async (req, res) => {
//   try {
//     const newTrip = new Trip(req.body);
//     const savedTrip = await newTrip.save();
//     res.status(201).json(savedTrip);
//   } catch (err) {
//     res.status(500).json({ message: "Failed to create trip", error: err });
//   }
// };



// backend/controllers/tripController.js
const Trip = require("../models/Trip"); // if you have a Trip model

const createTrip = async (req, res) => {
  try {
    const newTrip = new Trip(req.body);
    const savedTrip = await newTrip.save();
    res.status(201).json(savedTrip);
  } catch (error) {
    console.error("Trip save error:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createTrip };
