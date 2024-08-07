// controllers/cartController.js
const { Cart, Users, Items,CartItems,Orders } = require('../models');


// Create a new cart
const createCart = async (req, res) => {
  const { userId, itemId, quantity } = req.body;

  try {
    // Ensure userId, itemId, and quantity are provided
    if (!userId || !itemId || !quantity) {
      return res.status(400).json({ error: 'User ID, Item ID, and Quantity are required' });
    }

    // Check if user exists
    const userExists = await Users.findByPk(userId);
    if (!userExists) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if item exists
    const itemDetails = await Items.findByPk(itemId);
    if (!itemDetails) {
      return res.status(404).json({ error: `Item with ID ${itemId} not found` });
    }


console.log(userId);
    // Create the cart
    const newCart = await Cart.create({ userId });

    console.log(newCart);

    // Create the cart item
    const createdCartItem = await CartItems.create({
      cartId: newCart.id,
      itemId: itemId,
      name:itemDetails.name,
      quantity: quantity,
      price: itemDetails.price,
      image_path: itemDetails.image_path
    });


    console.log(createdCartItem);

    res.status(201).json({
      message: 'Cart and CartItem created successfully',
      cart: {
        id: newCart.id,
        userId: newCart.userId,
        createdAt: newCart.createdAt,
        updatedAt: newCart.updatedAt,
        cartItems: [createdCartItem]
      }
    });

  } catch (error) {
    console.error('Error creating cart:', error);
    res.status(500).json({ error: 'Error creating cart' });
  }
};



// Read all carts
const getAllCarts = async (req, res) => {
  try {
    const carts = await Cart.findAll({
      include: [{ model: Users, as: 'user' }]
    });
    res.status(200).json(carts);
  } catch (error) {
    console.error('Error fetching carts:', error);
    res.status(500).json({ error: 'Error fetching carts' });
  }
};

// Read a single cart by ID
const getCartById = async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await Cart.findByPk(id,{include: [{ model: Users, as: 'user' }]
    });
    if (cart) {
      res.status(200).json(cart);
    } else {
      res.status(404).json({ error: 'Cart not found' });
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).json({ error: 'Error fetching cart' });
  }
};

// Update a cart by ID
const updateCart = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;
  try {
    const cart = await Cart.findOne({ where: { id } });
    if (cart) {
      cart.userId = userId;
      await cart.save();
      res.status(200).json(cart);
    } else {
      res.status(404).json({ error: 'Cart not found' });
    }
  } catch (error) {
    console.error('Error updating cart:', error);
    res.status(500).json({ error: 'Error updating cart' });
  }
};

// Delete a cart by ID
const deleteCart = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Cart.destroy({ where: { id } });
    if (result) {
      res.status(200).json({ message: 'Cart deleted successfully' });
    } else {
      res.status(404).json({ error: 'Cart not found' });
    }
  } catch (error) {
    console.error('Error deleting cart:', error);
    res.status(500).json({ error: 'Error deleting cart' });
  }
};

const getOrCreateActiveCart = async (req, res) => {
  const { userId } = req.params;

  try {
    // Check if the user exists
    const user = await Users.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Find the active cart for the user
    let cart = await Cart.findOne({
      where: { userId, isActive: true },
      include: [{ model: CartItems, as: 'cartItems' }]
    });

    // If no active cart, create a new one
    if (!cart) {
      cart = await Cart.create({ userId });
    }

    res.status(200).json({ cart });
  } catch (error) {
    console.error('Error fetching or creating cart:', error);
    res.status(500).json({ error: 'Error fetching or creating cart' });
  }
};

const addItemToCart = async (req, res) => {
  const { userId, itemId, quantity } = req.body;

  try {
    // Find the active cart for the user
    let cart = await Cart.findOne({
      where: { userId, isActive: true }
    });

    if (!cart) {
      // Create a new cart if no active cart is found
      cart = await Cart.create({ userId, isActive: true });
    }

    // Find item details
    const item = await Items.findByPk(itemId);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    // Check if the item already exists in the cart
    const existingCartItem = await CartItems.findOne({
      where: {
        cartId: cart.id,
        itemId
      }
    });

    let cartItem;

    if (existingCartItem) {
      // If the item exists, update the quantity
      existingCartItem.quantity += quantity;
      await existingCartItem.save();
      cartItem = existingCartItem;
    } else {
      // If the item does not exist, create a new cart item
      cartItem = await CartItems.create({
        cartId: cart.id,
        itemId,
        name:item.name,
        quantity,
        price: item.price,
        image_path: item.image_path
      });
    }

    res.status(201).json({ message: 'Item added to cart', cartItem });
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ error: 'Error adding item to cart' });
  }
};

const checkoutCart = async (req, res) => {
  const { userId } = req.params;

  try {
    // Find the active cart for the user
    const cart = await Cart.findOne({
      where: { userId, isActive: true },
      include: [{ model: CartItems, as: 'cartItems' }]
    });

    if (!cart) {
      return res.status(404).json({ error: 'Active cart not found' });
    }

    /// Create orders for each item in the cart
    const orders = cart.cartItems.map(item => ({
      userId: cart.userId,
      //userName: cart.userName,  Assuming userName is available in the cart or retrieved separately
      name: item.name,
      quantity: item.quantity,
      price: item.price,
      total:item.price*item.quantity
    }));

    // Save orders to the Orders table
    await Orders.bulkCreate(orders);

    // Mark the cart as inactive (checkout)
    cart.isActive = false;
    await cart.save();


    // const order = Orders.create({name:cart.id,price:cart.cartItems.price,quantity:cart.cartItems.quantity})
    res.status(200).json("Checkout successful");
  } catch (error) {
    console.error('Error checking out cart:', error);
    res.status(500).json({ error: 'Error checking out cart' });
  }
};

const deleteCartItem = async (req,res) =>{
  try {
    const { itemId } = req.params;
    await CartItems.destroy({ where: { id: itemId } });
    res.status(200).json({ message: 'Item removed successfully' });
  } catch (error) {
    console.error('Error removing cart item:', error);
    res.status(500).json({ error: 'Error removing cart item' });
  }
};

const updateCartItem = async (req, res) => {
  const { cartId, itemId, quantity } = req.body;

  try {
    // Find the cart item
    const cartItem = await CartItems.findOne({
      where: { cartId, itemId }
    });

    if (!cartItem) {
      return res.status(404).json({ error: 'Cart item not found' });
    }

    // Update the cart item
    cartItem.quantity = quantity;
    await cartItem.save();

    res.status(200).json({ message: 'Cart item updated', cartItem });
  } catch (error) {
    console.error('Error updating cart item:', error);
    res.status(500).json({ error: 'Error updating cart item' });
  }
};



module.exports = {
  createCart,
  getAllCarts,
  getCartById,
  updateCart,
  deleteCart,
  getOrCreateActiveCart,
  addItemToCart,
  checkoutCart,
  deleteCartItem,
  updateCartItem
};