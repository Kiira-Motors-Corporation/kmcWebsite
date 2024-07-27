import feature from "../assets/images/feature.png";

const Features = () => {
  return (
    <div className="bg-[#171717] lg:h-[100vh] py-[4rem] flex justify-center items-center overflow-hidden">
      <img
        id="rotate-image"
        src={feature}
        alt=""
        className="absolute lg:h-[65%] md:h-[40%] h-[30%]"
      />
      <div
        id="gradient"
        style={{
          backgroundImage: "radial-gradient(circle, orange, #171717, #171717)",
        }}
        className=" md:w-[37rem] w-[27rem] lg:h-[100vh] flex flex-col justify-center items-center pt-[2rem]"
      >
        <div
          id="circle"
          className="bg-black w-[15rem] h-[15rem] md:w-[23rem] md:h-[23rem] text-white rounded-full flex flex-col justify-center items-center "
        >
          <h1 className="md:text-3xl text-xl">Key features</h1>{" "}
          <p className="w-10/12 text-center md:text-base text-xs py-2">
          Kayoola coach is packaged with special features like an Infotainment System, CCTV Cameras, E-Ticketing & Onboard Fridge, toilet, spacious seats with ample legroom, Wi-Fi, USB Charging
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
