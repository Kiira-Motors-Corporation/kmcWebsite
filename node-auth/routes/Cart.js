// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Define routes and map them to controller functions
// Get all evs
// router.get("/", cartController.getAllCarts);
// router.get("/:id", cartController.getCartById);
// router.put("/:id", cartController.updateCart);
// // Get a single evs by ID
// router.post("/",cartController.createCart);
router.delete("/item/:itemId",cartController.deleteCart)

router.get('/:userId', cartController.getOrCreateActiveCart);
router.post('/item', cartController.addItemToCart);
router.post('/checkout/:userId', cartController.checkoutCart);
router.put('/', cartController.updateCartItem);


module.exports = router;
