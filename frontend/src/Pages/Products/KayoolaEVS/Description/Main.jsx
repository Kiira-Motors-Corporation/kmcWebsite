import CarouselProducts from "./CarouselProducts";
import Footer from "../../../../Components/ui/Footer";
import { Link } from "react-router-dom";
import Features from "./Features";
import EVSModels from "../EVSModels";
import bus from "../assets/images/bus.png"
import chair from "../assets/images/chair.png"
import stand from "../assets/images/stand.png"
import seats from "../assets/images/seats.png"
import wheel from "../assets/images/wheel.png"
import man from "../assets/images/man.png"
import camera from "../assets/images/camera.png"
import gradient from "../assets/images/gradient.png"


const Products = () => {
   return (
    <div className="font-poppins overflow-hidden">


      <CarouselProducts />
      <center>
        <h1 className="font-semibold text-3xl py-[1.5%]">EVS Models</h1>
        <p>The Kayoola EVS has over 6 variations</p>
      </center>
      <EVSModels />

      <Features />
      {/* Section */}
      <div className=" w-full bg-[#171717]  h-auto px-[7%] md:py-[3rem] overflow-hidden">
        <div id="coach" className="flex  flex-wrap md:flex-nowrap justify-between gap-10  text-white">
          <div>
            <h1 className="lg:text-3xl text-2xl font-medium w-11/12 ">
              Enhancing passenger experiences
            </h1>
            <p className="lg:text-base  py-[2rem] pr-8">
              The Kayoola EVS™ comes equipped with a modern
              <br className="hidden md:block"/> infotainment system designed to enhance the passenger{" "}
              <br className="hidden md:block"/> experience. This system offers a range of entertainment{" "}
              <br className="hidden md:block"/> options, including music, videos, Wi-Fi , USB Charging and{" "}
              <br className="hidden md:block"/> real-time route information, keeping passengers engaged{" "}
              <br className="hidden md:block"/> and informed throughout their journey.
            </p>
          </div>

          <div className=" flex gap-8">
            <img
              className="w-100 h-[200px] md:h-[300px] rounded-2xl relative"
              src={chair}
              alt=""
            />
            <img
              className="w-full h-[200px] md:h-[300px] rounded-2xl relative mb-[50px] "
              src={stand}
              alt=""
            />
          </div>
        </div>

        {/* Section */}
        <div
          className="relative h-[25rem] overflow-hidden"
          style={{
            backgroundImage: `url(${seats})`,
            objectFit: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="w-full h-full px-8 rounded-2xl  z-[1] flex flex-col justify-center items-start"
            style={{
              backgroundImage: `url(${gradient})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              objectFit: "cover",

              transform: "rotate(-180deg)",
            }}
          >
            <p
              style={{ transform: "rotate(180deg)" }}
              className="md:text-base text-white "
            >
              The Kayoola Coach is a novel and innovative
              <br /> public transport solution for comfortable long
              <br /> distance and intercity mobility. It is available
              <br /> with either an Internal Combustion Engine
              <br /> (ICE)
            </p>
            <h1
              style={{ transform: "rotate(180deg)" }}
              className="md:text-3xl text-2xl md:w-4/12 text-white font-bold py-6"
            >
              Entertainment and connectivity
            </h1>
          </div>
        </div>
      </div>

      {/* Gallery  */}
      <div className="flex justify-center items-center gap-6 bg-[#171717] md:px-[8rem] md:py-[3rem] overflow-hidden">
        <img
          className="w-5/12 h-[250px] md:w-6/12 md:h-[350px] rounded-2xl relative  "
          src={wheel}
          alt=""
          style={{ objectPosition: "center", objectFit: "cover" }}
        />

        <img
          className="w-5/12 h-[250px] md:w-6/12 md:h-[350px] rounded-2xl relative my-[2rem]"
          src={man}
          alt=""
          style={{ objectPosition: "center", objectFit: "cover" }}
        />
      </div>

      {/* Gallery  2*/}
      <div className="flex flex-wrap md:flex-nowrap gap-8 bg-[#171717] px-[7%] md:py-[3rem] text-white overflow-hidden">
        <div className="md:w-6/12  md:h-[500px]  rounded-[50px] relative">
          <h1 className="md:text-3xl text-2xl font-medium">CCTV Cameras</h1>
          <p className="md:text-base md:py-[2rem]">
            The Kayoola EVS™ features a state-of-the-art e-ticketing and
            cashless payment system, making boarding quicker and more efficient.
            Passengers can use contactless cards or mobile payment options,
            reducing the need for cash handling and streamlining the ticketing
            process.
          </p>
        </div>

        <img
          className="md:w-6/12 w-full md:h-[350px] rounded-2xl relative mb-[50px] "
          src={camera}
          alt=""
          style={{ objectPosition: "center", objectFit: "cover" }}
        />
      </div>

      {/* <Card /> */}

      {/* Order */}
      <div className="bg-[#171717] relative z-[-1] w-full h-[50vh] lg:h-[100vh] flex justify-center md:px-[8rem]  md:py-[3rem] overflow-hidden">
        <div
          className=" h-full w-full relative rounded-2xl flex justify-center items-center"

        >

          <span className="absolute w-full h-full bg-black/10"></span>
          <center className="text-white absolute w-full h-full  text-base flex items-center flex-col justify-center  text-center">

            <div className="w-10/12">
            <p className="py-4">
              Designed for efficiency, comfort, and sustainability,
               this fully electric bus is perfect for city travel.
            </p>
            <p className="pb-8">
              Order Now and drive the change towards a greener,
               smarter urban transit system!
            </p>
            </div>

            <Link to="/orders-evs">
              <button className="bg-white hover:bg-gray-700 text-black rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-black border-2   ">
                Order Now
              </button>
            </Link>

          </center>
          <div className="w-full h-full relative   z-[-1]">
          <img src={bus} className="object-cover z-[100] w-full h-full object-center" alt=""  />
        </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
