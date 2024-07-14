import autparts from "./assets/images/autoparts.png";
import c from "./assets/images/background.png";
import Footer from "../../Components/ui/Footer";
import cover from "./assets/images/cover.png";

const AutoPart = () => {
  return (
    <>
      <div id="container" className="md:h-[100vh] md:pb-[10rem] ">
        <div
          style={{
            backgroundImage: `url(${c})`,
            backgroundPosition: "top",
            objectFit: "cover",
          }}
          className=" h-[100vh] text-center items-center "
        >
          <h1 className="text-3xl font-bold pt-[6rem] text-white">
            Shop with us
          </h1>
          <p
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="800"
            className="text-base py-4 text-white"
          >
            The Kayoola Coach is a novel and innovative public transport
            solution for <br /> comfortable long distance and intercity
            mobility.
          </p>
        </div>
        <br />
        <center>
          <div className="bg-white absolute z-[1] left-0 top-[40vh] mx-[15vw]  rounded-2xl ">
            <img className=" object-cover object-center " src={cover} alt="" />
          </div>
        </center>
      </div>
      <div className="h-[100vh]">
        <div className="mx-[15vw]">
          <h1 className="text-center text-2xl font-meium py-[2rem]">
            KMC AutoParts
          </h1>
          <div className="flex flex-wrap gap-[1rem]">
            <div className=" w-[10rem]">
              <div className="border w-[10rem] py-4 rounded-2xl">
                <img className="w-[full]" src={autparts} alt="" />
              </div>

              <h3 className="font-semibold text-center ">Caps</h3>
              <h3 className="text-center">UGX 10,000</h3>
            </div>

            <div className=" w-[10rem]">
              <div className="border w-[10rem] py-4 rounded-2xl">
                <img className="w-[full]" src={autparts} alt="" />
              </div>

              <h3 className="font-semibold text-center">Caps</h3>
              <h3 className="text-center">UGX 10,000</h3>
            </div>

            <div className=" w-[10rem]">
              <div className="border w-[10rem] py-4 rounded-2xl">
                <img className="w-[full]" src={autparts} alt="" />
              </div>

              <h3 className="font-semibold text-center">Caps</h3>
              <h3 className="text-center">UGX 10,000</h3>
            </div>

            <div className=" w-[10rem]">
              <div className="border w-[10rem] py-4 rounded-2xl">
                <img className="w-[full]" src={autparts} alt="" />
              </div>

              <h3 className="font-semibold text-center">Caps</h3>
              <h3 className="text-center">UGX 10,000</h3>
            </div>

            <div className=" w-[10rem]">
              <div className="border w-[10rem] py-4 rounded-2xl">
                <img className="w-[full]" src={autparts} alt="" />
              </div>

              <h3 className="font-semibold text-center">Caps</h3>
              <h3 className="text-center">UGX 10,000</h3>
            </div>

            <div className=" w-[10rem]">
              <div className="border w-[10rem] py-4 rounded-2xl">
                <img className="w-[full]" src={autparts} alt="" />
              </div>

              <h3 className="font-semibold text-center">Caps</h3>
              <h3 className="text-center">UGX 10,000</h3>
            </div>

            <div className=" w-[10rem]">
              <div className="border w-[10rem] py-4 rounded-2xl">
                <img className="w-[full]" src={autparts} alt="" />
              </div>

              <h3 className="font-semibold text-center">Caps</h3>
              <h3 className="text-center">UGX 10,000</h3>
            </div>

            <div className=" w-[10rem]">
              <div className="border w-[10rem] py-4 rounded-2xl">
                <img className="w-[full]" src={autparts} alt="" />
              </div>

              <h3 className="font-semibold text-center">Caps</h3>
              <h3 className="text-center">UGX 10,000</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AutoPart;
