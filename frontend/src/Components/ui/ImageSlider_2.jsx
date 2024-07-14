import { useState } from "react";
import { Link } from "react-router-dom";
import podcast from "../../assets/images/new_content/podacast.jpg";
import annualReport from "../../assets/images/new_content/annualReport.jpg";
import career from "../../assets/images/new_content/career.jpg";
import Aboutus from "../../assets/images/new_content/Aboutus.jpg";
import plants2 from "../../assets/images/new_content/plants2.jpg";
import newPress from "../../assets/images/new_content/new-press.jpg";
import concept from "../../assets/images/concepts/ev_cover.png";
import spareParts from "../../assets/images/new_content/spare-parts.jpg";
import serviceCentre from "../../assets/images/new_content/service-centre.jpg";
import charging from "../../assets/images/new_content/charging.jpg";

const items = [
  {
    text: "About Us",
    image: Aboutus,
    link: "/about-us",
  },
  {
    text: "Career",
    image: career,
    link: "/career",
  },
  {
    text: "Annual report",
    image: annualReport,
    link: "/reports",
  },
];

const items_1 = [
  {
    text: "Plants",
    image: plants2,
    link: "/plants",
  },
  {
    text: "Concept Vehicles",
    image: concept,
    link: "/concepts",
  },
];

const items_2 = [
  {
    text: "News Press",
    image: newPress,
    link: "",
  },
  {
    text: "Podcasts",
    image: podcast,
    link: "",
  },
];

const items_3 = [
  {
    text: "Service Location",
    image: serviceCentre,
    link: "/engineering-services",
  },
  {
    text: "Charging Location",
    image: charging,
    link: "/vehicle-hire",
  },
  {
    text: "Spare Parts",
    image: spareParts,
    link: "/",
  },
];

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState([
    items[0].image,
    items_1[0].image,
    items_2[0].image,
  ]);

  const [fade, setFade] = useState(false);

  const handleMouseEnter = (image) => {
    setFade(true);
    setTimeout(() => {
      setCurrentImage(image);
      setFade(false);
    }, 200); // Match the transition duration
  };

  return (
    <div className="hidden  md:flex justify-center gap-[4rem]  items-center">
      <div className="w-2/12 max-w-lg ">
        <img
          src={currentImage}
          alt="Slider"
          className={`w-full rounded-2xl object-center object-cover transition-opacity duration-500 ${
            fade ? "opacity-40" : "opacity-100"
          }`}
        />
      </div>
      <div className="flex flex-col ">
        <p className="font-bold">Company</p>
        {items.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="text-sm cursor-pointer hover:text-red-500 transition-colors hover-underline duration-300 pt-[6px]"
            onMouseEnter={() => handleMouseEnter(item.image)}
          >
            {item.text}
          </Link>
        ))}
      </div>
      <div className="flex flex-col ">
        <p className="font-bold">&nbsp;</p>
        {items_1.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="text-sm  cursor-pointer hover:text-red-500 transition-colors hover-underline duration-300 pt-[6px]"
            onMouseEnter={() => handleMouseEnter(item.image)}
          >
            {item.text}
          </Link>
        ))}
        <p>&nbsp;</p>
      </div>
      <div className="flex flex-col ">
        <p className="font-bold">Media</p>
        {items_2.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="text-sm cursor-pointer hover:text-red-500 transition-colors hover-underline duration-300 pt-[6px]"
            onMouseEnter={() => handleMouseEnter(item.image)}
          >
            {item.text}
          </Link>
        ))}
        <p>&nbsp;</p>
      </div>
      <div className="flex flex-col ">
        <p className="font-bold">Support</p>
        {items_3.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="text-sm cursor-pointer hover:text-red-500 transition-colors hover-underline duration-300 pt-[6px]"
            onMouseEnter={() => handleMouseEnter(item.image)}
          >
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
