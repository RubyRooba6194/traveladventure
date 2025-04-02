const express = require("express");
const router = express.Router();
const { verifyPayment } = require("../services/paymentService");
const { authenticate } = require("../middleware/authMiddleware"); // Optional: If you need authentication

// Route for verifying payment
router.post("/verify-payment", authenticate, async (req, res) => {
  const { paymentId } = req.body;

  try {
    const paymentData = await verifyPayment(paymentId);
    res.status(200).json({ message: "Payment successful", data: paymentData });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Payment verification failed", error: error.message });
  }
});

module.exports = router;
