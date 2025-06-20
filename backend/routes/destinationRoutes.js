const express = require("express");
const router = express.Router();
const {
  createDestination,
  getAllDestinations,
  deleteDestination,updateDestination,
} = require("../controllers/destinationController");

router.post("/", createDestination);
router.get("/", getAllDestinations);
router.delete("/:id", deleteDestination);
router.put("/:id", updateDestination);



module.exports = router;
