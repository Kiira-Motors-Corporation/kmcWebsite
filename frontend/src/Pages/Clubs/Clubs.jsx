import Card from "./CardSlider";
import UpdateSlider from "./UpdateSlider";
import Footer from "../../Components/ui/Footer"

const Clubs = () => {
  return (
    <>

      <div className=" h-[100vh]">
        <span className="w-full h-full  flex flex-col gap-4 justify-center items-center">
          <h1 className="text-3xl font-bold">School Mobility Clubs</h1>
          <p className="text-base text-center">
            KMC offers short and long-term vehicles hire Clubs to <br />{" "}
            customers. These hire Clubs provide an avenue for lead <br />{" "}
            generation for vehicle orders, boost customer confidence <br /> and
            brand loyalty.
          </p>
        </span>
      </div>


      <div className="h-[100vh] flex flex-col items-center pt-[4rem] ">
        <h1 className="text-3xl font-semibold">Why Mobility clubs</h1>
        <Card />
      </div>

      <div className="flex justify-center items-center h-[100vh] bg-gray-200">
        <span>
          <h1 className="text-3xl font-semibold">
            17 Mobility clubs established
          </h1>
          <p className="text-base text-center">
            our impact goes over 17 schools
          </p>
        </span>
      </div>


      <div className="bg-[#2D2D2D] h-[160vh]">
       <UpdateSlider />

        <div className="bg-white mx-[10vw] h-[70vh] rounded-2xl flex justify-center items-center">
          <span className="text-center">
            <h2 className="text-4xl font-bold ">How to join</h2>
            <p className="text-base py-6">
              You can now register your mobility clubs <br /> and be part of
              great innovations
            </p>
            <button className="bg-black text-white rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-red-700">
              Register today
            </button>
          </span>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Clubs;
