import React from "react";
import Navbar from "../../Components/Navbar";
import c from "../../assets/images/c.jpg";
import Footer from "../../Components/Footer";
import { FaArrowDown } from "react-icons/fa";
import d from "../../assets/images/team.png";
import pose from "../../assets/images/pose.png";
import Headroom from "react-headroom";

const About = () => {
  return (
    <>
      <div className="absolute w-full">
        <Headroom>
          <Navbar />
        </Headroom>
      </div>
      <div className="h-[100vh] relative top-[7rem] left-[10rem]">
        <p className="text-2xl">We are innovative</p>

        <p className="text-6xl font-bold ">
          Kiira Motors Corporation is <br /> developing long-term <br />{" "}
          technology partnership
        </p>
        <div className="flex gap-[2rem] pt-[4rem]">
          <div className="w-[50rem] h-[30rem] bg-gray-200 rounded-2xl"></div>

          <div className="w-[40rem] h-[30rem] bg-gray-200 rounded-2xl"></div>
        </div>
      </div>

      <div className="h-[100vh] flex justify-center gap-[30rem]">
        <div className="">
          <div className=" text-6xl font-bold flex">
            Our Story &nbsp;
            <span
              className="font-normal relative top-[1.5rem]"
              style={{ transform: "rotate(-40deg)" }}
            >
              <FaArrowDown className="text-4xl" />
            </span>
          </div>
        </div>
        <span>
          <p className="text-2xl">
            Kiira Motors Corporation is a State Enterprise <br /> established to
            champion value addition in the nascent <br /> Motor Vehicle Industry
            in Uganda through Technology <br /> Transfer
          </p>
          <p className="text-2xl mt-[2rem]">
            Kiira Motors Corporation is a State Enterprise <br /> established to
            champion value addition in the nascent <br /> Motor Vehicle Industry
            in Uganda through Technology <br /> Transfer
          </p>

          <div className="mt-[3rem]">
            <h1 className="font-bold text-4xl ">Our Vision & mission</h1>
            <p className="text-2xl mt-[2rem]">
              To be the Best-in-Class Motor Vehicle Manufacturer <br /> in
              Africa.
            </p>
            <p className="text-2xl mt-[2rem]">
              To Build a better Uganda through Automative Technology.
            </p>
          </div>
        </span>
      </div>
      {/* Our team */}
      <div className="bg-gray-200 mx-[8rem] px-[8rem] rounded-2xl py-[3rem]">
        <h1 className="text-4xl font-bold pb-[2rem]">Our team</h1>
        <p className="text-2xl pb-[2rem]">
          Kiira Motors Corporation is a State Enterprise established to champion
          value <br /> addition in the nascent Motor Vehicle Industry in Uganda
          through Technology <br />
          Transfer
        </p>
        <h2 className="text-2xl font-semibold pb-[2rem]">Board of Directors</h2>
        <div className="flex flex-wrap gap-y-[4rem] gap-x-[8rem]">
          <div className=" w-[10rem]">
            <div className="bg-white border w-[10rem] py-4 rounded-2xl">
              <img className="w-[full]" src={d} alt="" />
            </div>

            <h3 className="font-semibold text-center text-xl">
              John Doo Ssali
            </h3>
            <h3 className="text-center">Managing Director</h3>
          </div>

          <div className="w-[10rem]">
            <div className="bg-white border w-[10rem] py-4 rounded-2xl">
              <img className="w-[full]" src={d} alt="" />
            </div>

            <h3 className="font-semibold text-center text-xl">
              John Doo Ssali
            </h3>
            <h3 className="text-center">Managing Director</h3>
          </div>

          <div className=" w-[10rem]">
            <div className="bg-white border w-[10rem] py-4 rounded-2xl">
              <img className="w-[full]" src={d} alt="" />
            </div>

            <h3 className="font-semibold text-center text-xl">
              John Doo Ssali
            </h3>
            <h3 className="text-center">Managing Director</h3>
          </div>

          <div className=" w-[10rem]">
            <div className="bg-white border w-[10rem] py-4 rounded-2xl">
              <img className="w-[full]" src={d} alt="" />
            </div>

            <h3 className="font-semibold text-center text-xl">
              John Doo Ssali
            </h3>
            <h3 className="text-center">Managing Director</h3>
          </div>

          <div className=" w-[10rem]">
            <div className="bg-white border w-[10rem] py-4 rounded-2xl">
              <img className="w-[full]" src={d} alt="" />
            </div>

            <h3 className="font-semibold text-center text-xl">
              John Doo Ssali
            </h3>
            <h3 className="text-center">Managing Director</h3>
          </div>

          <div className=" w-[10rem]">
            <div className="bg-white border w-[10rem] py-4 rounded-2xl">
              <img className="w-[full]" src={d} alt="" />
            </div>

            <h3 className="font-semibold text-center text-xl">
              John Doo Ssali
            </h3>
            <h3 className="text-center">Managing Director</h3>
          </div>

          <div className=" w-[10rem]">
            <div className="bg-white border w-[10rem] py-4 rounded-2xl">
              <img className="w-[full]" src={d} alt="" />
            </div>

            <h3 className="font-semibold text-center text-xl">
              John Doo Ssali
            </h3>
            <h3 className="text-center">Managing Director</h3>
          </div>
          <div className=" w-[10rem]">
            <div className="bg-white border w-[10rem] py-4 rounded-2xl">
              <img className="w-[full]" src={d} alt="" />
            </div>

            <h3 className="font-semibold text-center text-xl">
              John Doo Ssali
            </h3>
            <h3 className="text-center">Managing Director</h3>
          </div>

          <div className=" w-[10rem]">
            <div className="bg-white border w-[10rem] py-4 rounded-2xl">
              <img className="w-[full]" src={d} alt="" />
            </div>

            <h3 className="font-semibold text-center text-xl">
              John Doo Ssali
            </h3>
            <h3 className="text-center">Managing Director</h3>
          </div>

          <div className=" w-[10rem]">
            <div className="bg-white border w-[10rem] py-4 rounded-2xl">
              <img className="w-[full]" src={d} alt="" />
            </div>

            <h3 className="font-semibold text-center text-xl">
              John Doo Ssali
            </h3>
            <h3 className="text-center">Managing Director</h3>
          </div>
        </div>
      </div>
      {/* Core Team */}
      <div className="bg-gray-200 mx-[8rem] px-[8rem] rounded-2xl py-[3rem] mt-[2rem]">
        <h1 className="text-2xl font-semibold pb-[2rem]">Core team</h1>
        <p className="text-2xl pb-[2rem]">
          Kiira Motors Corporation is a State Enterprise established to champion
          value <br /> addition in the nascent Motor Vehicle Industry in Uganda
          through Technology <br />
          Transfer
        </p>
        <div className="flex flex-wrap gap-y-[4rem] gap-x-[8rem]">
          <div className=" w-[10rem]">
            <div className="bg-white border w-[10rem] py-4 rounded-2xl">
              <img className="w-[full]" src={d} alt="" />
            </div>

            <h3 className="font-semibold text-center text-xl">
              John Doo Ssali
            </h3>
            <h3 className="text-center">Managing Director</h3>
          </div>

          <div className="w-[10rem]">
            <div className="bg-white border w-[10rem] py-4 rounded-2xl">
              <img className="w-[full]" src={d} alt="" />
            </div>

            <h3 className="font-semibold text-center text-xl">
              John Doo Ssali
            </h3>
            <h3 className="text-center">Managing Director</h3>
          </div>

          <div className=" w-[10rem]">
            <div className="bg-white border w-[10rem] py-4 rounded-2xl">
              <img className="w-[full]" src={d} alt="" />
            </div>

            <h3 className="font-semibold text-center text-xl">
              John Doo Ssali
            </h3>
            <h3 className="text-center">Managing Director</h3>
          </div>

          <div className=" w-[10rem]">
            <div className="bg-white border w-[10rem] py-4 rounded-2xl">
              <img className="w-[full]" src={d} alt="" />
            </div>

            <h3 className="font-semibold text-center text-xl">
              John Doo Ssali
            </h3>
            <h3 className="text-center">Managing Director</h3>
          </div>

          <div className=" w-[10rem]">
            <div className="bg-white border w-[10rem] py-4 rounded-2xl">
              <img className="w-[full]" src={d} alt="" />
            </div>

            <h3 className="font-semibold text-center text-xl">
              John Doo Ssali
            </h3>
            <h3 className="text-center">Managing Director</h3>
          </div>

          <div className=" w-[10rem]">
            <div className="bg-white border w-[10rem] py-4 rounded-2xl">
              <img className="w-[full]" src={d} alt="" />
            </div>

            <h3 className="font-semibold text-center text-xl">
              John Doo Ssali
            </h3>
            <h3 className="text-center">Managing Director</h3>
          </div>

          <div className=" w-[10rem]">
            <div className="bg-white border w-[10rem] py-4 rounded-2xl">
              <img className="w-[full]" src={d} alt="" />
            </div>

            <h3 className="font-semibold text-center text-xl">
              John Doo Ssali
            </h3>
            <h3 className="text-center">Managing Director</h3>
          </div>
          <div className=" w-[10rem]">
            <div className="bg-white border w-[10rem] py-4 rounded-2xl">
              <img className="w-[full]" src={d} alt="" />
            </div>

            <h3 className="font-semibold text-center text-xl">
              John Doo Ssali
            </h3>
            <h3 className="text-center">Managing Director</h3>
          </div>

          <div className=" w-[10rem]">
            <div className="bg-white border w-[10rem] py-4 rounded-2xl">
              <img className="w-[full]" src={d} alt="" />
            </div>

            <h3 className="font-semibold text-center text-xl">
              John Doo Ssali
            </h3>
            <h3 className="text-center">Managing Director</h3>
          </div>

          <div className=" w-[10rem]">
            <div className="bg-white border w-[10rem] py-4 rounded-2xl">
              <img className="w-[full]" src={d} alt="" />
            </div>

            <h3 className="font-semibold text-center text-xl">
              John Doo Ssali
            </h3>
            <h3 className="text-center">Managing Director</h3>
          </div>
        </div>
      </div>
      <div className="h-[60vh] my-[2rem] flex items-center">
        <div className="w-[40rem]">
          {" "}
          <img src={pose} alt="" />
        </div>
        <span className="text-center">
          <h2 className="text-4xl font-bold py-[1rem]">
            Career opportunities at KMC
          </h2>
          <p className="text-2xl">
            Kiira Motors Corporation is a State Enterprise established to <br />
            champion value addition in the nascent Motor Vehicle Industry in{" "}
            <br /> through Technology Transfer
          </p>
          <button className="mt-[1rem] bg-black text-white rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-red-700">
            learn more
          </button>
        </span>
      </div>
      <Footer />
    </>
  );
};

export default About;
