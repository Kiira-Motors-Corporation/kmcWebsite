// ColorOption.jsx

export const ColorOptionExterior = ({ title, color, group, selectedColor, onSelect }) => {
  const handleSelect = (e) => {
    onSelect(group, e.target.value);
  };

  return (
    <div
      className={`radio-container  ${selectedColor === title ? 'selected' : ''}`}
      onClick={() => onSelect(group, title)}
    >
      <input
        name={group}
        value={title}
        title={title}
        type="radio"
        required
        className="w-8 h-8"
        checked={selectedColor === title}
        onChange={handleSelect}
        style={{ backgroundColor: color }}
      />
    </div>
  );
};



export const CapacityOption = ({ onSelect,group, text }) => {
  const handleSelect = (e) => {
    onSelect(group, e.target.value);
  };
  return (
    <div onClick={() => onSelect(group, text)}>
      <input
        onClick={handleSelect}
        type="radio"
        name={group}
        value={text}
      />
      &nbsp;<span className="font-normal text-base">{text}</span>
    </div>
  );
};
