// // middleware/authMiddleware.js
// import jwt from "jsonwebtoken";
// import User from "../models/AdminUser.js"; // adjust path if needed

// const SECRET = "f86302dd7c5e0bd0fd7aa62375cc7abe3d3643b69847fa81289d18ab8e06f542";

// export const protect = async (req, res, next) => {
//   let token;

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     try {
//       token = req.headers.authorization.split(" ")[1];
//       const decoded = jwt.verify(token, SECRET);

//       req.user = { id: decoded.id, role: decoded.role }; // 🔥 fixed line
//       next();
//     } catch (err) {
//       res.status(401).json({ message: "Unauthorized: Token failed" });
//     }
//   } else {
//     res.status(401).json({ message: "Unauthorized: No token" });
//   }
// };


// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");
const User = require("../models/AdminUser.js"); // adjust path if needed

const SECRET = "15b3aa1dcca918e7286cabf34dad31b8f3db4cb5be161e318860276e0d76638c";

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, SECRET);

      req.user = { id: decoded.id, role: decoded.role }; // 🔥 fixed line
      next();
    } catch (err) {
      res.status(401).json({ message: "Unauthorized: Token failed" });
    }
  } else {
    res.status(401).json({ message: "Unauthorized: No token" });
  }
};

module.exports = { protect };
