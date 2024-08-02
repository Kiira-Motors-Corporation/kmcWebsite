import { Fragment, useEffect } from "react";
import { useState } from "react";
import carousel from "../assets/images/order/carousel.png";
import back from "../assets/images/order/back.png";
import fore from "../assets/images/order/fore.png";

import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../../../../../node_modules/react-phone-input-2/lib/style.css";
import EVSModels from "../EVSModels.jsx";
import {url} from "../../../../utils/backend.js";
import Footer from "../../../../Components/ui/Footer.jsx";

const Order = () => {
  const [evs, setEVS] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchEVS();
  }, [id]);

  const fetchEVS = async () => {
    try {
      const response = await axios.get(`${url}/evs/${id}`);
      setEVS(response.data);
    } catch (error) {
      console.error("Error fetching item:", error);
    }
  };

  return (
    <Fragment>
      {/* Carousel */}
      <div
        style={{
          backgroundImage: `url(${back})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
        }}
        className="h-auto relative z-[-1]   w-12/12 font-poppins"
      >
        <span className="h-full flex flex-col items-center absolute w-full z-[4] top-[4rem] lg:top-0">
          <p className="text-3xl font-bold w-11/12 md:w-full text-center text-white py-8">
            {evs.name}
          </p>
        </span>
        <center>
        <img
          src={carousel}
          alt=""
          className="object-center lg:w-9/12  object-cover "
        />
        </center>

        <img src={fore} alt="" className="absolute  z-[-1] top-[5rem] md:top-[10rem] object-center object-cover  w-full" />
      </div>
      <center>
        <h1 className="font-semibold text-3xl py-[1.5%]">EVS Models</h1>
        <p>To see details and features of the EVS</p>
        <Link to="/kayoola-evs">
          <button className="bg-black hover:bg-gray-700 text-white rounded-full my-4 py-2 px-[30px] focus:outline-none focus:ring focus:ring-black border-2   ">
            Learn More
          </button>
        </Link>
      </center>
      <EVSModels />

      <Footer />
    </Fragment>
  );
};

export default Order;
