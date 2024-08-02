import { useState, useEffect } from "react";
import { useCart } from "../../../Context/CartContext.jsx";
import { useAuth } from "../../../Context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../../../utils/backend.js";
import background from "./assets/images/background.png";

const CheckoutPage = () => {
  const { cartItems, setCartItems } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) {
      alert("Please log in to complete your purchase.");
      navigate("/login"); // Redirect to login if not authenticated
    }
  }, [user, navigate]);

  const handleCheckout = async () => {
    if (!user) {
      alert("Please log in to complete your purchase.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(`${url}/cart/checkout/${user.id}`);

      if (response.status === 200) {
        alert("Order placed successfully!");

        // Clear the cart after successful checkout
        setCartItems([]);

        // Optionally create a new cart
        // await axios.post(`${url}/cart/item`, { userId: user.id });

        navigate("/shop"); // Redirect to order success page
      } else {
        setError("Failed to place order. Please try again.");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      setError("An error occurred during checkout. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="flex bg-white justify-center items-center flex-col" style={{
      backgroundImage: `url(${background})`,
      backgroundPosition: "center",
      objectFit: "cover",
      height:"100dvh"
    }}>
      <div className="bg-white p-8 rounded-xl">
      <h2>Checkout</h2>
      <div>
        <h3>Cart Summary</h3>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity} x {item.price} UGX
            </li>
          ))}
        </ul>
        <h4>Total: {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)} UGX</h4>
      </div>

      {error && <div className="error">{error}</div>}

      <button
        onClick={handleCheckout}
        disabled={isLoading}
         className="bg-[#292929] text-sm font-bold hover:bg-slate-600 text-white p-2"
      >
        {isLoading ? "Processing..." : "Place Order"}
      </button>
      </div>

    </div>
  );
};

export default CheckoutPage;
