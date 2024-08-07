import white from "../assets/images/white.png";
import red from "../assets/images/red.png";
import orange from "../assets/images/orange.png";
import grey from "../assets/images/grey.png";
import { useNavigate } from 'react-router-dom';


// Placeholder images for different colors
const images = {
    red: red,
    orange: orange,
    white: white,
    gray: grey,

  };
  const ImageSlider = ({ selectedColor }) => {
    const navigate = useNavigate()
    const normalizedColor = selectedColor ? selectedColor.toLowerCase() : '';

    const handleImageClick = () => {
      navigate('/modal-order', { state: { image: images[normalizedColor] || white, alt: normalizedColor } });
    };
// console.log(normalizedColor);



    return (
      <div className="image-slider">
        {normalizedColor ? (
          <img
            src={images[normalizedColor] || white}
            alt={normalizedColor}
            onClick={handleImageClick}
            className="w-9/12 h-auto rounded-2xl relative z-10"
          />
        ) : (
          <img
          src={white}
          alt={normalizedColor}
          className="w-9/12 h-auto rounded-2xl relative z-10"
        />
        )}
      </div>
    );
  };

export default ImageSlider;








