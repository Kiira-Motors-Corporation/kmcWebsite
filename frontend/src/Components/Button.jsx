import React from "react";

const Button = ({ children, style }) => {
  return (
    <div>
      {/* <button className="bg-red-600 hover:bg-red-700 text-white font-bold rounded py-2 px-4 focus:outline-none focus:ring focus:ring-red-700">
        {children}
      </button> */}
      <button className={style}>{children}</button>
    </div>
  );
};

export default Button;
