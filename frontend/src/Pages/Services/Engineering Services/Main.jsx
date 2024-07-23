import cover from "./assets/images/cover.png";
import background from "./assets/images/background.png";
import Footer from "../../../Components/ui/Footer";


const Main = () => {
  return (
    <div className="">
      <div
        className="h-auto gap-[4rem] py-[4rem] w-full flex flex-wrap md:flex-nowrap justify-center pt-[9rem] font-poppins px-[7%]"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          objectFit: "cover",
        }}
      >
        <div id="main">
          <div className="lg:w-[22rem] md:w-[18rem]  text-white bg-[#555555] p-8 rounded-2xl">
            <h1 className="text-3xl md:text-2xl  font-medium">Engineering Services</h1>
            <p className="text-sm py-8">
            Kiira Motors Corporation provides innovative product design, engineering, software development and testing to OEMs, automotive value chain actors, players in adjacent industries, start-ups, informal sector players and SMEs.
            </p>
          </div>
        </div>
        <div className="md:w-6/12 w-11/12 h-auto">
          <img
            src={cover}
            className="w-full object-cover object-center"
            alt=""
          />
        </div>
      </div>

      <div id="form" className="md:flex justify-center w-full py-[5rem]">
        <form className=" grid lg:w-4/12 md:w-6/12  p-8  rounded-2xl">
          <h1 className=" font-medium text-left  py-2">Order Details</h1>
          <input
            type="text"
            name="vehicle-type"
            placeholder="Vehicle type"
            required="required"
            className="my-2 rounded-2xl border-none bg-[#E8E8E8] "
          />

          <input
            type="text"
            name="quantity"
            required
            placeholder="Quantity"
            className="my-2 rounded-2xl border-none bg-[#E8E8E8] "
          />
          <h1 className=" font-medium text-left  py-2">Timeline</h1>
          <input
            type="date"
            name="date"
            required
            placeholder="dd/mm/yy"
            className="my-2 rounded-2xl border-none bg-[#E8E8E8] "
          />

          <br />
          <button className=" text-white w-3/12 md:w-5/12  bg-black rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-white ">
            Send
          </button>
          <div>

          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
