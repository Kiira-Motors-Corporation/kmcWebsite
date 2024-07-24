import cover from "../../assets/images/introduction/cover.png";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <div className=" md:h-auto"
    data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="800"
    >
      <div
        className="w-full h-auto relative  flex justify-center  items-center lg:pt-[2rem] flex-col"
        >
<center className="absolute  w-full h-full  ">
<h1 className="md:text-3xl text-2xl text-cente md:px-0 px-9 font-medium py-8">
          Mobility solution for Africa
        </h1>
        <p

          className="md:text-base pt-[3rem] hidden md:block  md:text-center md:px-[7%] md:mb-[2rem]  text-sm p-7 md:p-0"
        >
          Welcome to Kiira Motors Corporation (KMC), where innovation meets
          sustainability in the
          heart of Africa's mobility revolution. We're more than just a
          mobility enterprise - we're  pioneers of progress, champions of
          innovation, and architects of change.
        </p>

        <Link
          to="/about"
          style={{
            backdropFilter: "blur(10px)",
            background: "rgba(255,255,255,0.2)",
          }}
          className=" my-10 rounded-full border bg-red-200 hover:bg-blue-300 text-xs  top-4 border-black py-2 px-[25px] focus:outline-none focus:ring focus:ring-white "
        >
          Learn More
        </Link>
</center>

        <div className=" h-auto relative   z-[-1] ">
          <img src={cover} className="object-cover object-center" alt=""  />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
