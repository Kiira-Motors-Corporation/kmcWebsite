import React from "react";
import Navbar from "../Components/ui/Navbar";
import c from "../assets/images/carousel.jpg";
import Footer from "../Components/ui/Footer";
import { Link } from "react-router-dom";

const VehicleHire = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-200 h-[100vh] flex flex-col justify-center items-center gap-6">
        <h1 className="text-6xl font-bold pt-[7rem]">Vehicle Hire</h1>
        <p className="text-2xl text-center">
          KMC offers short and long-term vehicles hire services to <br />{" "}
          customers. These hire services provide an avenue for lead <br />{" "}
          generation for vehicle orders, boost customer confidence <br /> and
          brand loyalty.
        </p>
      </div>
      {/* Form */}
      <div className="flex justify-center items-center gap-[5rem] h-[100vh]">
        <form className="flex flex-col">
          <label htmlFor="" className="py-3 text-2xl">
            Please Select Vehicle Type
          </label>

          <select
            id="fruits"
            name="fruits"
            placeholder="Select Vehicle type"
            className="w-[400px] focus:outline-none text-xl placeholder:text-gray-300"
          >
            <option className="focus:outline-none ">Select Vehicle type</option>
            <option value="apple" className="focus:outline-none">
              Kayoola EVS
            </option>
            <option value="banana">Kayoola Diesel Coach</option>
            <option value="orange">Banana Bus</option>
          </select>
          {/* <input
            type="text"
            placeholder="Select Vehicle type"
            className="w-[400px]  "
          /> */}
          <label htmlFor="" className="py-4 text-2xl">
            Number of days
          </label>
          <input type="number" placeholder="4 days" className="text-xl" />

          <Link to="/orders-list">
            <button className="bg-black text-white rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-red-700 w-[40%] mt-[1rem]">
              Send
            </button>
          </Link>
        </form>
        <img className="w-[600px] rounded-2xl" src={c} alt="" srcset="" />
      </div>
      <Footer />
    </>
  );
};

export default VehicleHire;
