import { useEffect, useState } from "react";
import { useCart } from "../../Context/CartContext.jsx";
import { useAuth } from "../../Context/AuthContext";
import axios from "axios";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import background from "./assets/images/background.png";
import { url } from "../../utils/backend.js";

const ProductPage = () => {
  const [items, setItems] = useState([]);
  const [relatedItems, setRelatedItems] = useState([]);
  const { user } = useAuth();
  const { addToCart, updateCartItem } = useCart();
  const [loading, setLoading] = useState(true);
  const [quantities, setQuantities] = useState({});
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Check if we are editing an existing cart item
  const isEditing = location.state?.item != null;
  const existingItem = location.state?.item;

  useEffect(() => {
    fetchItems();
    fetchRelatedItems();
  }, [id]);

  useEffect(() => {
    // If editing, prefill the quantity with existing values
    if (isEditing && existingItem) {
      setQuantities({ [existingItem.itemId]: existingItem.quantity });
    }
  }, [isEditing, existingItem]);

  const fetchItems = async () => {
    try {
      const response = await axios.get(`${url}/items/${id}`);
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching item:", error);
    }
  };

  const fetchRelatedItems = async () => {
    try {
      const response = await axios.get(`${url}/items?min=1&max=5`);
      setRelatedItems(response.data);
    } catch (error) {
      console.error("Error fetching related items:", error);
    }
  };

  const handleAddOrUpdateCart = async (item) => {
    if (!user) {
      alert("You need to log in to add items to the cart");
      navigate("/login")
      return;
    }

    try {
      const quantity = quantities[item.id] || 1; // Default to 1 if no quantity selected

      if (isEditing) {
        // Update existing cart item
        await axios.put(`${url}/cart`, {
          cartId: existingItem.cartId,
          itemId: item.id,
          quantity,
        });

        updateCartItem(item, quantity);
        alert("Item updated in cart");
      } else {
        // Add new item to cart
        const response = await axios.post(`${url}/cart/item`, {
          userId: user.id,
          itemId: item.id,
          quantity,
        });

        if (response) {
          addToCart(item, quantity);
          alert("Item added to cart");
        }
      }

      // Redirect to cart or provide feedback after the operation
      navigate("/cart");
    } catch (error) {
      console.error("Error adding or updating item in cart:", error);
    }
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    setQuantities({
      ...quantities,
      [itemId]: newQuantity,
    });
  };

  return (
    <div className="w-full ring-2 h-auto">
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "top",
          objectFit: "cover",
        }}
        className="md:h-[90vh] h-[70vh] flex flex-col md:flex-row w-full justify-center gap-[6rem] items-center px-[10vw]"
      >
        <div
          style={{ transition: "all 0.3s ease" }}
          className="hover:cursor-pointer md:w-[25rem]  w-10/12 bg-gray-100 hover:scale-105 shadow-lg p-1 rounded-2xl"
          key={items.id}
        >
          <center>
          <div className="w-5/12 flex  justify-center py-4 rounded-2xl">
            <img
              className="w-full object-cover object-center"
              src={`${url}/${items.image_path}`}
              alt={items.name}
            />
          </div>
          </center>

        </div>
        <div className="text-white flex flex-col gap-4">
          <h3 className="font-semibold text-3xl">{items.name}</h3>
          <h3 className="">
            {items.price}&nbsp; <b>UGX</b>
          </h3>
          <p className="w-10/12">{items.description}</p>

          <div className="flex justify-center flex-row w-full gap-2">
            <p className="">
              <input
                className="border-none text-black"
                type="number"
                value={quantities[items.id] || 1}
                onChange={(e) =>
                  handleQuantityChange(items.id, parseInt(e.target.value))
                }
                min="1"
              />
            </p>
            <button
              style={{ transition: "all 0.3s ease" }}
              className="bg-[#292929] text-sm font-bold hover:bg-slate-600 text-white p-2"
              onClick={() => handleAddOrUpdateCart(items)}
            >
              {isEditing ? "Update Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#1E1E1E]">
        <center className="text-white">Related Products </center>
        <div className="flex flex-row justify-center md:gap-[1rem] px-[10vw]  h-auto items-center flex-wrap">
          {relatedItems.map((item) => (
            <div
              style={{ transition: "all 0.3s ease" }}
              className="hover:cursor-pointer text-white w-[10rem] hover:scale-105 shadow-lg p-1 rounded-2xl flex justify-center gap-1 items-center flex-col"
              key={item.id}
            >
              <div className="bg-white w-[8rem] h-[10rem] py-4 rounded-2xl">
                <img
                  className="w-[9rem]"
                  src={`${url}/${item.image_path}`}
                  alt={item.name}
                />
              </div>

              <Link to={`/product/${item.id}`} className="font-semibold text-center">
                {item.name}
              </Link>
              <h3 className="text-center">
                <b>UGX</b>&nbsp;{item.price}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
