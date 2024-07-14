import  { useState } from 'react';
import { Link } from 'react-router-dom';
import EngineeringServices from "../../assets/images/new_content/EngineeringServices.jpg"
import ContactManufucturing from "../../assets/images/new_content/ContactManufucturing.jpg"
import vehicleHire from "../../assets/images/new_content/vehicle-hire.jpg"
import productSupport from "../../assets/images/new_content/productSupport.jpg"


const items = [
  { text: 'Contract Manufacturing ', image: ContactManufucturing, link:'/contract-manufacturing' },
  { text: 'Product Support', image: productSupport,link:'/product-support'  },
  { text: 'Engineering Services', image: EngineeringServices,link:'/engineering-services'  },
  { text: 'Vehicle Hire', image: vehicleHire,link:'/vehicle-hire'  },
];

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(items[0].image);
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
      <div className="w-2/12 max-w-lg mb-4">
        <img src={currentImage} alt="Slider" className={`w-full rounded-2xl transition-opacity duration-500 ${fade ? 'opacity-40' : 'opacity-100'}`} />
      </div>
      <div className="flex gap-6 ">
        {items.map((item, index) => (
          <Link to={item.link}
            key={index}
            className="text-base cursor-pointer hover:text-red-500 transition-colors hover-underline duration-300"
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
