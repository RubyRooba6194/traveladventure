<<<<<<< HEAD
=======
// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const connectDB = require("./config/db");

// const userRoutes = require("./routes/authRoutes"); // ✅ Update if name is authRoutes

// dotenv.config();
// connectDB();

// const app = express();

// app.use(
//   cors({
//     origin: "http://localhost:5173", // Replace with your frontend port
//     credentials: true,
//   })
// );

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:5173");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// app.use(express.json());

// app.use("/api/auth", authRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
>>>>>>>  (Updated components and restructured backend/frontend)
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

<<<<<<< HEAD
const authRoutes = require("./routes/authroutes.js");
const adminRoutes = require("./routes/AdminUserRoutes.js");
const dashboardRoutes = require("./routes/dashboardRoutes.js");
const tourRoutes = require("./routes/tourRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const inquiryRoutes = require("./routes/inquiryRoutes");
=======
// 👇 Import the routes
const authRoutes = require("./routes/userRoutes");
const destinationRoutes = require("./routes/destinationRoutes");
const packageRoutes = require("./routes/packageRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
>>>>>>>  (Updated components and restructured backend/frontend)

dotenv.config();
connectDB();

<<<<<<< HEAD
const app = express();

const allowedOrigins = ["http://localhost:5173", "http://localhost:5174"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: ["Content-Type", "Authorization"],
=======
const app = express(); // ✅ Initialize app FIRST

// Middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
>>>>>>>  (Updated components and restructured backend/frontend)
  })
);
app.use(express.json());

<<<<<<< HEAD
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/tours", tourRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api", inquiryRoutes);

// Start Server
=======
// 👇 Now use routes AFTER app is declared
app.use("/api/auth", authRoutes);
app.use("/api/destinations", destinationRoutes);
app.use("/api/packages", packageRoutes);
app.use("/api/bookings", bookingRoutes);

>>>>>>>  (Updated components and restructured backend/frontend)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
