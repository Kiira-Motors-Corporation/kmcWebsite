import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

import slider_1 from "../Home/assets/images/updates/news_1.png"
import slider_2 from "../Home/assets/images/updates/news_2.png"
import slider_3 from "../Home/assets/images/updates/news_3.png"

const UpdateSlider = () => {
  const [isMobile, setIsMobile] = useState(false); // State to track mobile view
  const [isDesktop, setIsDesktop] = useState(true); // State to track mobile view

  // return () => window.removeEventListener("resize", handleResize); // Cleanup
  function logWindowWidth() {
    if (window.innerWidth < 800) {
      setIsMobile(true); // Adjust breakpoint for mobile as needed
    } else {
      setIsMobile(false);
    }
  }

  function logWindowWidthDesktop() {
    if (window.innerWidth > 800) {
      setIsDesktop(true); // Adjust breakpoint for mobile as needed
    } else {
      setIsDesktop(false);
    }
  }
  // console.log("Window width:", window.innerWidth);

  window.addEventListener("resize", logWindowWidth);
  window.addEventListener("resize", logWindowWidthDesktop);
  //data
  const data = [
    {
      id: 1,
      headline: "Earth Day 2024: Planet Vs Plastic",
      date: "2 days ago",
      image_url: slider_1,
    },
    {
      id: 2,
      headline: "Are Electric Vehicles Really Better for the Environment? Yes.",
      date: "2 days ago",
      image_url: slider_2,
    },
    {
      id: 3,
      headline: "Ideas Shaping SUSTAINABILITY in 2024",
      date: "2 days ago",
      image_url: slider_3,
    },
  ];

  // settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000,
  };
  // settings-mobile
  const settingsMob = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000,
  };

  return (
    <>
      <div
        className="w-full py-[3rem]"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="800"
      >
        <center>
          <div className="text-[2rem] md:text-3xl font-medium py-3  mb-[3rem]">
            News Updates
          </div>
        </center>{" "}
        {isDesktop && (
          <div className="w-full ">
            <center>
              <Slider {...settings} className="w-10/12 ">
                {data.map((p) => (
                  <div
                    key={p.id}
                    className="cursor-pointer  flex justify-center items-center filter brightness-75 hover:brightness-100   "
                  >
                    <div className=" w-[20rem] overflow-hidden rounded-2xl">
                      <img
                        className="hover:scale-105 rounded-2xl overflow-hidden object-cover object-center h-[300px]"
                        src={p.image_url}
                        alt=""
                        style={{ transition: "all 0.3s" }}
                      />
                      <button className="bg-white hover:bg-gray-700 hover:text-white text-black rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-black border-2  mb-5 relative bottom-[4rem] left-[5rem] z-2">
                        Learn More
                      </button>
                      <div className="text-center md:text-base ">
                        {p.headline}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </center>
          </div>
        )}
        {/* Mobile */}
        <div
          // onResize={logWindowWidth}
          className=" flex  flex-row justify-center items-center "
        >
          {isMobile && (
            <Slider {...settingsMob} className="w-full flex justify-center items-center px-[7%]">
              {data.map((p) => (
                <div
                  key={p.id}
                  className="cursor-pointer filter brightness-90 hover:brightness-100   "
                >
                  <div className=" md:w-[500px]  overflow-hidden rounded-2xl  w-full">
                    <img
                      className="hover:scale-105 overflow-hidden w-full "
                      src={p.image_url}
                      alt=""
                      style={{ transition: "all 0.3s" }}
                    />

                    <button className="bg-white hover:bg-gray-700 hover:text-white text-black rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-black border-2 ml-[50px] mb-5 relative bottom-[4rem] left-[9rem] md:left-[18rem] z-2">
                      Learn More
                    </button>
                    <div className="text-center md:text-base ">
                      {p.headline}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </>
  );
};

export default UpdateSlider;
