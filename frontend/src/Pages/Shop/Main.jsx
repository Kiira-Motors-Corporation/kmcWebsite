import { useEffect, useState } from "react";
import c from "./assets/images/background.png";
import Footer from "../../Components/ui/Footer";
import cover from "./assets/images/cover_main.png";
import axios from "axios";
import { Link } from "react-router-dom";
import {url} from "../../utils/backend.js";

const Shop = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get(url + "/items");
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };



  return (
    <>
      <div id="container" className="md:h-[100vh] md:pb-[10rem] ">
        <div
          style={{
            backgroundImage: `url(${c})`,
            backgroundPosition: "top",
            objectFit: "cover",
          }}
          className="h-auto lg:h-[100vh] text-center items-center "
        >
          <h1 className="text-3xl font-bold pt-[6rem] text-white">
            Shop with us
          </h1>
          <p
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="800"
            className="text-base py-4  text-white"
          >
            The Kayoola Coach is a novel and innovative public transport
            solution for <br className="hidden md:block"/> comfortable long distance and intercity
            mobility.
          </p>
        </div>
        <br />
        <center>
          <div className="bg-white lg:absolute  z-[1] left-0 top-[40vh] mx-[15vw]  rounded-[2rem] ">
            <img className=" object-cover object-center " src={cover} alt="" />
          </div>
        </center>
      </div>

      <div className="w-full h-[100%] py-[4rem] ">
        <h1 className="text-center md:text-3xl text-xl font-bold pb-[2rem] ">KMC Shop</h1>
        <div className="flex justify-around md:gap-[1rem] px-[10vw] items-center flex-wrap ">
          {items.map((item) => (
            <div
              style={{ transition: "all 0.3s ease" }}
              className="bg-gray-100 hover:cursor-pointer md:w-[12rem] w-[10rem] flex justify-center gap-1 items-center flex-col flex-wrap lg:flex-nowrap hover:scale-105  shadow-lg p-1 rounded-2xl "
              key={item.id}
            >
              <div className="md:w-[8rem] w-[6rem] md:h-[10rem] flex items-center h-[6rem] rounded-2xl">
                <img
                  className=" object-cover object-center"
                  src={`${url}/${item.image_path}`}
                  alt={item.name}
                />
              </div>

              <Link to={`/product/${item.id}`} className="font-semibold text-center">{item.name}</Link>
              <h3 className="text-center">
                <b>UGX</b>&nbsp;{item.price}
              </h3>
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
