// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const coachOrdersController = require('../controllers/coachOrdersController');

// Define routes and map them to controller functions
// Get all evs


// Get a single evs by ID
router.get("/:userId",coachOrdersController.getCoachOrders);
router.post("/",coachOrdersController.createCoachOrders);



module.exports = router;
