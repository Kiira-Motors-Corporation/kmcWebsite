// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartItemController');

// Define routes and map them to controller functions
// Get all evs
router.post('/:cartId/items', cartController.createCartItem);
router.get('/:cartId/items', cartController.getCartItems);
router.get('/:cartId/items/:userId', cartController.getCartItemsByUserId);
router.put('/:cartId/items/:itemId', cartController.updateCartItem);
router.delete('/:cartId/items/:itemId', cartController.deleteCartItem);


module.exports = router;
