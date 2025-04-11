// import express from "express";
// import { login, getMe, refresh } from "../controllers/AdminUserController.js";
// import { protect } from "../middleware/AdminUserMiddleware.js";

// const router = express.Router();

// router.post("/login", login);
// router.post("/refresh", refresh);
// router.get("/me", protect, getMe); // 💡 use protect middleware

// export default router;

// routes/adminUserRoutes.js
const express = require("express");
const {
  login,
  getMe,
  refresh,
} = require("../controllers/AdminUserController.js");
const { protect } = require("../middleware/AdminUserMiddleware.js");

const router = express.Router();

router.post("/login", login);
router.post("/refresh", refresh);
router.get("/me", protect, getMe); // 💡 use protect middleware

module.exports = router;
