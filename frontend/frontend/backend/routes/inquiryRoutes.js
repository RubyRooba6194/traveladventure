const express = require("express");
const { createInquiry, getInquiries } = require("../controllers/inquiryController");

const router = express.Router();

router.post("/inquiries", createInquiry);
router.get("/inquiries", getInquiries); // for admin

module.exports = router;
