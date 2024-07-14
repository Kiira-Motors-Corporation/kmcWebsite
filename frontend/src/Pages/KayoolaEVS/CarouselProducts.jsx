import React from "react";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

import c from "./assets/images/kayoola.png";

const CarouselProducts = () => {
  const slides = [
    {
      url: c,
    },
    { url: "https://i.imgur.com/qGax6vV.jpeg" },
    { url: "https://i.imgur.com/qGax6vV.jpeg" },
    { url: "https://i.imgur.com/qGax6vV.jpeg" },
    { url: "https://i.imgur.com/qGax6vV.jpeg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div
      id="transparent"
      className="px-4  text-white h-[100vh]"
      style={{
        backgroundImage: `url(${c})`,
        objectFit: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col md:px-[6rem] justify-between h-[90vh]  w-full group">
        <div id="heading">
          <div className="text-3xl pt-[10rem] lg:text-4xl lg:pt-[7rem] font-bold">
            Your Ultimate Urban <br />
            Mobility Solution
          </div>
        </div>
        <div className="w-full h-auto pb-[3rem]  ">
          <div className="flex justify-between  w-full">
            <div className="hidden text-sm lg:block">
              <h1>Kayoola City BUS</h1>
              The Kayoola EVS™ is a fully electric bus built for city travel.
              <br />
              With a 300-kilometer range and seating for up to 90 passengers,
              <br />
              it's perfect for busy urban routes
            </div>

            <div className="font-bold flex items-center justify-end   text-[1.2rem] md:text-lg">
              <ul className="pr-[3rem]">
                <li>300km</li>
                <li className="font-normal md:text-[1.3rem] text-gray-400">
                  Range
                </li>
              </ul>

              <ul className="pr-[3rem]">
                <li>70 Seats</li>
                <li className="font-normal md:text-[1.3rem] text-gray-400">
                  Capacity
                </li>
              </ul>

              <ul className="pr-[3rem]">
                <li>All Electric</li>
                <li className="font-normal md:text-[1.3rem] text-gray-400">
                  Powertrain
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselProducts;

{
  /* <div className="flex top-4 justify-center py-2 ">
{slides.map((slide, slideIndex) => (
  <div
    key={slideIndex}
    onClick={() => goToSlide(slideIndex)}
    className="text-2xl cursor-pointer"
  >
    <RxDotFilled />
  </div>
))}
</div> */
}

{
  /* <div id="description">
            <p className="font-medium text-[1.3rem] md:text-center">
              The Kayoola Coach is a novel and innovative public transport
              solution for
              <br /> comfortable long distance and intercity mobility. It is
              available with either an Internal <br />
              Combustion Engine (ICE) or Electric powertrain. The Kayoola Coach
              is infused with the <br />
              Brand DNA that includes iclusive design for Sub-Saharan Africa
              (Panoramic design, visual <br /> screens);Afro centric Material
            </p>
          </div> */
}

{
  /* <div className=" text-black md:pb-[200px] pt-4  text-2xl font-bold md:absolute  bottom-3 right-[100px]">
Kayoola Coach
<br />
<p className="font-medium text-[1.3rem]">
  KMC also offers the Kayoola Coach
  <br /> a High Floor Intercity Bus, with a <br />
  ranging from 31-70
  <br /> passengers
</p>
</div>

  <div
            id="image"
            className="md:w-[850px] relative top-[100px]   z-[-2] bg-black"
          >
            <img style={{ transform: "scaleX(-1)" }} src={c} alt="" />
          </div>
          
          */
}
