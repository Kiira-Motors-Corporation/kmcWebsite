// controllers/cartController.js
const { CartItems, Users, Items,Cart } = require('../models');

// Create a new cart item
const createCartItem = async (req, res) => {
  const { cartId } = req.params;
  const { itemId, quantity } = req.body;
  try {
    const cartItem = await CartItems.create({ cartId, itemId, quantity });
    res.status(201).json(cartItem);
  } catch (error) {
    console.error('Error creating cart item:', error);
    res.status(500).json({ error: 'Error creating cart item' });
  }
};

// Read all items in a cart
const getCartItems = async (req, res) => {
  const { cartId } = req.params;
  try {
    const cartItems = await CartItems.findAll({
      where: { cartId },
      include: [{ model: Items, as: 'item' }]
    });
    res.status(200).json(cartItems);
  } catch (error) {
    console.error('Error fetching cart items:', error);
    res.status(500).json({ error: 'Error fetching cart items' });
  }
};

// const getCartItemsByUserId = async (userId) => {
//   try {
//     const user = await Users.findByPk(userId, {
//       include: {
//         model: Cart,
//         as: 'carts',
//         include: {
//           model: CartItems,
//           as: 'cartItems',
//           include: {
//             model: Items,
//             as: 'item'
//           }
//         }
//       }
//     });

//     if (!user) {
//       return { error: 'User not found' };
//     }

//     const cartItems = user.carts.flatMap(cart => cart.cartItems);

//     return { cartItems };
//   } catch (error) {
//     console.error('Error fetching cart items:', error);
//     return { error: 'Error fetching cart items' };
//   }
// };

const getCartItemsByUserId = async(req,res) =>{
  const {cartId} = req.params;

try{
  const cartItem = CartItems.findOne({where:{cartId}})
  res.status(200).json(cartItem)
} catch(error){
res.status(500).send("Invalid User")
}

}

// Update a cart item by ID
const updateCartItem = async (req, res) => {
  const { cartId, itemId } = req.params;
  const { quantity } = req.body;
  try {
    const cartItem = await CartItems.findOne({ where: { cartId, itemId } });
    if (cartItem) {
      cartItem.quantity = quantity;
      await cartItem.save();
      res.status(200).json(cartItem);
    } else {
      res.status(404).json({ error: 'Cart item not found' });
    }
  } catch (error) {
    console.error('Error updating cart item:', error);
    res.status(500).json({ error: 'Error updating cart item' });
  }
};

// Delete a cart item by ID
const deleteCartItem = async (req, res) => {
  const { cartId, itemId } = req.params;
  try {
    const result = await CartItems.destroy({ where: { cartId, itemId } });
    if (result) {
      res.status(200).json({ message: 'Cart item deleted successfully' });
    } else {
      res.status(404).json({ error: 'Cart item not found' });
    }
  } catch (error) {
    console.error('Error deleting cart item:', error);
    res.status(500).json({ error: 'Error deleting cart item' });
  }
};

module.exports = {
  createCartItem,
  getCartItems,
  updateCartItem,
  deleteCartItem,
  getCartItemsByUserId
};