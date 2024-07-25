// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

// Define routes and map them to controller functions
// Get all evs
router.get("/", vehicleController.getVehicle);
// Get all evs
router.get("/:id", vehicleController.getVehicleById);
// Get a single evs by ID
router.get("/type/:type",vehicleController.getVehicleByType);
// Get a single evs by ID
router.delete("/:id",vehicleController.deleteVehicleById);
// Get a single evs by ID
router.put("/:id",vehicleController.updateVehicle);



module.exports = router;
