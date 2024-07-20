// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const evsOrderscontroller = require('../controllers/evsOrderscontroller');

// Define routes and map them to controller functions
// Get all evs


// Get a single evs by ID
router.get("/:userId",evsOrderscontroller.getEvsOrders);
router.post("/",evsOrderscontroller.createEvsOrders);



module.exports = router;
