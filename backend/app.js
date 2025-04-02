const express = require("express");
const app = express();
const bookTourRoutes = require("./routes/bookTourRoutes");

// Middleware
app.use(express.json()); // For parsing application/json

// Register routes
app.use("/api/bookTour", bookTourRoutes);

module.exports = app;
