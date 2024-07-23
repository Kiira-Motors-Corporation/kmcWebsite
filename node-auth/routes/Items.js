// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');


// Define routes and map them to controller functions
// Get all items
router.get("/", itemsController.getItems);
router.post('/',itemsController.createItem)
// Get a single item by ID

router.get('/:id', itemsController.getItemById);
// Craete a single item.
router.get("/insert",itemsController.createItem);



module.exports = router;
