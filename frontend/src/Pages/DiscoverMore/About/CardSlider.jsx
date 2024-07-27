
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slider_1 from "./assets/images/slider_1.png"
import slider_2 from "./assets/images/slider_2.png"
import slider_3 from "./assets/images/slider_3.png"
import slider_4 from "./assets/images/slider_4.png"


const UpdateSlider = () => {

  const data = [
    {
      id: 1,
      headline: "Collaborate to learn and grow",
      date: "2 days ago",
      image_url: slider_1,
    },
    {
      id: 2,
      headline: "Focus on the customer",
      date: "2 days ago",
      image_url: slider_2,
    },
    {
      id: 3,
      headline: "Innovate sustainable",
      date: "2 days ago",
      image_url: slider_3,
    },
    {
      id: 4,
      headline: "Empower teams",
      date: "2 days ago",
      image_url: slider_4,
    },
  ];

  // settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // Medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
        className="w-full py-[3rem]"
        // data-aos="fade-up"
        // data-aos-once="true"
        // data-aos-duration="800"
      >
        <center>
          <div className="text-[2rem] md:text-3xl font-medium py-3  mb-[3rem]">
          <h1>What we stand for</h1>
          </div>
        </center>{" "}

          <div className="w-full overflow-hidden">
            <center>
              <Slider {...settings} className="lg:w-[120vw] ">
                {data.map((p) => (
                  <div
                    key={p.id}
                    className="cursor-pointer w-[15rem]  flex gap-5 justify-center items-center filter brightness-75 hover:brightness-100   "
                  >
                    <div className=" overflow-hidden rounded-2xl">
                      <img
                        className="hover:scale-105 rounded-2xl overflow-hidden object-cover object-center md:h-[210px] lg:h-[270px]"
                        src={p.image_url}
                        alt=""
                        style={{ transition: "all 0.3s" }}
                      />

                      <div className="text-center py-2 md:text-base ">
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
