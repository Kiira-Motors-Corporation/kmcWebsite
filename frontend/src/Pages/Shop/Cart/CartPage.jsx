import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../../Context/AuthContext.jsx";
import profile from "./assets/images/profile.png";
import Footer from "../../../Components/ui/Footer";
import { IoMdClose } from "react-icons/io";
import { useCart } from "../../../Context/CartContext.jsx";
import ConfirmationModal from "./ConfirmationModal";
import background from "./assets/images/background.png";
import { url } from "../../../utils/backend.js";
import { Link, useNavigate } from "react-router-dom";
import { MdModeEdit } from "react-icons/md";

const CartPage = () => {
  const { user, loading } = useAuth();
  const { cartItems, removeFromCart, setCartItems } = useCart();
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      fetchCartItems();
    }
  }, [loading, user]);

  const fetchCartItems = async () => {
    if (!user) {
      console.log("User is not logged in");
      return;
    }
    try {
      const response = await axios.get(`${url}/cart/${user.id}`);
      setCartItems(response.data.cart.cartItems || []);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const handleRemoveClick = (cartId, itemId) => {
    setSelectedItem({ cartId, itemId });
    setIsModalVisible(true);
  };

  const confirmRemove = async () => {
    if (selectedItem) {
      try {
        // Call the API to remove the item
        await removeFromCart(selectedItem.cartId, selectedItem.itemId);

        // Update the cart items state
        setCartItems((prevItems) =>
          prevItems.filter(
            (item) =>
              !(
                item.cartId === selectedItem.cartId &&
                item.itemId === selectedItem.itemId
              )
          )
        );
      } catch (error) {
        console.error("Error removing item:", error);
      }
    }
    setIsModalVisible(false);
    setSelectedItem(null);
  };

  const handleEditClick = (item) => {
    // Navigate to the product page with item details
    navigate(`/product/${item.itemId}`, { state: { item } });
  };

  const cancelRemove = () => {
    setIsModalVisible(false);
    setSelectedItem(null);
  };

  if (loading) {
    return <div>Loading...</div>; // Add a loading indicator while checking the session
  }

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        objectFit: "cover",
      }}
    >
      <div className="font-poppins flex justify-center gap-[4rem] w-[100vw] py-[8rem] h-[100%]">
        <div id="profile">
          <img src={profile} className="w-[3rem]" alt="" />
          <div id="name" className="text-center">
            <p className="font-semibold text-white">{user.name}</p>
          </div>
        </div>

        <div id="table-cart">
          <table className="bg-white rounded-xl text-center w-[70vw]">
            <thead>
              <tr>
                <th><div className="flex justify-center w-full h-auto ">
       <Link to="/checkout"
              style={{ transition: "all 0.3s ease" }}
              className="bg-[#292929] text-sm font-bold hover:bg-slate-600 text-white p-2"
            >
              Checkout
            </Link>
       </div></th>
                <th>Items</th>
                <th>Quantity</th>
                <th className="py-8">Price(UGX)</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td className="text-center ">
                    <img
                      className="w-[7rem]"
                      src={`${url}/${item.image_path}`}
                      alt={item.name}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price * item.quantity}</td>
                  <td className="text-2xl text-gray-400 hover:text-blue-500 transition-colors duration-200">
                    <button
                      className="text-2xl text-gray-400 hover:text-blue-500 transition-colors duration-200"
                      onClick={() => handleEditClick(item)}
                    >
                      <MdModeEdit />
                    </button>
                  </td>
                  <td className="text-2xl text-gray-400 hover:text-red-500 transition-colors duration-200">
                    <button
                      onClick={() =>
                        handleRemoveClick(item.cartId, item.itemId)
                      }
                    >
                      <IoMdClose />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
      <ConfirmationModal
        isVisible={isModalVisible}
        onConfirm={confirmRemove}
        onCancel={cancelRemove}
        message="Are you sure you want to remove this item from the cart?"
      />
    </div>
  );
};

export default CartPage;
