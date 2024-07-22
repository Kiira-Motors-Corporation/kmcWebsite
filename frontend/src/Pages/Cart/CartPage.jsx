import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../Components/AuthContext";
import profile from "./assets/images/profile.png";
import Footer from "../../Components/ui/Footer";
import { IoMdClose } from "react-icons/io";
import { useCart } from "./CartContext";
import ConfirmationModal from "./ConfirmationModal";
import background from "./assets/images/background.png";
import {url} from "../../utils/backend.js";

const CartPage = () => {
  const { user, loading } = useAuth();
  const { cartItems, removeFromCart, setCartItems } = useCart();
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

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
      const response = await axios.get(url + "/cart", {
        params: { userId: user.id },
      });
      setCartItems(response.data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Add a loading indicator while checking the session
  }

  const handleRemoveClick = (itemId) => {
    setSelectedItem(itemId);
    setIsModalVisible(true);
  };

  if(user){
    console.log(user);
  }else{
    console.log("There is no user");
  }

  const confirmRemove = async () => {
    console.log(`Confirming removal of item with ID: ${selectedItem}`);
    await removeFromCart(selectedItem);
    setIsModalVisible(false);
    setSelectedItem(null);
  };

  const cancelRemove = () => {
    setIsModalVisible(false);
    setSelectedItem(null);
  };

  return (
    <div  style={{backgroundImage:`url(${background})`,backgroundPosition:'center',objectFit:'cover'}} >
      <div className="font-poppins flex justify-center gap-[4rem] w-[100vw] py-[8rem] h-[100%]">
        <div id="profile">
          <img src={profile} className="w-[4rem]" alt="" />
          <div id="name" className="text-center">
            <p className="font-semibold">{user.username}</p>
          </div>
        </div>
        <div id="table-cart">
          <table className="bg-white  rounded-2xl text-center w-[70vw]">
            <thead>
              <tr>
                <th></th>
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
                  <td className="text-2xl text-gray-400 hover:text-red-500 transition-colors duration-200">
                    <button onClick={() => handleRemoveClick(item.id)}>
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
