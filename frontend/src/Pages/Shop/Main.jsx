import { useEffect, useState } from "react";
import c from "./assets/images/background.png";
import Footer from "../../Components/ui/Footer";
import cover from "./assets/images/cover_main.png";
import axios from "axios";
import { useAuth } from "../../Components/AuthContext";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Cart/CartContext";
import { Link } from "react-router-dom";

const Shop = () => {
  const [items, setItems] = useState([]);
  const { user } = useAuth();
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(true);
  const [quantities, setQuantities] = useState({}); // Track quantities for each item



  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get("http://localhost:3000/items");
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleAddToCart = async (item) => {
    if (!user) {
      alert("You need to log in to add items to the cart");
      return;
    }

    try {
      const quantity = quantities[item.id] || 1; // Default to 1 if no quantity selected
      const response = await axios.post("http://localhost:3000/cart", {
        userId: user.id,
        itemId: item.id,
        quantity: quantity,
      });

      if (response.data.success) {
        addToCart(item, quantity);
        alert("Item added to cart");
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    setQuantities({
      ...quantities,
      [itemId]: newQuantity,
    });
  };

  // if (loading) {
  //     return <div>Loading...</div>; // Or a loading spinner component
  // }

  return (
    <>
      <div id="container" className="md:h-[100vh] md:pb-[10rem] ">
        <div
          style={{
            backgroundImage: `url(${c})`,
            backgroundPosition: "top",
            objectFit: "cover",
          }}
          className=" h-[100vh] text-center items-center "
        >
          <h1 className="text-3xl font-bold pt-[6rem] text-white">
            Shop with us
          </h1>
          <p
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="800"
            className="text-base py-4 text-white"
          >
            The Kayoola Coach is a novel and innovative public transport
            solution for <br /> comfortable long distance and intercity
            mobility.
          </p>
        </div>
        <br />
        <center>
          <div className="bg-white absolute z-[1] left-0 top-[40vh] mx-[15vw]  rounded-[2rem] ">
            <img className=" object-cover object-center " src={cover} alt="" />
          </div>
        </center>
      </div>

      <div className="w-full h-[100%] py-[4rem] ">
        <h1 className="text-center text-3xl font-bold pb-[2rem] ">KMC Shop</h1>
        <div className="flex justify-around md:gap-[1rem] px-[10vw] items-center flex-wrap ">
          {items.map((item) => (
            <div
              style={{ transition: "all 0.3s ease" }}
              className="bg-gray-100 hover:cursor-pointer w-[10rem] hover:scale-105  shadow-lg p-1 rounded-2xl flex justify-center gap-1 items-center flex-col"
              key={item.id}
            >
              <div className=" w-[8rem] h-[10rem] py-4  rounded-2xl">
                <img
                  className="w-[9rem]"
                  src={`http://localhost:3000/${item.image_path}`}
                  alt={item.name}
                />
              </div>

              <Link to={`/product/${item.id}`} className="font-semibold text-center">{item.name}</Link>
              <h3 className="text-center">
                <b>UGX</b>&nbsp;{item.price}
              </h3>
              {/* <p className="text-center">
                Quantity:
                <input
                  className="border-none rounded-2xl w-6/12"
                  type="number"
                  value={quantities[item.id] || 1}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                  min="1"
                />
              </p> */}
              {/* <button
                style={{ transition: "all 0.3s ease" }}
                className="bg-black text-sm font-bold hover:bg-slate-600 text-white p-2 rounded-2xl"
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button> */}
            </div>
          ))}
          <div className=" w-[10rem]"></div>
        </div>
      </div>

      <Footer />
    </>
  );
};

// Auto parts

export default Shop;

{
  /* <h3>{item.name}</h3>
<p>Price: UGX{item.price}</p>
<p>
  Quantity:
  <input
    type="number"
    value={quantities[item.id] || 1}
    onChange={(e) =>
      handleQuantityChange(item.id, parseInt(e.target.value))
    }
    min="1"
  />
</p>
<button onClick={() => handleAddToCart(item)}>Add to Cart</button>


 <div className="h-[120vh]  mx-[10vw] ">
        <div className="">

          <div className="flex justify-around gmd:ap-[4rem] items-center flex-wrap ">
            <div className=" w-[10rem]">
              <div className="border w-[9rem] py-4 rounded-2xl">
                <img className="w-[full]" src={d} alt="" />
              </div>

              <h3 className="font-semibold text-center ">Caps</h3>
              <h3 className="text-center">UGX 10,000</h3>
            </div>

            <div className=" w-[10rem]">
              <div className="border w-[9rem] py-4 rounded-2xl">
                <img className="w-[full]" src={d} alt="" />
              </div>

              <h3 className="font-semibold text-center">Caps</h3>
              <h3 className="text-center">UGX 10,000</h3>
            </div>

            <div className=" w-[10rem]">
              <div className="border w-[9rem] py-4 rounded-2xl">
                <img className="w-[full]" src={d} alt="" />
              </div>

              <h3 className="font-semibold text-center">Caps</h3>
              <h3 className="text-center">UGX 10,000</h3>
            </div>

            <div className=" w-[10rem]">
              <div className="border w-[9rem] py-4 rounded-2xl">
                <img className="w-[full]" src={d} alt="" />
              </div>

              <h3 className="font-semibold text-center">Caps</h3>
              <h3 className="text-center">UGX 10,000</h3>
            </div>

            <div className=" w-[10rem]">
              <div className="border w-[9rem] py-4 rounded-2xl">
                <img className="w-[full]" src={d} alt="" />
              </div>

              <h3 className="font-semibold text-center">Caps</h3>
              <h3 className="text-center">UGX 10,000</h3>
            </div>

            <div className=" w-[10rem]">
              <div className="border w-[9rem] py-4 rounded-2xl">
                <img className="w-[full]" src={d} alt="" />
              </div>

              <h3 className="font-semibold text-center">Caps</h3>
              <h3 className="text-center">UGX 10,000</h3>
            </div>

            <div className=" w-[10rem]">
              <div className="border w-[9rem] py-4 rounded-2xl">
                <img className="w-[full]" src={d} alt="" />
              </div>

              <h3 className="font-semibold text-center">Caps</h3>
              <h3 className="text-center">UGX 10,000</h3>
            </div>

            <div className=" w-[10rem]">
              <div className="border w-[9rem] py-4 rounded-2xl">
                <img className="w-[full]" src={d} alt="" />
              </div>

              <h3 className="font-semibold text-center">Caps</h3>
              <h3 className="text-center">UGX 10,000</h3>
            </div>
          </div>
        </div>
      </div>
*/
}
