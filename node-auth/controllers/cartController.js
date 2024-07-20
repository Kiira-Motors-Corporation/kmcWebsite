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

module.exports = {
  createCartItem,
  getCartItems
};
