import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImQuotesLeft } from "react-icons/im";
import { FaCirclePlay } from "react-icons/fa6";

import slider_1 from "./assets/images/social_proof/katumaba.png";
import slider_2 from "./assets/images/social_proof/monica.png";

const SocialProofSlider = () => {
   //data
  const data = [
    {
      id: 1,
      headline: "It is very evident that mass transport is the answer to the future of the city",
      name:'Gen Katumba Wamala',
      role: "Minister of Works and Transport Ug",
      link:'https://youtu.be/GwWsEwWr2MM?si=LNKRilyqgm5YjHEj',
      image_url: slider_1,
      alt:'Gen Katumba Wamala'
    },
    {
      id: 2,
      headline: "Uganda Airlines becomes the first Client to buy a Kayoola Bus from Kiira Motors Corporation",
      name:'Dr. Monica Musenero',
      role: " Presidential Advisor",
      link:'https://youtu.be/oJEQswHvI6E?si=vMy__KcLDANptcpu',
      image_url: slider_2,
      alt:'Dr. Monica Musenero'
    },

  ];

  // settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 7000,
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768, // Medium screens and smaller
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };


  return (
    <>
      <div className="w-full py-[3rem] md:px-[7%] bg-white">

          <div className="w-full ">

            <div className="  bg-white flex-wrap md:flex-nowrap overflow-hidden  justify-center items-center ">
              <Slider {...settings} className="w-full ">
                {data.map((p) => (
                  <div key={p.id} className="   w-[600px]  h-[340px] px-[20px]  bg-white my-6">
                  <div className="relative px-[15px] bg-[#f8f8f8] rounded-xl shadow-xl flex flex-col h-full ">
                    {/* flex */}
                    <div className="md:text-5xl pt-6 text-xl text-[#D53A54] font-bold  ">
                      <ImQuotesLeft />
                    </div>
                    <div className="font-semibold md:text-lg flex  ">
                      <p
                        data-aos="fade-up"
                        data-aos-once="true"
                        data-aos-duration="1000"
                        className="md:w-8/12 h-[100px] text-lg "
                      >
                       {p.headline}
                      </p>
                      <img
                        className="absolute object-cover object-center bottom-[0px] md:w-[12rem] lg:w-[14rem] w-[9rem] right-1 ml-[0px]"
                        src={p.image_url}
                        alt="Sunset in the mountains"
                      />
                    </div>

                    <div className="mt-[1rem] relative top-[1rem] text-md font-semibold  w-[350px] ">
                      {p.name}
                    </div>
                    <div className="md:font-normal relative top-4  text-base">
                      {p.role} <br />
                      <a href={p.link} className="flex  mt-7">
                      <button
                        style={{
                          backdropFilter: "blur(10px)",
                          background: "rgba(255,255,255,0.2)",
                        }}
                        className="text-sm border-4  rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-white "
                      >
                        Watch
                      </button>
                      {/* <div className="px-2 text-4xl flex items-center"><FaCirclePlay /> </div> */}
                      </a>

                    </div>
                  </div>
                </div>
                ))}
              </Slider>
              </div>

          </div>


      </div>
    </>
  );
};

export default SocialProofSlider;
