import { createContext, useState, useContext, useEffect } from "react";
import { useAuth } from "../../Components/AuthContext";
import axios from "axios";


const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const { user } = useAuth(); // Get the user from AuthContext
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

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

  const removeFromCart = async (itemId) => {
    if (!user) {
      console.error('User not authenticated');
      return;
    }

    try {
      console.log(`Attempting to remove item with ID: ${itemId}`);
      const response = await axios.delete(`http://localhost:3000/cart/${itemId}`, {
        data: { userId: user.id },
      });
      console.log('Response from backend:', response);
      if (response.status === 200) {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
      } else {
        console.error('Error removing item from cart:', response.data);
      }
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
