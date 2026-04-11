const express = require("express");
const router = express.Router();
const {
  createBooking,
  getUserBookings,
  getAllBookings,
  updateBooking,
  deleteBooking,
} = require("../controllers/bookingController");
const protect = require("../middleware/authMiddleware");

router.post("/", protect, createBooking);
router.get("/my-bookings", protect, getUserBookings);
router.get("/all", getAllBookings);
router.put("/:id", updateBooking);
router.delete("/:id", deleteBooking);

module.exports = router;
