import pose_1 from "./assets/images/pose_1.png";
import pose_2 from "./assets/images/pose_2.png";
import gradient from "./assets/images/gradient.png";
import founder from "./assets/images/founder.png";
import UpdateSlider from "./Updates";
import Card from "./CardSlider";
import Footer from "../../Components/ui/Footer";


const Main = () => {
  return (
    <div className="font-poppins">

      <div
        className="h-[180vh]"
        style={{
          backgroundImage: `url(${gradient})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          objectFit: "cover",
        }}
      >
        <span className="w-full flex-col h-full flex items-center justify-center">
          <h1 className="text-3xl font-medium">Our Story</h1>
          <p className="font-base py-4">KMC has a rich heritage</p>

          <UpdateSlider />
          <div className="text-center md:px-[6rem]">
            <h1 className="text-3xl font-medium">2007</h1>
            <p>
              The genesis of Kiira Motors Corporation dates back to 2007 when a
              team of students and staff (Prof. Sandy Stevens Tickodri-Togboa
              and Mr. Paul Isaac Musasizi) at Makerere University were invited
              to the Vehicle Design Summit at MIT with the goal of designing the
              Vision 200 - a 5 passenger plug-in hybrid.
            </p>
          </div>
        </span>
      </div>

      <div className="bg-[#F2F6FB] rounded-2xl flex justify-center items-center h-[90vh] mb-[15vh] mx-[6rem]">
        <span className="w-6/12">
          <h1 className="text-3xl font-medium py-4">About us</h1>
          <p>
            Kiira Motors Corporation is a State Enterprise established to
            champion value addition in the nascent Motor Vehicle Industry in
            Uganda through Technology Transfer
          </p>
        </span>

        <span>
          <h1 className="text-3xl font-medium py-1">Our Vision & Missions</h1>
          <p>To be the Best-in-Class Motor Vehicle Manufacturer in Africa.</p>
          <p>To Build a better Uganda through Automotive Technology.</p>
        </span>
      </div>

      <div className="bg-[#F2F6FB] h-[100vh]">
        <Card />
      </div>

      <div className="w-full h-[100vh] flex justify-evenly items-center">
        <div className="w-[20rem] h-[20rem] rounded-full">
          <img src={founder} alt="" />
        </div>

        <span className="w-4/12">
          <p className="text-sm text-center py-2">A word from our founder</p>
          <p className="text-center">
            "Kiira Motors Corporation is a State Enterprise established to
            champion value addition in the nascent Motor Vehicle Industry in
            Uganda through Technology Transfer"
          </p>
          <h2 className="py-[1rem] text-center font-medium text-gray-500 text-lg">
            Mr Paul Isaac Musasizi
          </h2>
          <p className="text-center font-medium">CEO</p>
        </span>
      </div>

      <div className="h-[60vh] bg-[#F2F6FB] rounded-2xl my-[2rem] md:mx-[6rem] flex items-center">
        <div className="w-[40rem]">
          {" "}
          <img
            className="object-cover h-[60vh] object-center"
            src={pose_1}
            alt=""
          />
        </div>
        <span className="text-center">
          <h2 className="text-3xl font-medium py-[1rem]">Become a partner</h2>
          <p className="text-base">
            Kiira Motors Corporation is a State Enterprise established to <br />
            champion value addition in the nascent Motor Vehicle Industry in{" "}
            <br /> through Technology Transfer
          </p>
          <button className="mt-[1rem] bg-black text-white rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-red-700">
            Learn more
          </button>
        </span>
        <div className="w-[40rem] flex items-end justify-end ">
          {" "}
          <img
            className="object-cover   h-[60vh] object-center"

            src={pose_2}
            alt=""
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
