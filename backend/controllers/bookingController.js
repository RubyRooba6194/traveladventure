const Booking = require("../models/Booking");

module.exports = {
  createBooking: async (req, res) => {
    try {
      const {
        packageId,
        destinationName,
        duration,
        travelDate,
        returnDate,
        travelers,
        transport,
        accommodation,
        totalPrice,
        paymentId,
      } = req.body;
      const newBooking = new Booking({
        user: req.user.id,
        package: packageId || null,
        destinationName: destinationName || "",
        duration: duration || "",
        travelDate,
        returnDate: returnDate || null,
        travelers,
        transport: transport || "",
        accommodation: accommodation || "",
        totalPrice,
        paymentId,
        status: "Confirmed",
      });
      await newBooking.save();
      res.status(201).json(newBooking);
    } catch (err) {
      console.error("Create booking error:", err);
      res.status(400).json({ message: err.message });
    }
  },

  getUserBookings: async (req, res) => {
    try {
      const bookings = await Booking.find({ user: req.user.id })
        .populate("package")
        .sort({ createdAt: -1 });
      res.json(bookings);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getAllBookings: async (req, res) => {
    try {
      const bookings = await Booking.find()
        .populate("user", "name email")
        .populate("package", "location image days")
        .sort({ createdAt: -1 });
      res.status(200).json(bookings);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch bookings" });
    }
  },

  updateBooking: async (req, res) => {
    try {
      const updatedBooking = await Booking.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
      );
      res.status(200).json(updatedBooking);
    } catch (err) {
      res.status(500).json({ error: "Failed to update booking" });
    }
  },

  deleteBooking: async (req, res) => {
    try {
      await Booking.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Booking deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: "Failed to delete booking" });
    }
  },
};
