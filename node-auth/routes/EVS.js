// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const evsController = require('../controllers/evsController');

// Define routes and map them to controller functions
// Get all evs
router.get("/", evsController.getEVS);
// Get a single evs by ID
router.get("/:id",evsController.getSingleEVS);



module.exports = router;
