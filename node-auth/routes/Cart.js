// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Define routes and map them to controller functions
// Get all evs
router.get("/", cartController.getCartItems);

// Get a single evs by ID
router.post("/",cartController.createCartItem);



module.exports = router;
