import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider_1 from "../../assets/images/a.png";
import slider_2 from "../../assets/images/b.png";
import slider_3 from "../../assets/images/d.png";

const UpdateSlider = () => {

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
      <div className=" w-full py-[3rem] px-[7%] bg-white text-base">

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
                <Slider {...settings} className={`w-full`}>
                  {data.map((p) => (
                    <div
                      key={p.id}
                      className="cursor-grab w-[20rem]  flex justify-evenly items-center filter brightness-90 hover:brightness-100 transition-all delay-150 "
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
          </div>
    </>
  );
};

export default UpdateSlider;
