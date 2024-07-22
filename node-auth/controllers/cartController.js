// controllers/cartController.js
const { Cart, Users, Items } = require('../models');

const createCartItem = async (req, res) => {
  const { userId, itemId, quantity, price } = req.body;

  try {
    const cartItem = await Cart.create({
      userId,
      itemId,
      quantity,
      price,
    });

    res.status(201).json(cartItem);
  } catch (err) {
    console.error("Error creating cart item:", err);
    res.status(500).json({ error: "Error creating cart item" });
  }
};

const getCartItemsByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    const cartItems = await Cart.findAll({ where: { userId } });
    if (cartItems.length === 0) {
      return res.status(404).json({ message: 'No items found for this user' });
    }
    res.json(cartItems);
  } catch (err) {
    console.error('Error fetching cart items:', err);
    res.status(500).json({ error: 'Error fetching cart items' });
  }
};


const getCartItems = async (req, res) => {
  try {
    const cartItems = await Cart.findAll({
      include: [
        {
          model: Users,
          as: 'user',
          attributes: ['name']
        },
        {
          model: Items,
          as: 'item',
          attributes: ['name', 'price']
        }
      ]
    });

    res.status(200).json(cartItems);
  } catch (err) {
    console.error("Error fetching cart items:", err);
    res.status(500).json({ error: "Error fetching cart items" });
  }
};

const deleteCartItem = async (req, res) => {
  const { userId, itemId } = req.body;

  try {
    const result = await Cart.destroy({
      where: {
        userId: userId,
        itemId: itemId
      }
    });

    if (result) {
      res.status(200).json({ message: 'Cart item deleted successfully' });
    } else {
      res.status(404).json({ message: 'Cart item not found' });
    }
  } catch (err) {
    console.error('Error deleting cart item:', err);
    res.status(500).json({ error: 'Error deleting cart item' });
  }
};

module.exports = {
  createCartItem,
  getCartItems,
  deleteCartItem,
  getCartItemsByUserId
};
