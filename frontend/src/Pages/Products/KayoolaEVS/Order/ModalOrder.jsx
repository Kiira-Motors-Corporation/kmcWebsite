import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import white from "../assets/images/white.png";
import red from "../assets/images/red.png";
import orange from "../assets/images/orange.png";
import grey from "../assets/images/grey.png";

const ModalOrder = ({ selectedColor, isOpen, formData, onClose, onConfirm }) => {
  const navigate = useNavigate();
  const [chosenColor, setChosenColor] = useState(null);

  // Map color names to image paths
  const images = {
    red: red,
    orange: orange,
    white: white,
    gray: grey,
  };

  // Update the chosen color image when selectedColor changes
  useEffect(() => {
    setChosenColor(images[selectedColor.toLowerCase()] || null);
  }, [selectedColor]);

  const handleClose = () => {
    navigate(-1); // Go back to the previous page
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 font-poppins text-base bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white px-[14%] p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Confirm Your Order</h2>
        <div className="mb-4 text-left">
          {/* Display the selected color image */}
          {chosenColor && (
            <img src={chosenColor} className="w-32 mb-4" alt={`Selected color: ${selectedColor}`} />
          )}

          <div className="font-medium flex gap-4 items-center">Name: <span className="text-sm font-normal">{formData.accName}</span></div>
          <div>
            <p><strong>Colors:</strong></p>
            <p>Exterior Color: <span className="text-sm">{formData.colors.exterior_Color}</span></p>
            <p>Interior Color: <span className="text-sm">{formData.colors.interior_Color}</span></p>
            <p>Floor Trim: <span className="text-sm">{formData.colors.floor_Trim}</span></p>
          </div>
          <div>
            <p><strong>Capacities:</strong></p>
            <p>Capacity: <span className="text-sm">{formData.capacities.capacity}</span></p>
          </div>
        </div>
        <div className="flex justify-end">
          <button onClick={onClose} className="mr-2 bg-gray-200 px-4 py-2 rounded">Cancel</button>
          <button onClick={onConfirm} className="bg-red-500 text-white px-4 py-2 rounded">Confirm</button>
          <button className="absolute top-2 right-2 text-gray-500" onClick={handleClose}>X</button>
        </div>
      </div>
    </div>
  );
};

export default ModalOrder;
