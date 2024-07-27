import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const UpdateSlider = () => {

  //data
  const data = [
    {
      id: 1,
      headline: "Collaborate to learn and grow",
      date: "2 days ago",

    },
    {
      id: 2,
      headline: "Focus on the customer",
      date: "2 days ago",

    },
    {
      id: 3,
      headline: "Innovate sustainable",
      date: "2 days ago",

    },
    {
      id: 4,
      headline: "Empower teams",
      date: "2 days ago",

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
        className="w-full py-[3rem]"
        // data-aos="fade-up"
        // data-aos-once="true"
        // data-aos-duration="800"
      >
        <center>

        </center>{" "}
       (
          <div className="w-full overflow-hidden">
            <center>
              <Slider {...settings} className="w-[120vw] ">
                {data.map((p) => (
                  <div
                    key={p.id}
                    className="cursor-pointer  flex justify-center items-center filter brightness-75 hover:brightness-100   "
                  >
                    <div className=" w-[20rem] bg-[#E6E6E6] flex flex-col items-center  justify-center overflow-hidden rounded-2xl">
                    <div className="text-left py-2 md:text-lg px-7 ">
                        {p.headline}
                      </div>
                      <div
                        className="hover:scale-105 rounded-2xl px-7 text-left overflow-hidden object-cover object-center h-[250px]"

                        alt=""
                        style={{ transition: "all 0.3s" }}
                      >Government through Kiira Motors Corporation purchased two (2) square miles (1,280 acres) of land for setting up the Uganda</div>


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
