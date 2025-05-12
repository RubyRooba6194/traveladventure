<<<<<<< HEAD
=======
// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const connectDB = require("./config/db");

// // 👇 Import the routes
// const authRoutes = require("./routes/userRoutes");
// // const destinationRoutes = require("./routes/destinationRoutes");
// const packageRoutes = require("./routes/packageRoutes");
// const bookingRoutes = require("./routes/bookingRoutes");
// const destinationRoutes = require("./routes/destinationRoutes");
// app.use("/api/destinations", destinationRoutes);


// dotenv.config();
// connectDB();

// const app = express(); // ✅ Initialize app FIRST

// // Middlewares
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// );
// app.use(express.json());

// // 👇 Now use routes AFTER app is declared
// app.use("/api/auth", authRoutes);
// app.use("/api/destinations", destinationRoutes);
// app.use("/api/packages", packageRoutes);
// app.use("/api/bookings", bookingRoutes);

// const PORT = process.env.PORT || 5000;
<<<<<<< HEAD
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
>>>>>>>  (Updated components and restructured backend/frontend)
=======
// app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));


// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const connectDB = require("./config/db");

// // 👇 Import routes
// const authRoutes = require("./routes/userRoutes");
// const packageRoutes = require("./routes/packageRoutes");
// const bookingRoutes = require("./routes/bookingRoutes");
// const destinationRoutes = require("./routes/destinationRoutes");
// import tripRoutes from "./routes/tripRoutes.js";


// dotenv.config();
// connectDB();

// const app = express(); // ✅ App initialized here first

// // Middlewares
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// );
// app.use(express.json());

// // 👇 Now register all routes
// app.use("/api/auth", authRoutes);
// app.use("/api/destinations", destinationRoutes);
// app.use("/api/packages", packageRoutes);
// app.use("/api/bookings", bookingRoutes);
// app.use("/api/trips", tripRoutes);


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));


>>>>>>> 2bc992f (Updated backend API and fixed destination route)
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

<<<<<<< HEAD
<<<<<<< HEAD
const authRoutes = require("./routes/authroutes.js");
const adminRoutes = require("./routes/AdminUserRoutes.js");
const dashboardRoutes = require("./routes/dashboardRoutes.js");
const tourRoutes = require("./routes/tourRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const inquiryRoutes = require("./routes/inquiryRoutes");
=======
// 👇 Import the routes
=======
// Import routes
>>>>>>> 2bc992f (Updated backend API and fixed destination route)
const authRoutes = require("./routes/userRoutes");
const packageRoutes = require("./routes/packageRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
<<<<<<< HEAD
>>>>>>>  (Updated components and restructured backend/frontend)
=======
const destinationRoutes = require("./routes/destinationRoutes");
const tripRoutes = require("./routes/tripRoutes"); // Changed to require()
>>>>>>> 2bc992f (Updated backend API and fixed destination route)

dotenv.config();
connectDB();

<<<<<<< HEAD
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
=======
const app = express(); // App initialized here first
>>>>>>> 2bc992f (Updated backend API and fixed destination route)

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
=======
// Register all routes
>>>>>>> 2bc992f (Updated backend API and fixed destination route)
app.use("/api/auth", authRoutes);
app.use("/api/destinations", destinationRoutes);
app.use("/api/packages", packageRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/trips", tripRoutes);

>>>>>>>  (Updated components and restructured backend/frontend)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
