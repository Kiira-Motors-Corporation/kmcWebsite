import cover from "./assets/images/cover.png";
import charger_1 from "./assets/images/charger_1.png";
import charger_2 from "./assets/images/charger_2.png";
import charger_3 from "./assets/images/charger_3.png";
import order from "./assets/images/order.png";
import { Link } from "react-router-dom";
import Footer from "../../../Components/ui/Footer"

const Main = () => {
  return (
    <div className="font-poppins">
      <div className=" h-[100dvh] md:h-full relative ">
        <img
          src={cover}
          className=" z-[-10] inset-0 h-full  object-cover object-center "
          alt=""
        />
        <div>
          <span className="absolute top-[10rem] px-[12.5%] text-white text-3xl font-bold">
            <h1>
              Charger with <br />
              ease
            </h1>
          </span>
          <span className="absolute w-full h-full bg-black/10"></span>
          <span className="absolute   bottom-[9rem]  px-[12.5%]  text-white text-2xl font-bold">
            <h1>Electric Charger</h1>
            <p className="text-sm py-2 font-normal">
              Our charger is engineered for efficiency, reliability, and
              <br />
              convenience, ensuring that your vehicle is always ready to go.
            </p>
          </span>
        </div>
      </div>

      <div
        id="chargers"
        className=" h-auto py-[7%]  bg-white "
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1100"
      >
        <center>
          <span className="relative ">
            <h1 className=" font-bold text-3xl py-2">EV Chargers</h1>
            <p className="text-base">
              Our charger is engineered for efficiency, reliability, and
              <br />
              convenience, ensuring that your vehicle is always ready to go.
            </p>
          </span>
        </center>

        <div className="flex flex-wrap py-[4rem] justify-evenly md:gap-0 gap-40 items-center h-auto">
          <div className="md:w-2/12 w-7/12">
            <div className="md:h-[9rem]">
              <img
                src={charger_1}
                className="object-cover object-center"
                alt=""
              />
            </div>

            <h3 className="text-center">60kW Charger</h3>
          </div>
          <div className="md:w-2/12 w-7/12">
            <div className="md:h-[9rem]">
              <img
                src={charger_2}
                className="object-cover object-center"
                alt=""
              />
            </div>

            <h3 className="text-center">360kW Charger</h3>
          </div>
          <div className="md:w-2/12 w-8/12">
            <div className="md:h-[9rem]">
              <img
                src={charger_3}
                className="object-cover object-center"
                alt=""
              />
            </div>

            <span>
              <h3 className="text-center">240kW Charger</h3>
            </span>
          </div>
        </div>
      </div>

      <div
        className=" "
        // style={{
        //   backgroundImage: `url(${order})`,
        //   backgroundPosition: "center",
        //   objectFit: "cover",
        // }}
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1100"
      >
        <span className="absolute w-full h-full bg-black/10"></span>


          <center className="absolute  w-full h-full  ">
             <span className="relative">
          <center className="pt-16">
            <p className="text-white">
              Join us in driving sustainable mobility forward with <br className="md:block hidden" />
              KMC&apos;s electric charging solutions.
            </p>
          </center>
        </span>
        <Link to="/login">
          <center className="py-10 relative">
            <button className="bg-black hover:bg-gray-700 text-white rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-black   ">
              Order Now
            </button>
          </center>
        </Link>
</center>

        <div className="w-full h-auto relative   z-[-1]">
          <img src={order} className="object-cover object-center" alt=""  />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
