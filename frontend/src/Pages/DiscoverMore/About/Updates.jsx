import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import president from "./assets/images/president.png"
import overview from "./assets/images/overview.png"
import ev from "./assets/images/ev.png"

const UpdateSlider = () => {

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
        className="w-full  py-[3rem]"
        // data-aos="fade-up"
        // data-aos-once="true"
        // data-aos-duration="800"
      >


          <div className="w-full overflow-hidden">
            <center>
              <Slider {...settings} className="md:w-[120vw] ">
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
            </div>
    </>
  );
};

export default UpdateSlider;
