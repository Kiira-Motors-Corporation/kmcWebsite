import React from "react";
import a from "../assets/images/a.png";
import b from "../assets/images/b.png";
import c from "../assets/images/c.jpg";
import d from "../assets/images/d.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = () => {
  return (
    <div className="px-4 bg-gray-100  h-auto md:px-[6rem] py-[3rem] ">
      <div className="text-5xl font-semibold py-3 mb-4 px-[3rem]">
        Our models
      </div>
      <div className="flex justify-around items-center flex-wrap gap-6  py-6">
        <div className="w-[500px] rounded-xl overflow-hidden shadow-2xl pt-3 bg-white ">
          <div className="text-2xl font-bold px-[50px]">Kayoola EVS 2024</div>
          <div className="text-[1.3rem] pl-[50px]">
            Confitable and goes long distances
          </div>

          <img
            className="w-90 h-[18rem] ml-[50px] "
            src={a}
            alt="Sunset in the mountains"
          />

          <button className="bg-white hover:bg-gray-700 text-black rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-black border-2 ml-[50px] mb-5">
            Learn More
          </button>
        </div>

        <div className="w-[500px] rounded-xl overflow-hidden shadow-2xl pt-3  bg-white ">
          <div className="text-2xl font-bold px-[50px]">Kayoola EVS 2023</div>
          <div className="text-[1.3rem] pl-[50px]">
            Confitable and goes long distances
          </div>

          <img
            className="w-90 h-[18rem] ml-[50px] "
            src={b}
            alt="Sunset in the mountains"
          />

          <button className="bg-white hover:bg-gray-700 text-black rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-black border-2 ml-[50px] mb-5">
            Learn More
          </button>
        </div>

        <div className="w-[500px] rounded-xl overflow-hidden shadow-2xl pt-3   bg-white">
          <div className="text-2xl font-bold px-[50px]">Kayoola Coach</div>
          <div className="text-[1.3rem] pl-[50px]">
            Confitable and goes long distances
          </div>

          <img
            style={{ transform: "scaleX(-1)" }}
            className="w-90 h-[18rem] ml-[50px] "
            src={c}
            alt="Sunset in the mountains"
          />

          <button className="bg-white hover:bg-gray-700 text-black rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-black border-2 ml-[50px] mb-5">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

export const CardSlider = () => {
  //data
  const data = [
    {
      id: 1,
      title: "Kayoola EVS 2024",
      description: "Confitable and goes long distances",
      image_url: "/src/assets/images/a.png",
    },
    {
      id: 2,
      title: "Kayoola EVS 2023",
      description: "Confitable and goes long distances",
      image_url: "/src/assets/images/b.png",
    },
    {
      id: 3,
      title: "Kayoola Coach",
      description: "Confitable and goes long distances",
      image_url: "/src/assets/images/c.jpg",
    },
    {
      id: 1,
      title: "Kayoola EVS 2024",
      description: "Confitable and goes long distances",
      image_url: "/src/assets/images/a.png",
    },
    {
      id: 2,
      title: "Kayoola EVS 2023",
      description: "Confitable and goes long distances",
      image_url: "/src/assets/images/b.png",
    },
    {
      id: 3,
      title: "Kayoola Coach",
      description: "Confitable and goes long distances",
      image_url: "/src/assets/images/c.jpg",
    },
  ];

  // settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };
  return (
    <>
      <div className="w-[90vw]">
        <Slider {...settings}>
          {data.map((product) => (
            <div
              key={product.id}
              class="w-[500px] rounded-xl overflow-hidden shadow-2xl pt-3   bg-white"
            >
              <div className="text-2xl font-bold px-[50px]">
                {product.title}
              </div>
              <div className="text-[1.3rem] pl-[50px]">
                {product.description}
              </div>

              <img
                style={{ transform: "scaleX(-1)" }}
                class="w-90 h-[18rem] ml-[50px] "
                src={product.image_url}
                alt="Sunset in the mountains"
              />

              <button className="bg-white hover:bg-gray-700 text-black rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-black border-2 ml-[50px] mb-5">
                Learn More
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
