import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider_1 from "./assets/images/slider_1.png"
import slider_2 from "./assets/images/slider_2.png"
import slider_3 from "./assets/images/slider_3.png"

const UpdateSlider = () => {

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
      image_url: slider_2
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
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768, // Medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 640, // Small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };


  return (
    <>
      <div
        className="w-full py-[3rem] "
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="800"
      >
        <center className= "mx-[7%]">
          <span className="text-lg text-left md:text-center">
            <p className="md:py-4 md:px-2">Plant Construction Progress</p>
            <p className="py-4 text-base  md:px-0 w-full ">
              Kiira Vehicle plant start-up facilities (Phase 1) at the Jinga
              Industrial and Business Park <br className="hidden md:block" /> based on the Force Account
              Mechanism
            </p>
            <button className="bg-black  hover:bg-gray-700 hover:text-white text-white rounded-full my-5 py-2 px-[30px] focus:outline-none focus:ring focus:ring-black mb-5 ">
              Book a visit
            </button>
          </span>
        </center>{" "}

          <div className="w-full mt-[4rem] ">
            <center>
              <Slider {...settings} className="w-full ">
                {data.map((p) => (
                  <div
                    key={p.id}
                    className="cursor-pointer w-[20rem] flex justify-center items-center filter brightness-75 hover:brightness-100   "
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

      </div>
    </>
  );
};

export default UpdateSlider;
