import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import president from "./assets/images/president.png"
import overview from "./assets/images/overview.png"
import ev from "./assets/images/ev.png"

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
      image_url: president,
    },
    {
      id: 2,
      headline: "Are Electric Vehicles Really Better for the Environment? Yes.",
      date: "2 days ago",
      image_url: overview,
    },
    {
      id: 3,
      headline: "Ideas Shaping SUSTAINABILITY in 2024",
      date: "2 days ago",
      image_url: ev,
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
        className="w-full  py-[3rem]"
        // data-aos="fade-up"
        // data-aos-once="true"
        // data-aos-duration="800"
      >
       
        {isDesktop && (
          <div className="w-full overflow-hidden">
            <center>
              <Slider {...settings} className="w-[120vw] ">
                {data.map((p) => (
                  <div
                    key={p.id}
                    className="cursor-pointer  flex justify-around items-center filter brightness-90 hover:brightness-100   "
                  >
                    <div className=" w-11/12 bg-slate-500 mx-5  overflow-hidden rounded-2xl">
                      <img
                        className="hover:scale-105 w-full rounded-2xl overflow-hidden object-cover object-center h-[300px]"
                        src={p.image_url}
                        alt=""
                        style={{ transition: "all 0.3s" }}
                      />
                   
                     
                    </div>
                  </div>
                ))}
              </Slider>
            </center>
          </div>
        )}
        {/* Mobile */}
        <div
          onResize={logWindowWidth}
          className=" flex  flex-row justify-center items-center "
        >
          {isMobile && (
            <Slider {...settingsMob} className="w-full">
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
