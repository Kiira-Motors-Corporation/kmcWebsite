import  { useState } from 'react';

import { Link } from 'react-router-dom';
import evs from "./assets/images/navbar/evs.png";
import coach from "./assets/images/navbar/coach.png";
import chargers from "./assets/images/navbar/chargers.png";

const items = [
  { text: 'Kayoola EVS ', image: evs, link:'/details-evs' },
  { text: 'Kayoola Coach', image: coach,link:'/details-coach'  },
  { text: 'Chargers', image: chargers,link:'/chargers'  },

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
    <div className="hidden md:flex justify-center gap-[5rem]  items-center">
      <div className="w-3/12  max-w-xl mb-4">
        <img src={currentImage} alt="Slider" className={`w-full rounded-2xl object-cover object-center transition-opacity duration-500 ${fade ? 'opacity-40' : 'opacity-100'}`} />
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
