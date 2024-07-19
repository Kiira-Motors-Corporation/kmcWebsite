// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const coachController = require('../controllers/coachController');

// Define routes and map them to controller functions
// Get all evs
router.get("/", coachController.getCoach);

// Get a single evs by ID
router.get("/:id",coachController.getSingleCoach);



module.exports = router;
