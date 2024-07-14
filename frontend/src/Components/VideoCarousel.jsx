import React, { useEffect } from "react";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Button from "./Button";
import carousel from "../assets/images/carousel.jpg";
import videofile from "../assets/videos/Website_video.mp4";
import videofile2 from "../assets/videos/KMC.mp4";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const slides = [
    { id: 1, url: "/src/assets/videos/cover.mp4" },
    { id: 2, url: "/src/assets/videos/KMC.mp4" },
    { id: 3, url: "/src/assets/videos/Website_video.mp4" },
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

  // const goToSlide = (slideIndex) => {
  //   setCurrentIndex(slideIndex);
  //   console.log(slides[newIndex].url);
  // };

  useEffect(() => {
    // Optional: Handle infinite looping or other side effects based on currentIndex
  }, [currentIndex]); // Dependency on currentIndex for potential side effects

  const handleNextVideo = () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(nextIndex);
  };

  const settings = {
    dots: true, // Display navigation dots
    infinite: true, // Enable infinite looping
    autoplay: true, // Optional: enable autoplay
    autoplaySpeed: 2000, // Optional: autoplay speed in milliseconds
    arrows: true, // Display navigation arrows
    slidesToShow: 1, // Show one video at a time
    slidesToScroll: 1, // Scroll one video at a time
  };
  return (
    <div id="transparent">
      <div>
        <div>
          <video autoPlay muted loop>
            <source src={slides[currentIndex].url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button onClick={handleNextVideo}>Next Video</button>
        </div>

        {/* left arrow */}
        <div
          style={{ transition: "all 0.3s ease" }}
          className=" hidden group-hover:block absolute top-[90%] -translate-x-0 translate-y-[-50%] right-[5rem] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:scale-150 border mr-[6rem]"
        >
          <BsChevronCompactLeft size={25} onClick={prevSlide} />
        </div>
        {/* right arrow */}
        <div
          style={{ transition: "all 0.3s ease" }}
          className="  group-hover:block absolute top-[90%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer  hover:scale-150 border mr-[6rem]"
        >
          <BsChevronCompactRight size={25} onClick={nextSlide} />
        </div>

        {/* socials */}
        <div
          style={{
            backdropFilter: "blur(10px)",
            background: "rgba(0,0,0,0.1)",
          }}
          className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2  text-black cursor-pointer "
        >
          <div className="text-3xl bg-black rounded-md m-1">
            <FaFacebookF className="text-white p-1" />
          </div>
          <div className="text-3xl bg-black rounded-md m-1">
            <FaInstagram className="text-white p-1 " />
          </div>
          <div className="text-3xl bg-black rounded-md m-1">
            <FaTwitter className="text-white p-1 " />
          </div>
          <div className="text-3xl bg-black rounded-md m-1">
            <FaYoutube className="text-white p-1 " />
          </div>
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
      <Slider {...settings}>
        {slides.map((video) => (
          <div key={video.id || video.url}>
            <video autoPlay muted loop src={video.url} controls />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
