// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const specificationsController = require('../controllers/specificationsController');

// Define routes and map them to controller functions
// Get all evs
router.get("/", specificationsController.getVehicle);
// Get all evs
router.get("/:id", specificationsController.getVehicleById);
// Get a single evs by ID
router.get("/type/:type",specificationsController.getVehicleByType);
// Get a single evs by ID
router.delete("/:id",specificationsController.deleteVehicleById);
// Get a single evs by ID
router.put("/:id",specificationsController.updateVehicle);
router.get("/type/:type/:id",specificationsController.getVehicleByTypeById);


module.exports = router;
