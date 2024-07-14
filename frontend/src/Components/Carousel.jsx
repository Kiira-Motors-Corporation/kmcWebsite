import React from "react";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa6";

const Carousel = () => {
  const slides = [
    { url: "/src/assets/videos/cover.mp4" },
    { url: "/src/assets/videos/KMC.mp4" },
    {
      url: "/src/assets/videos/Website_video.mp4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    console.log(slides[newIndex].url);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
    console.log(slides[newIndex].url);
  };

  return (
    <div id="transparent">
      <div className="md:h-[100vh] h-[70vh] w-full group ">
        <div className="w-full h-full relative z-[-1] filter brightness-75 contrast-150">
          <video
            className="absolute inset-0 object-cover w-full h-full z-10"
            autoPlay
            muted
            loop
          >
            <source src={slides[currentIndex].url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute z-[11] md:bottom-[22rem]   text-[1.3rem] text-white flex justify-between items-end md:h-full  w-full md:px-[8rem]">
            <div
              id="1"
              className="md:text-5xl  text-[2rem] text-center font-medium align-middle "
            >
              <p className="py-8 font-bold">
                Deliver the Ultimate DELIVER THE ULTIMATE <br /> Travel
                Experience to <br /> Your Passengers
              </p>
            </div>
          </div>
        </div>
        <div
          id="2"
          className=" absolute top-[50%] md:top-[50%] -translate-x-0 translate-y-[-50%] right-5 md:text-2xl text-xl p-2  text-white cursor-pointer   mr-[6rem]"
        >
          <p className="md:align-top md:py-8">
            At KMC, we are dedicated to providing your with the ultimate
            <br /> mobility solutions. Our Kayoola EVs and Coach™ offers <br />
            unparalleled comfort, cutting-edge technology
          </p>
          <Link to="/login">
            <button className="bg-white text-[#D33A54] rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-[#D53A54]">
              Order Now
            </button>
          </Link>

          <button
            style={{
              backdropFilter: "blur(10px)",
              background: "rgba(255,255,255,0.2)",
            }}
            className=" text-white rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-white "
          >
            Learn More
          </button>
        </div>
        {/* left arrow */}
        <div
          style={{ transition: "all 0.3s ease" }}
          className=" hidden group-hover:block absolute md:top-[90%] -translate-x-0 translate-y-[-150%] md:translate-y-[-50%] right-[5rem] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:scale-150 border mr-[6rem]"
        >
          <BsChevronCompactLeft size={25} onClick={prevSlide} />
        </div>
        {/* right arrow */}
        <div
          style={{ transition: "all 0.3s ease" }}
          className=" hidden group-hover:block absolute md:top-[90%] -translate-x-0  translate-y-[-150%] md:translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer  hover:scale-150 border mr-[6rem]"
        >
          <BsChevronCompactRight size={25} onClick={nextSlide} />
        </div>

        {/* socials */}
        <div
          style={{
            backdropFilter: "blur(10px)",
            background: "rgba(255,255,255,0.2)",
          }}
          className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2  text-black cursor-pointer "
        >
          <a href="https://www.facebook.com/kiiramotors/">
            <div className="text-3xl bg-[#D53A54] rounded-md m-1">
              <FaFacebookF className="text-white p-1" />
            </div>
          </a>

          <a href="https://www.instagram.com/kiiramotorsofficial?igsh=MWxtanZicnRwcm4wdA==">
            <div className="text-3xl bg-[#D53A54] rounded-md m-1">
              <FaInstagram className="text-white p-1 " />
            </div>
          </a>
          <a href="https://x.com/KiiraMotors?t=HlSrjtZ-qVARNukxF6r_nA&s=08">
            <div className="text-3xl bg-[#D53A54] rounded-md m-1">
              <FaTwitter className="text-white p-1 " />
            </div>
          </a>
          <a href="https://youtube.com/@kiiramotors?si=463ul-BHodb3ZU8V">
            <div className="text-3xl bg-[#D53A54] rounded-md m-1">
              <FaYoutube className="text-white p-1 " />
            </div>
          </a>

          <a href="https://www.linkedin.com/company/kiira-motors-corporation/">
            <div className="text-3xl bg-[#D53A54] rounded-md m-1">
              <FaLinkedinIn className="text-white p-1 " />
            </div>
          </a>
        </div>

        {/* <div className="flex top-4 justify-center py-2 ">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Carousel;

{
  /* <div className="absolute z-10">
              <div className=" flex justify-center items-center text-white pt-[100px] text-center text-4xl font-bold">
              
              </div>
              <div className="flex justify-center items-center text-white pt-[10px] text-center text-6xl font-bold">
                KAYOOLA EVS
              </div>
              <span className="flex justify-center items-center text-white pt-[20px] text-center text-2xl font-semibold">
               
              </span>
              <div className="flex justify-center items-center text-black pt-[50px] text-center text-xl ">
               
              </div>
            </div> */
}
