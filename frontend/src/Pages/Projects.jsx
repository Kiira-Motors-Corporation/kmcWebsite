import Footer from "../Components/ui/Footer"
import pose from "../assets/images/pose.png";
import { IoPlayCircleOutline } from "react-icons/io5";

const Projects = () => {
  return (
    <>

      <div className="flex justify-center items-center h-[100vh] bg-gray-200">
        <span>
          <p className="text-center text-2xl font-semibold">Projects</p>
          <h1 className="text-[4rem] font-bold text-center">
            Innovate Suatainable Solutions, We
            <br /> collaborate with industry leaders
          </h1>
          <center className="text-center flex justify-center">
            <IoPlayCircleOutline className="text-8xl s" />
          </center>
        </span>
      </div>

      <div className="flex justify-center items-center h-[100vh] bg-gray-400">
        <span>
          <h1 className="text-[4rem] font-bold text-center">
            Kiira Vehicle Plant (KVP)
          </h1>
          <p className="text-[1.5rem] text-center">
            The Kiira Vehicle Plant (KVP) is the State-of-the-art vehicle
            manufacturing facility in the <br /> Jinja Industrial and Business
            Park located on 100 acres of land. It is operated by Kiira Motors
            <br /> Corporation (KMC) to develop, make and sell sustainable
            mobility solutions within the <br /> region and Africa at large
          </p>
          <center>
            <button className="mt-[1rem] bg-black text-white rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-red-700">
              learn more
            </button>
          </center>
        </span>
      </div>

      <div className="flex justify-center items-center h-[100vh] bg-gray-200">
        <span>
          <h1 className="text-[4rem] font-bold text-center">
            Mobility Industrial and Business
            <br /> Park (MITP)
          </h1>
          <p className="text-[1.5rem] text-center">
            Government through Kiira Motors Corporation purchases two(2) square
            miles (1,280 acres) <br /> of land for setting up the Uganda
            Eco-Automative Industrial & Technology Park to support <br /> a wide
            range of investments in motor vehicle parts manufacturing, vehicle
            testing and <br /> automative technology innovation enterprises. The
            MITP in Bbaale, Kayunga District <br /> Central Uganda.
          </p>
          <center>
            <button className="mt-[1rem] bg-white border rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-red-700">
              Learn more
            </button>
          </center>
        </span>
      </div>

      <div className="h-[60vh] my-[2rem] flex items-center">
        <div className="w-[40rem]">
          {" "}
          <img src={pose} alt="" />
        </div>
        <span className="text-center">
          <h2 className="text-4xl font-bold py-[1rem]">Become a partner</h2>
          <p className="text-2xl">
            Kiira Motors Corporation is a State Enterprise established to <br />
            champion value addition in the nascent Motor Vehicle Industry in{" "}
            <br /> through Technology Transfer
          </p>
          <button className="mt-[1rem] bg-black text-white rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-red-700">
            learn more
          </button>
        </span>
        <div className="w-[40rem]">
          {" "}
          <img style={{ transform: "scaleX(-1)" }} src={pose} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
