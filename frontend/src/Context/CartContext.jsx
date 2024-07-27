import { createContext, useState, useContext, useEffect } from "react";
import { useAuth } from "./AuthContext.jsx";
import axios from "axios";
import { url } from "../utils/backend.js";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const { user } = useAuth(); // Get the user from AuthContext

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
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



  // http://localhost:3002/cart/userId?:1

  const removeFromCart = async (itemId) => {
    try {
      const response = await axios.delete(`${url}/cart/${itemId}`,{
        data: { userId: user.id },
      });

      if (response.status === 200) {
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== itemId));
      }
    } catch (error) {
      console.error("Error removing item:", error);

    }

  };

  const value = {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
