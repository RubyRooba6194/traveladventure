const express = require("express");
const router = express.Router();

const { getDashboardData } = require("../controllers/DashboardController.js");

router.get("/", getDashboardData);

module.exports = router;
