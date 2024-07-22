import feature from "./assets/images/feature.png";

const Features = () => {
  return (
    <div className="bg-[#171717] h-[100vh] flex justify-center items-center overflow-hidden">
      {/* <div
        style={{ backgroundImage: `url(${feature})` }}
        className="absolute inset-1  "
      ></div> */}
      <img
        id="rotate-image"
        src={feature}
        alt=""
        className="absolute lg:h-[85%] h-[45%]"
      />
      <div
        id="gradient"
        style={{
          backgroundImage: "radial-gradient(circle, orange, #171717, #171717)",
        }}
        className=" w-[37rem] h-[100vh] flex flex-col justify-center items-center pt-[2rem]"
      >
        <div
          id="circle"
          className="bg-black w-[18rem] h-[18rem] md:w-[23rem] md:h-[23rem] text-white rounded-full flex flex-col justify-center items-center "
        >
          <h1 className="md:text-3xl text-2xl">Key features</h1>{" "}
          <p className="w-10/12 text-center md:text-base text-sm py-2">
            Kayoola EVS is packaged with special features like Infotainment
            System, CCTV Cameras, E-Ticketing & Cashless Payment System,
            Comfort, Wi-Fi, Inclusive Design, USB Charging and & Safety
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
