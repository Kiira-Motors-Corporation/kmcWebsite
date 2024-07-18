import feature from "./assets/images/feature.png";

const Features = () => {
  return (
    <div className=" bg-[#171717] md:h-[100vh] flex justify-center items-center">
      <img
        id="rotate-image"
        src={feature}
        alt=""
        className="absolute lg:h-[85%] h-[45%]"
      />
      <div
        id="gradient"
        style={{
          backgroundImage: "radial-gradient(circle, blue,  #171717, #171717)",
        }}
          className=" w-[40rem] h-[100vh] flex flex-col justify-center items-center pt-[2rem]"
      >
        <div
          id="circle"
          className="bg-black w-[18rem] h-[18rem] md:w-[23rem] md:h-[23rem] text-white rounded-full flex flex-col justify-center items-center "
        >
          <h1 className="md:text-3xl text-2xl">Key features</h1>
          <p className="w-10/12 text-center md:text-base text-sm py-2">
            Kayoola Coach is packaged with special features like an

            Infotainment System, CCTV Cameras, E-Ticketing &  Onboard
            Fridge, toilet, spacious seats with ample  legroom, Wi-Fi, USB
            Charging
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
