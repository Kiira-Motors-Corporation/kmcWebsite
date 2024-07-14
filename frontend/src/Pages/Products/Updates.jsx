import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import slider_1 from "../../assets/images/concepts/coach_cover.png"
import slider_2 from "../../assets/images/concepts/evs_cover.png"
import slider_3 from "../../assets/images/concepts/ev_cover.png"

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
  console.log("Window width:", window.innerWidth);

  window.addEventListener("resize", logWindowWidth);
  window.addEventListener("resize", logWindowWidthDesktop);
  //data
  const data = [
    {
      id: 1,
      headline: "",
      date: "2 days ago",
      image_url: slider_1,
    },
    {
      id: 2,
      headline: "",
      date: "2 days ago",
      image_url: slider_2
    },
    {
      id: 3,
      headline: "",
      date: "2 days ago",
      image_url: slider_3,
    },
  ];


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
        {/* Mobile */}
        <div

          className=" flex  flex-row justify-center  items-center "
        >
          {isMobile && (
            <Slider {...settingsMob} className="w-full flex justify-center items-center px-[7%]">
              {data.map((p) => (
                <div
                  key={p.id}
                  className="cursor-pointer filter brightness-90 hover:brightness-100   "
                >
                  <div className=" lg:w-[500px]  overflow-hidden rounded-2xl  w-full">
                    <img
                      className="hover:scale-105 overflow-hidden w-full "
                      src={p.image_url}
                      alt=""
                      style={{ transition: "all 0.3s" }}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </div>

    </>
  );
};

export default UpdateSlider;
