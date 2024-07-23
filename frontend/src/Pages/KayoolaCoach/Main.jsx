import CarouselProducts from "./CarouselProducts_2";
import Footer from "../../Components/ui/Footer";
import { Link } from "react-router-dom";
import Features from "./Features";
import seats from "./assets/images/seats.png";
import seats_2 from "./assets/images/seats_2.png";
import seats_3 from "./assets/images/seats_3.png";
import holder from "./assets/images/holder.png";
import key from "./assets/images/key.png";
import wheel from "./assets/images/wheel.png";
import coach from "./assets/images/coach.png";
import camera_2 from "./assets/images/camera_2.png";
import gradient from "./assets/images/gradient.png";
import CoachModels from "./CoachModels";

const KayoolaCoach = () => {

  return (
    <div className="font-poppins">
      <CarouselProducts />
      <center>
        <h1 className="font-semibold text-3xl py-[1.5%]">Coach Models</h1>
        <p>The Kayoola coach has over 6 variations</p>
      </center>
      <CoachModels />
      {/* <Video /> */}
      <Features />
      {/* Section */}
      <div className="px-4 w-full bg-[#171717]  h-auto md:px-[0rem] md:py-[3rem]">
        <div id="coach" className="flex justify-center gap-10  text-white">
          <div>
            <h1 className="text-3xl text-center font-medium ">
              Keeping passengers engaged without <br /> the journey
            </h1>
            <p className="text-base  py-[50px] pr-8 text-center">
              The Kayoola EVS™ comes equipped with a modern The Kayoola Coach
              comes equipped with a cutting-edge infotainment system
              <br /> that offers a variety of entertainment options to keep
              passengers engaged
              <br />
              during their journey.
            </p>
          </div>
        </div>

        <div className="bg-[#171717] w-full md:h-[100vh] h-[30svh] flex justify-center md:px-[6rem] md:mb-0 mb-[2rem]  md:py-[3rem]">
          <div
            className="md:h-full w-full rounded-2xl flex justify-center items-center"
            style={{
              backgroundImage: `url(${seats})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              objectFit: "cover",
              filter: "brightness(80%)",
            }}
          ></div>
        </div>

        {/* Gallery  2*/}
        <div className="flex justify-between gap-8 bg-[#171717] md:px-[6rem] md:py-[8rem] text-white">
          <div className="md:w-6/12 md:h-[100vh] rounded-2xl relative mb-[5rem] flex flex-col justify-between">
            <span className="mb-[1rem]">
              <h1 className="text-3xl font-medium pb-8">Comfort and safety</h1>
              <p className="text-base">
                Passenger comfort is a hallmark of the Kayoola Coach. The bus
                boasts spacious seating with ample legroom, ensuring a relaxing
                journey. Each seat is ergonomically designed and equipped with
                adjustable features such as footrests and reclining mechanisms
                to maximize comfort.
              </p>
            </span>

            <img
              className="w-full h-[350px] rounded-2xl relative "
              src={seats_2}
              alt=""
              style={{ objectPosition: "center", objectFit: "cover" }}
            />
          </div>
          <div className="flex hidden md:block flex-col ">
            <img
              className="w-full h-[250px] rounded-2xl relative mb-[50px]"
              src={wheel}
              alt=""
              style={{ objectPosition: "center", objectFit: "cover" }}
            />

            <img
              className="w-full h-[250px] rounded-2xl relative "
              src={seats_3}
              alt=""
              style={{ objectPosition: "center", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Gallery  3*/}
        <div className="flex gap-8 bg-[#171717] md:px-[8rem] md:py-[8rem] text-white">
          <div className="w-full md:h-[90vh] rounded-[50px] relative mb-[5rem] flex  flex-col justify-between">
            <span className="mb-[1]">
              <h1 className="text-3xl font-medium pb-8">Infotainment System</h1>
              <p className="text-base">
                The Kayoola Coach is designed to provide a superior travel
                experience, combining safety, convenience, and comfort. With
                features like the infotainment system, CCTV cameras,
                e-ticketing, onboard fridge and toilet, spacious seating, Wi-Fi,
                and USB charging, passengers can enjoy a seamless and enjoyable
                journey from start to finish.
              </p>
            </span>
            <div className="flex gap-4">
              <img
                className="w-6/12 h-[17rem] rounded-[50px] relative "
                src={holder}
                alt=""
                style={{ objectPosition: "center", objectFit: "cover" }}
              />
              <img
                className="w-6/12 h-full rounded-[50px] relative mb-[50px]"
                src={key}
                alt=""
                style={{ objectPosition: "center", objectFit: "cover" }}
              />
            </div>
          </div>
          <div>
            <img
              className="w-full hidden md:block  h-[90%] rounded-[50px] relative "
              src={camera_2}
              alt=""
              style={{ objectPosition: "center", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>{" "}
      {/* Order */}
      <div className="bg-[#171717] pb-9 md:px-[6rem]">
        <div
          className=" w-full h-[25rem] flex justify-center    "
          style={{
            backgroundImage: `url(${coach})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            objectFit: "cover",
          }}
        >
          <div
            className="w-full md:w-11/12  px-8 rounded-xl flex flex-col justify-center items-start"
            style={{
              backgroundImage: `url(${gradient})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              objectFit: "cover",
            }}
          >
            <div className="text-white text-base  ">
              <p className="py-4">
                Designed for efficiency, comfort, and sustainability,
                <br /> this fully electric bus is perfect for city travel.
              </p>
              <p className="pb-8">
                Order Now and drive the change towards a greener,
                <br /> smarter urban transit system!
              </p>
              <Link to="/orders-coach">
                <button className="bg-white hover:bg-gray-700 text-black rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-black border-2   ">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default KayoolaCoach;
