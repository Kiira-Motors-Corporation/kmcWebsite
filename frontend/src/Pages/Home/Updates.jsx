import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider_1 from "./assets/images/updates/news_1.png";
import slider_2 from "./assets/images/updates/news_2.png";
import slider_3 from "./assets/images/updates/news_3.png";

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
    autoplaySpeed: 7000,
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 800, // Medium screens
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
  // settings-mobile


  return (
    <>
      <div className="w-full py-[3rem] overflow-hidden lg:px-[0] bg-white">
        <center>
          <div className="text-[2rem] md:text-3xl font-medium py-3  mb-[3rem]">
            News Updates
          </div>
        </center>{" "}

          <div className="w-full  overflow-hidden">
            <center className=" overflow-hidden">
              <Slider {...settings} className="mx-[7%]  overflow-hidden " >
                {data.map((p) => (
                  <div
                    key={p.id}
                    className="cursor-pointer overflow-hidden  pr-[1rem] filter brightness-75 hover:brightness-100   "
                  >
                    <div className="  overflow-hidden rounded-2xl">
                      <img
                        className="hover:scale-105 rounded-2xl overflow-hidden object-cover object-center "
                        src={p.image_url}
                        alt=""
                        style={{ transition: "all 0.3s" }}
                      />
                      <button className="bg-white text-sm hover:bg-gray-700 hover:text-white text-black rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-black border-2  relative bottom-[4rem] left-[4rem] z-2">
                        Learn More
                      </button>
                      <div
                        data-aos="fade-up"
                        data-aos-once="true"
                        data-aos-duration="800"
                        className="text-center md:text-base "
                      >
                        {p.headline}
                      </div>
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
