// import User from "../models/AdminUser.js";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// const SECRET = "f86302dd7c5e0bd0fd7aa62375cc7abe3d3643b69847fa81289d18ab8e06f542";

// export const login = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(401).json({ message: "Invalid credentials" });

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) return res.status(401).json({ message: "Invalid credentials" });

//     const token = jwt.sign({ id: user._id, role: user.role }, SECRET, { expiresIn: "15m" });
//     const refreshToken = jwt.sign({ id: user._id }, SECRET, { expiresIn: "7d" });

//     res.json({ token, refreshToken, user });
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// };

// export const getMe = async (req, res) => {
//   const user = await User.findById(req.user.id).select("-password");
//   res.json(user);
// };

// export const refresh = async (req, res) => {
//   const { refreshToken } = req.body;
//   if (!refreshToken) return res.status(403).json({ message: "No refresh token" });

//   try {
//     const userData = await jwt.verify(refreshToken, SECRET);
//     const token = jwt.sign({ id: userData.id, role: userData.role }, SECRET, { expiresIn: "15m" });
//     res.json({ token });
//   } catch (err) {
//     return res.status(403).json({ message: "Invalid refresh token" });
//   }
// };


// controllers/AdminUserController.js
const User = require("../models/AdminUser.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SECRET = "15b3aa1dcca918e7286cabf34dad31b8f3db4cb5be161e318860276e0d76638c";

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, role: user.role }, SECRET, { expiresIn: "15m" });
    const refreshToken = jwt.sign({ id: user._id }, SECRET, { expiresIn: "7d" });

    res.json({ token, refreshToken, user });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

const getMe = async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
};

const refresh = async (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.status(403).json({ message: "No refresh token" });

  try {
    const userData = await jwt.verify(refreshToken, SECRET);
    const token = jwt.sign({ id: userData.id, role: userData.role }, SECRET, { expiresIn: "15m" });
    res.json({ token });
  } catch (err) {
    return res.status(403).json({ message: "Invalid refresh token" });
  }
};

module.exports = {
  login,
  getMe,
  refresh,
};
