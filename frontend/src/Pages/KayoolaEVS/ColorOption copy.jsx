// ColorOption.jsx


const ColorOption = ({ title, color, isSelected, onSelect, name }) => {



  return (
    <div
    name={name}
      className={`flex items-center font-poppins gap-8 mx-2  border rounded cursor-pointer ${
        isSelected ? "border-blue-500 opacity-95 border-[4px]" : "border-gray-300"
      }`}
      style={{ backgroundColor: isSelected ? "#E0F7FA" : "#FFFFFF" }}
      onClick={() => onSelect(color)}
    >
      <div
        title={title}
        className="w-8 h-8 "
        style={{ backgroundColor: color }}
      ></div>

    </div>
  );
};

export default ColorOption;

export const CapacityOption = ({ passenger, onSelect, text }) => {
  return (
    <div>
      <input onClick={() => onSelect(passenger)} type="radio" name="capacity" id=""/>
      &nbsp;<span  className="font-normal text-base">{text}</span>
    </div>
  );
};
