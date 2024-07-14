import React from "react";
import a from "../assets/images/a.png";
import b from "../assets/images/b.png";
import c from "../assets/images/c.jpg";
import d from "../assets/images/d.png";

const Card = () => {
  return (
    <div className="px-4 h-auto md:px-[6rem] md:py-[3rem]">
      <center className="py-[2rem]">
        {" "}
        <div className="text-5xl font-semibold  md:ml-[152px] mb-4 py-[2rem]">
          Colors
          <p className="text-[1.3rem] py-3 font-normal">
            The Kayoola Coach is a novel and innovative public transport <br />{" "}
            solution for comfortable long-distance and intercity mobility.
          </p>
        </div>
      </center>

      <div className="flex justify-around items-center flex-wrap">
        <div class="w-[500px] rounded-xl overflow-hidden  pt-3  mx-5 bg-white">
          {/* <div className="text-2xl font-bold px-[50px]">Kayoola Coach</div>
          <div className="text-[1.3rem] pl-[50px]">
            Confitable and goes long distances
          </div> */}
          <img
            style={{ transform: "scaleX(-1)" }}
            class="w-90 h-[18rem] ml-[50px] "
            src={c}
            alt="Sunset in the mountains"
          />

          {/* <button className="bg-white hover:bg-gray-700 text-black rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-black border-2 ml-[50px] mb-5">
            Learn More
          </button> */}
        </div>

        <div class="w-[500px] rounded-xl overflow-hidden  pt-3  mx-5 bg-white">
          {/* <div className="text-2xl font-bold px-[50px]">Kayoola Coach</div>
          <div className="text-[1.3rem] pl-[50px]">
            Confitable and goes long distances
          </div> */}

          <img
            style={{ transform: "scaleX(-1)" }}
            class="w-90 h-[18rem] ml-[50px] "
            src={c}
            alt="Sunset in the mountains"
          />

          {/* <button className="bg-white hover:bg-gray-700 text-black rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-black border-2 ml-[50px] mb-5">
            Learn More
          </button> */}
        </div>

        <div class="w-[500px] rounded-xl overflow-hidden  pt-3  mx-5 bg-white">
          {/* <div className="text-2xl font-bold px-[50px]">Kayoola Coach</div>
          <div className="text-[1.3rem] pl-[50px]">
            Confitable and goes long distances
          </div> */}

          <img
            style={{ transform: "scaleX(-1)" }}
            class="w-90 h-[18rem] ml-[50px] "
            src={c}
            alt="Sunset in the mountains"
          />

          {/* <button className="bg-white hover:bg-gray-700 text-black rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-black border-2 ml-[50px] mb-5">
            Learn More
          </button> */}
        </div>
      </div>

      <center className="py-[2rem]">
        {" "}
        <div className="text-5xl font-semibold  mb-4 py-[2rem] flex justify-center gap-6">
          <div className="bg-yellow-400 rounded-full w-[50px] h-[50px]">
            &nbsp;
          </div>
          <div className="bg-black rounded-full w-[50px] h-[50px]">&nbsp;</div>
          <div className="bg-red-700 rounded-full w-[50px] h-[50px]">
            &nbsp;
          </div>
        </div>
      </center>
    </div>
  );
};

export default Card;
