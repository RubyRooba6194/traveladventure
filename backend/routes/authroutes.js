const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const User = require("../models/User");
const { protectAdmin } = require("../middleware/AdminUserMiddleware");

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);

// Admin: get all users
router.get("/users", protectAdmin, async (req, res) => {
  try {
    const users = await User.find().select("-password").sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
