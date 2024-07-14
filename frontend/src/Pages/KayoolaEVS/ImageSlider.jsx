import white from "./assets/images/white.png";
import red from "./assets/images/red.png";
import orange from "./assets/images/orange.png";
import grey from "./assets/images/grey.png";


// Placeholder images for different colors
const images = {
    red: red,
    orange: orange,
    white: white,

    gray: grey,

  };
  const ImageSlider = ({ selectedColor }) => {
    // Normalize the color name to lowercase
    const normalizedColor = selectedColor ? selectedColor.toLowerCase() : '';

    return (
      <div className="image-slider mt-4">
        {normalizedColor ? (
          <img
            src={images[normalizedColor] || white}
            alt={normalizedColor}
            className="w-full h-auto rounded-2xl relative z-10"
          />
        ) : (
          <img
          src={white}
          alt={normalizedColor}
          className="w-full h-auto rounded-2xl relative z-10"
        />
        )}
      </div>
    );
  };

export default ImageSlider;








