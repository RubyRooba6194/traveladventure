const express = require("express");
const router = express.Router();
<<<<<<< HEAD

const {
  getAllBookings,
  createBooking,
  updateBooking,
  deleteBooking,
} = require("../controllers/bookingController");

router.get("/", getAllBookings);
router.post("/", createBooking);
router.put("/:id", updateBooking);
router.delete("/:id", deleteBooking);
=======
const {
  createBooking,
  getUserBookings,
} = require("../controllers/bookingController");

router.post("/", createBooking);
router.get("/:userId", getUserBookings);
>>>>>>>  (Updated components and restructured backend/frontend)

module.exports = router;
