// Backend example (Express.js)
const express = require('express');
const router = express.Router();

// Your user model and validation logic
const User = require('../models/User'); // Assuming you have a User model

// Signup route
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Name, email, and password are required" });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user logic (e.g., hashing password)
    const newUser = new User({
      name,
      email,
      password, // Make sure to hash the password in real applications
    });

    await newUser.save();

    // Send success response
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
