import { createContext, useState, useContext, useEffect } from "react";
import { useAuth } from "./AuthContext.jsx";
import axios from "axios";
import { url } from "../utils/backend.js";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const { user } = useAuth(); // Get the user from AuthContext

  const [cartItems, setCartItems] = useState(() => {
    // Load from localStorage on initialization
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    // Update localStorage whenever cartItems changes
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      } else {
        return [...prevItems, { ...item, quantity }];
      }
    });
  };

  const updateCartItem = (item, quantity) => {
    // Update existing item logic
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity } : cartItem
      )
    );
  };

  const removeFromCart = async (cartId, itemId) => {
    try {
      await axios.delete(`${url}/cart/${cartId}/items/${itemId}`);
      // Optionally update the cartItems state to reflect the change
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const value = {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    updateCartItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
