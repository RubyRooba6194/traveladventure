const express = require("express");
const { login, getMe, refresh } = require("../controllers/AdminUserController");
const { protect } = require("../middleware/AdminUserMiddleware");

const router = express.Router();

router.post("/login", login);
router.post("/refresh", refresh);
router.get("/me", protect, getMe); // 💡 use protect middleware

module.exports = router;
