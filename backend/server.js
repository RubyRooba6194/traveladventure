// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const connectDB = require("./config/db");
// const authRoutes = require("./routes/authroutes");

// dotenv.config();
// connectDB();

// const cors = require("cors");

// app.use(
//   cors({
//     origin: "http://localhost:5173", // Change this to match your frontend URL
//     methods: "GET,POST,PUT,DELETE",
//     allowedHeaders: "Content-Type,Authorization",
//   })
// );


// const app = express();
// app.use(express.json());
// app.use(cors());

// app.use("/api/auth", authRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authroutes");

dotenv.config();
connectDB();

const app = express(); // Initialize app first

// CORS Configuration
app.use(
  cors({
    origin: "http://localhost:5173", // Match your frontend URL
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);

app.use(express.json()); // Middleware for JSON parsing

// Routes
app.use("/api/auth", authRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
