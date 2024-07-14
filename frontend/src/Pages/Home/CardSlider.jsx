import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import slider_1 from "../../assets/images/a.png";
import slider_2 from "../../assets/images/b.png";
import slider_3 from "../../assets/images/d.png";

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
      headline: "12 Meter Electric Coach",
      date: "2 days ago",
      image_url: slider_1,
    },
    {
      id: 2,
      headline: "12 Meter Executive Diesel Coach",
      date: "2 days ago",
      image_url: slider_2,
    },
    {
      id: 3,
      headline: "12 Meter Diesel Coach",
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
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className=" w-full py-[3rem] px-[7%] bg-white text-base">
        {isDesktop && (
          <div
            className="w-full"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1500"
          >
            <div className="text-[2rem] flex w-4/12 md:text-3xl md:p-0 my-7 font-medium   ">
              Models
            </div>
            <div className="overflow-hidden">
              <center>
                <Slider {...settings} className="w-full">
                  {data.map((p) => (
                    <div
                      key={p.id}
                      className="cursor-grab w-[20rem] flex justify-evenly items-center filter brightness-90 hover:brightness-100 transition-all delay-150 "
                    >
                      <div>
                        <div className="h-[15rem]">
                          <img
                            className="   object-center object-cover w-[18rem]"
                            src={p.image_url}
                            alt=""
                            style={{
                              transition: "all 0.3s ease",
                              transform: "scaleX(-1)",
                            }}
                          />
                        </div>

                        {/* <button className="bg-white hover:bg-gray-700 hover:text-white text-black rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-black border-2 ml-[50px] mb-5 relative bottom-[4rem] left-[9rem] z-2">
                      Learn More
                    </button> */}
                        <div className="text-center   font-medium md:text-base ">
                          {p.headline}
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </center>
            </div>
          </div>
        )}
        {/* Mobile */}
        <div onResize={logWindowWidth} className=" flex  flex-row m-4 ">
          {isMobile && (
            <Slider {...settingsMob} className="w-full">
              {data.map((p) => (
                <div
                  key={p.id}
                  className="cursor-pointer filter brightness-90 hover:brightness-100   "
                >
                  <div className=" lg:w-[500px] w-[350px] h-[250px] overflow-hidden rounded-2xl ">
                    <img
                      className="hover:scale-105 overflow-hidden"
                      src={p.image_url}
                      alt=""
                      style={{ transition: "all 0.3s" }}
                    />
                  </div>
                  <div className="text-center md:text-[1.3rem] ">
                    {p.headline}
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
