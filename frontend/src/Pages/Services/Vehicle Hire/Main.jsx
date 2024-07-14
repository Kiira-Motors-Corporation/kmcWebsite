
import cover from "./assets/images/cover.png";
import background from "./assets/images/background.png";

import Footer from "../../../Components/ui/Footer";


const Main = () => {
  return (
    <>

      <div
        className="h-[100vh] gap-[4rem] w-full flex flex-wrap md:flex-nowrap justify-center pt-[9rem] font-poppins"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          objectFit: "cover",
        }}
      >
        <div id="main">
          <div className="w-[22rem] h-auto text-white bg-[#555555] p-8 rounded-2xl">
            <h1 className="text-3xl font-medium">Vehicle Hire</h1>
            <p
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              className="text-base py-8"
            >
              Kiira Motors Corporation provides innovative product design,
              engineering, software development and testing to OEMs, automotive
              value chain actors, players in adjacent industries, start-ups,
              informal sector players and SMEs.
            </p>
          </div>
        </div>
        <div className="md:w-6/12 w-11/12">
          <img
            src={cover}
            className="w-full object-cover object-center"
            alt=""
          />
        </div>
      </div>

      <div id="form" className="md:flex justify-center w-full py-[5rem]">
        <form className=" grid md:w-3/12  p-8  rounded-2xl">
          <h1 className=" font-medium text-left  py-5">Order Details</h1>
          <input
            type="text"
            name="vehicle-type"
            placeholder="Vehicle type"
            required="required"
            className="my-4 rounded-2xl border-none bg-gray-200 "
          />

          <input
            type="text"
            name="quantity"
            required
            placeholder="Quantity"
            className="my-4 rounded-2xl border-none bg-gray-200 "
          />
          <h1 className=" font-medium text-left  py-5">Timeline</h1>
          <input
            type="text"
            name="password"
            required
            placeholder="dd/mm/yy"
            className="my-4 rounded-2xl border-none focus:outline-none bg-gray-200"
          />

          <br />
          <button className=" text-white w-9/12 bg-black rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-white ">
            Request a Quote
          </button>
          <div>
            {/* <Link to="/login">
                  Already have an account?
                  <div className="text-blue-800">Login</div>
                </Link> */}
          </div>
        </form>
      </div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">

      </div>
      <Footer />
    </>
  );
};

export default Main;
