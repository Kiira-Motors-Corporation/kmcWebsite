import cover from "../../assets/images/introduction/cover.png";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <div className="border border-red-700 h-auto lg:h-auto"
    data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="800"
    >
      <div
        className="w-full h-auto relative  flex justify-center  items-center lg:pt-[2rem] flex-col"
        >
<center className="absolute  w-full h-full  ">
<h1 className="text-3xl text-cente md:px-0 px-9 font-medium py-8">
          Mobility solution for Africa
        </h1>
        <p

          className="md:text-base md:text-center md:px-[7%] mb-[2rem]  text-lg p-7 md:p-0"
        >
          Welcome to Kiira Motors Corporation (KMC), where innovation meets
          sustainability in the
          heart of Africa's mobility revolution. We're more than just a
          mobility enterprise - we're  pioneers of progress, champions of
          innovation, and architects of change.
        </p>
        {/* <br className="hidden md:block"/> */}
        <Link
          to="/about"
          style={{
            backdropFilter: "blur(10px)",
            background: "rgba(255,255,255,0.2)",
          }}
          className=" border-2 border-black my-10 rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-white "
        >
          Learn More
        </Link>
</center>

        <div className="w-full h-auto relative   z-[-1]">
          <img src={cover} className="object-cover object-center" alt=""  />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
