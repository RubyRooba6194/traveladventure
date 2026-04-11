const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const AdminUser = require("../models/AdminUser");
const { protectAdmin } = require("../middleware/AdminUserMiddleware");

// POST /api/admin/login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "Email and password required" });

    const admin = await AdminUser.findOne({ email });
    if (!admin) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: admin._id, email: admin.email, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: "8h" },
    );

    res.json({
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// POST /api/admin/seed
router.post("/seed", async (req, res) => {
  try {
    const exists = await AdminUser.findOne({ email: "admin@travelbuddy.com" });
    if (exists) {
      exists.password = await bcrypt.hash("Admin@123", 10);
      await exists.save();
      return res.json({
        message: "Admin password reset",
        email: "admin@travelbuddy.com",
        password: "Admin@123",
      });
    }
    const hashed = await bcrypt.hash("Admin@123", 10);
    const admin = new AdminUser({
      name: "Super Admin",
      email: "admin@travelbuddy.com",
      password: hashed,
      role: "admin",
    });
    await admin.save();
    res
      .status(201)
      .json({
        message: "Admin created",
        email: "admin@travelbuddy.com",
        password: "Admin@123",
      });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/admin/me
router.get("/me", protectAdmin, async (req, res) => {
  try {
    const admin = await AdminUser.findById(req.user.id).select("-password");
    res.json(admin);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
