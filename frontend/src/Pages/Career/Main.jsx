import cover from "./images/cover.png";
import background from "./images/background.png";
import { Link } from "react-router-dom";
import Footer from "../../Components/ui/Footer";

const Main = () => {
  return (
    <div className="font-poppins">
      <div
       style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          objectFit: "cover",
        }} className="w-full  flex text-center px-[7%] flex-col  py-[12.5%]  h-full">
        <p className="text-2xl pt-4 md:pt-0 font-bold">Carrer opportunities at KMC </p>
        <p className="py-5 text-base">
          Kiira Motors Corporation is a State Enterprise established to <br className="hidden md:block" />{" "}
          champion value addition in the nascent Motor Vehicle Industry in
          <br className="hidden md:block"/> Uganda through Technology Transfer
        </p>
        <div>
        <div style={{backgroundImage:`url(${cover})`, backgroundPosition:'center',backgroundSize:'contain', backgroundRepeat:'no-repeat'}} className=" md:h-[30rem] h-[10rem] rounded-2xl">

             </div>
      </div>
      </div>



      <div className="px-[7%]">
        <span className="flex py-6  w-full justify-around">
          <div className="w-8/12">
            <h1 className="font-bold text-xl ">Case vehicle technology engineer</h1>
            <p className="text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor id
              reprehenderit expedita laborum inventore deleniti perferendis fuga
              commodi adipisci placeat. Molestias consectetur nulla quisquam
              reprehenderit quis incidunt quidem tenetur minima.
            </p>

            <div className="flex gap-10 py-2">
            <p className="text-cyan-500 font-semibold text-sm">Job details</p>
            <p className="text-gray-400 font-semibold text-sm">Deadline 2/8/2024</p>
          </div>
          </div>

          <div>
          <Link to="/kayoola-evs">
              <button className="bg-black text-sm hover:bg-gray-700 text-white rounded-full my-4 py-2 px-[30px] focus:outline-none focus:ring focus:ring-black border-2   ">
               Apply
              </button>
            </Link>
          </div>
        </span>
        <span className="flex py-6  w-full justify-around">
          <div className="w-8/12">
            <h1 className="font-bold text-xl ">Sales Manager</h1>
            <p className="text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor id
              reprehenderit expedita laborum inventore deleniti perferendis fuga
              commodi adipisci placeat. Molestias consectetur nulla quisquam
              reprehenderit quis incidunt quidem tenetur minima.
            </p>

            <div className="flex gap-10 py-2">
            <p className="text-cyan-500 font-semibold text-sm">Job details</p>
            <p className="text-gray-400 font-semibold text-sm">Deadline 2/8/2024</p>
          </div>
          </div>

          <div>
          <Link to="/kayoola-evs">
              <button className="bg-black hover:bg-gray-700 text-white rounded-full my-4 py-2 px-[30px] text-sm focus:outline-none focus:ring focus:ring-black border-2   ">
               Apply
              </button>
            </Link>
          </div>
        </span>

        <span className="flex py-6 w-full justify-around">
          <div className="w-8/12">
            <h1 className="font-bold text-xl ">Finance Manager</h1>
            <p className="text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor id
              reprehenderit expedita laborum inventore deleniti perferendis fuga
              commodi adipisci placeat. Molestias consectetur nulla quisquam
              reprehenderit quis incidunt quidem tenetur minima.
            </p>

            <div className="flex gap-10 py-2">
            <p className="text-cyan-500 font-semibold text-sm">Job details</p>
            <p className="text-gray-400 font-semibold text-sm">Deadline 2/8/2024</p>
          </div>
          </div>

          <div>
          <Link to="/kayoola-evs">
              <button className="bg-black hover:bg-gray-700 text-white text-sm rounded-full my-4 py-2 px-[30px] focus:outline-none focus:ring focus:ring-black border-2   ">
               Apply
              </button>
            </Link>
          </div>
        </span>

      </div>
      <Footer />
    </div>
  );
};

export default Main;
