import { useEffect, useState } from "react";
import { useAuth } from "../../../../Context/AuthContext";
import { fetchUserOrders,fetchUserOrdersCoach } from "./OrderService";
import Footer from "../../../../Components/ui/Footer";

const DisplayPage = () => {
  const { user } = useAuth();
  const [userOrders, setUserOrders] = useState([]); //evs
  const [userOrdersCoach, setUserOrdersCoach] = useState([]);

  useEffect(() => {
    const getUserOrders = async () => {
      if (user) {
        try {
          const orders = await fetchUserOrders(user.id);
          setUserOrders(orders);
          const ordersCoach = await fetchUserOrdersCoach(user.id);
          setUserOrdersCoach(ordersCoach);
        } catch (error) {
          console.error("Error fetching user orders:", error);
        }
      }
    };

    getUserOrders();
  }, [user]);

  return (
    <div className="font-poppins">
       <div className="bg-gray-400  flex items-start flex-col h-full py-[7%] px-[7%]">
      <h1 className="bg-white w-full p-3 rounded-lg">EVS Orders Page</h1>
      <div className="py-4 flex items-center gap-4">Total Orders: <div className="bg-black font-bold text-sm text-white  px-2  text-center rounded-full">{userOrders.length}</div></div>
      <div className="flex gap-[7%]">
        {userOrders.map((orderItem) => (
          <div
            className="bg-gray-300 text-sm  cursor-pointer w-[15rem] shadow-lg p-3 rounded-lg"
            key={orderItem.id}
          >
            <p className="font-bold text-lg">Name: {orderItem.name}</p>

            <p>Exterior Color: {orderItem.exteriorColor}</p>
            <p>Interior Color: {orderItem.interiorColor}</p>
            <p>Floor Trim: {orderItem.floorTrim}</p>
            <button className="bg-red-700 transition-all duration-300 hover:bg-red-500 hover:scale-105 text-white text-sm p-2 rounded-2xl">Remove Order</button>
          </div>
        ))}
      </div>

      <div className="py-[2%] w-full">
        <h1 className="bg-white w-full p-3 rounded-lg">Coach Orders Page</h1>
        <p className="py-2">Total Orders: {userOrdersCoach.length}</p>
        <div className="flex gap-[7%]">
          {userOrdersCoach.map((orderItem) => (
            <div
              className="bg-gray-300 text-sm  cursor-pointer w-[15rem] shadow-lg p-3 rounded-lg"
              key={orderItem.id}
            >
              <p className="font-bold text-lg">Name: {orderItem.name}</p>

              <p>Exterior Color: {orderItem.exteriorColor}</p>
              <p>Interior Color: {orderItem.interiorColor}</p>
              <p>Floor Trim: {orderItem.floorTrim}</p>
              <button className="bg-red-700 transition-all duration-300 hover:bg-red-500 hover:scale-105 text-white text-sm p-2 rounded-2xl">Remove Order</button>
            </div>
          ))}
        </div>
      </div>
    </div>


      <Footer />
    </div>
  );
};

export default DisplayPage;
