// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const connectDB = require("./config/db");
// const authRoutes = require("./routes/authroutes");
// const adminRoutes =require ("./routes/AdminUserRoutes.js");
// const dashboardRoutes =require("./routes/dashboardRoutes.js");
// const tourRoutes = require("./routes/tourRoutes");
// const bookingRoutes = require("./routes/bookingRoutes");

// dotenv.config();
// connectDB();

// const app = express(); // Initialize app first

// // CORS Configuration
// app.use(
//   cors({
//     origin: "http://localhost:5173", // Match your frontend URL
//     methods: "GET,POST,PUT,DELETE",
//     allowedHeaders: "Content-Type,Authorization",
//   })
// );

// app.use(express.json()); // Middleware for JSON parsing

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/admin", adminRoutes);  // Admin-specific routes
// app.use("/api/dashboard", dashboardRoutes);  // Admin-specific routes
// app.use("/api/tours", tourRoutes); // Tour Routes
// app.use("/api/bookings", bookingRoutes);



// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authroutes");
const adminRoutes = require("./routes/AdminUserRoutes.js");
const dashboardRoutes = require("./routes/dashboardRoutes.js");
const tourRoutes = require("./routes/tourRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const inquiryRoutes = require("./routes/inquiryRoutes");
dotenv.config();
connectDB();

const app = express(); // Initialize app first

// ✅ CORS Configuration
const allowedOrigins = ["http://localhost:5173", "http://localhost:5174"];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true,
//     methods: "GET,POST,PUT,DELETE",
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

app.use(
  cors({
    origin: function (origin, callback) {
      const allowedOrigins = ["http://localhost:5173", "http://localhost:5174"];
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Middleware
app.use(express.json()); // For parsing JSON requests

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);        // Admin-specific routes
app.use("/api/dashboard", dashboardRoutes); // Dashboard routes
app.use("/api/tours", tourRoutes);         // Tour routes
app.use("/api/bookings", bookingRoutes);   // Booking routes
app.use("/api", inquiryRoutes);

// ✅ Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
