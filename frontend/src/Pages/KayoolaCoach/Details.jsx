import { Fragment,  useEffect } from "react";
import { useState } from "react";
import { ColorOptionExterior } from "./ColorOption";
import carousel from "../../assets/images/orders-coach/carousel.png";
import back from "../../assets/images/orders-coach/back.png";
import fore from "../../assets/images/orders-coach/fore.png";
import Footer from "../../Components/ui/Footer";
import { useAuth } from "../../Components/AuthContext";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { CapacityOption } from "./ColorOption";
import PhoneInput from "react-phone-input-2";

import "../../../node_modules/react-phone-input-2/lib/style.css";
import CoachModels from "./CoachModels";
import {url} from "../../utils/backend.js";

const Order = () => {
  const [coach, setCoach] = useState({});
  const { id } = useParams();




  useEffect(() => {
    fetchCoach();

  }, [id]);


  const fetchCoach = async () => {
       try {
      const response = await axios.get(url + `/coach/${id}`);
      setCoach(response.data);
    } catch (error) {
      console.error("Error fetching item:", error);
    }
  };


  return (
    <>
      {/* Carousel */}
      <div
        style={{
          backgroundImage: `url(${back})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
        }}
        className="md:h-[50vh] lg:h-[70vh] relative z-[-1] w-12/12 font-poppins"
      >
        <span className="h-full flex flex-col items-center absolute w-full z-[4] top-[4rem]">
          <p className="text-3xl font-bold w-11/12 md:w-full text-center text-white py-8">
            {coach.name}
          </p>
        </span>
        <img
          src={carousel}
          alt=""
          className="object-center md:w-11/12 w-10/12 relative object-cover top-[6rem] md:top-[10rem]"
        />
        <img src={fore} alt="" className="absolute z-[-1] top-[5rem] md:top-[10rem] object-center object-cover  w-full" />
      </div>
      <center className="pt-[10rem]">
        <h1 className="font-semibold text-3xl py-[1.5%]">Coach Models</h1>
        <p>To see details and features of the Coach</p>
        <Link to="/kayoola-coach">
              <button className="bg-black hover:bg-gray-700 text-white rounded-full my-4 py-2 px-[30px] focus:outline-none focus:ring focus:ring-black border-2   ">
               Learn More
              </button>
            </Link>
      </center>

<CoachModels />
      <Footer />
    </>
  );
};

export default Order;
