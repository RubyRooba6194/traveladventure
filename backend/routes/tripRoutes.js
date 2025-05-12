// // backend/routes/tripRoutes.js
// import express from "express";
// import { createTrip } from "../controllers/tripController.js";

// const router = express.Router();

// router.post("/add", createTrip);

// export default router;




// backend/routes/tripRoutes.js
// const express = require("express");
// const { createTrip } = require("../controllers/tripController");

// const router = express.Router();

// router.post("/add", createTrip);

// module.exports = router;


// backend/routes/tripRoutes.js
const express = require("express");
const { createTrip } = require("../controllers/tripController");

const router = express.Router();

router.post("/add", createTrip);

module.exports = router;
