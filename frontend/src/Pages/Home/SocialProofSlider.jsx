import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { ImQuotesLeft } from "react-icons/im";

import slider_1 from "./assets/images/social_proof/katumaba.png";
import slider_2 from "./assets/images/social_proof/monica.png";

const SocialProofSlider = () => {
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
      headline: "It is very evident that mass transport is the answer to the future of the city",
      name:'Gen Katumba Wamala',
      role: "Minister of Works and Transport Ug",
      link:'',
      image_url: slider_1,
      alt:'Gen Katumba Wamala'
    },
    {
      id: 2,
      headline: "Uganda Airlines becomes the first Client to buy a Kayoola Bus from Kiira Motors Corporation",
      name:'Dr. Monica Musenero',
      role: " Presidential Advisor",
      link:'',
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
      <div className="w-full py-[3rem] bg-white">
        {isDesktop && (
          <div className="w-full ">

            <div className="  bg-white flex-wrap md:flex-nowrap overflow-hidden  justify-center items-center ">
              <Slider {...settings} className="w-full mx- ">
                {data.map((p) => (
                  <div key={p.id} className="   w-[600px]  h-[340px] px-[20px]  bg-white my-6">
                  <div className="relative px-[15px] bg-[#f8f8f8] rounded-xl shadow-2xl flex flex-col h-full ">
                    {/* flex */}
                    <div className="md:text-5xl pt-6 text-xl text-[#D53A54] font-bold  ">
                      <ImQuotesLeft />
                    </div>
                    <div className="font-semibold   md:text-lg flex  ">
                      <p
                        data-aos="fade-up"
                        data-aos-once="true"
                        data-aos-duration="1000"
                        className="w-8/12 h-[100px] text-lg "
                      >
                       {p.headline}
                      </p>
                      <img
                        className="absolute object-cover object-center bottom-[0px] w-[17rem] right-1 ml-[0px]"
                        src={p.image_url}
                        alt="Sunset in the mountains"
                      />
                    </div>

                    <div className="  mt-[1rem] relative top-[1rem] text-md font-semibold  w-[350px] ">
                      {p.name}
                    </div>
                    <div className="font-normal relative top-4  text-base">
                      {p.role} <br />
                      <button
                        style={{
                          backdropFilter: "blur(10px)",
                          background: "rgba(255,255,255,0.2)",
                        }}
                        className="text-sm  border-4 mt-7 rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-white "
                      >
                        Watch
                      </button>
                    </div>
                  </div>
                </div>
                ))}
              </Slider>
              </div>

          </div>
        )}
        {/* Mobile */}
        <div

          className=" flex  flex-row justify-center items-center "
        >
          {isMobile && (
           <div className="w-full ">
           <center>
           <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-4">
             <Slider {...settingsMob}  className="w-full overflow-hidden shadow-lg">
               {data.map((p) => (
                 <div key={p.id} className="cursor-pointer filter brightness-90 hover:brightness-100   ">
                 <div className=" md:w-[500px]  overflow-hidden rounded-2xl  w-full">
                   {/* flex */}
                   <div className="md:text-5xl pt-6 text-xl text-[#D53A54] font-bold  ">
                     <ImQuotesLeft />
                   </div>
                   <div className="font-semibold   md:text-lg flex  ">
                     <p
                       data-aos="fade-up"
                       data-aos-once="true"
                       data-aos-duration="1000"
                       className="md:w-8/12 text-lg  md:h-auto h-[5.25rem] border-black"
                     >
                      {p.headline}
                     </p>
                     <img
                       className="absolute object-cover object-center bottom-[0px] w-4/12  md:w-6/12  z-[1] right-1   ml-[0px]"
                       src={p.image_url}
                       alt="Sunset in the mountains"
                     />
                   </div>

                   <div className="  mt-[1rem] relative md:top-[1rem] text-md font-semibold  w-[350px] ">
                     {p.name}
                   </div>
                   <div className="font-normal relative md:top-4  text-sm">
                     {p.role} <br />
                     <button
                       style={{
                         backdropFilter: "blur(10px)",
                         background: "rgba(255,255,255,0.2)",
                       }}
                       className="text-sm relative  border-4 mt-7 rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-white "
                     >
                       Watch
                     </button>
                   </div>
                 </div>
               </div>
               ))}
             </Slider>
             </div>
           </center>
         </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SocialProofSlider;
