import React from "react";
import { IoMdClose } from "react-icons/io";

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) {
    return null;
  }
  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      onClose();
    }
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-lg flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
      style={{ transition: "all 0.8s ease" }}
    >
      <div style={{ transition: "all 0.3s ease" }} className="w-[600px] ">
        <div className="bg-white p-2 rounded-2xl flex flex-col py-5">
          <button className="text-xl place-self-end" onClick={() => onClose()}>
            <IoMdClose />
          </button>
          <div className="text-center text-6xl font-bold py-5">Thank you</div>
          <p className="text-center text-2xl py-5">
            Our team will get in touch with you in 30 mins
          </p>
          <center className="py-2">
            <button className="border border-black rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-red-700 mt-[2rem] mb-[4rem]">
              See more
            </button>
          </center>
        </div>
      </div>
    </div>
  );
};

export const ModalNavbar = ({ isVisible, onClose }) => {
  if (!isVisible) {
    return null;
  }
  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      onClose();
    }
  };
  return (
    <div
      className="absolute inset-0 bg-black w-full h-[50vh]"
      id="wrapper"
      onClick={handleClose}
      style={{ transition: "all 0.8s ease" }}
    >
      <div style={{ transition: "all 0.3s ease" }} className="w-[600px]"></div>
      <ul>
        <li>Products</li>
        <li>Services</li>
      </ul>
    </div>
  );
};


export const LogoutModal = ({ children }) => {
  
  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      onClose();
    }
  };
  return (
    <div
      className="absolute h-[100vh] inset-0 z-[100] bg-black bg-opacity-25 backdrop-blur-lg flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
      style={{ transition: "all 0.8s ease" }}
    >
      <div style={{ transition: "all 0.3s ease" }} className="w-[600px] ">
        <div className="bg-white p-2 rounded-2xl flex flex-col py-5">
          <button className="text-xl place-self-end" onClick={() => onClose()}>
            <IoMdClose />
          </button>
          <div className="text-center text-6xl font-bold py-5">Thank you</div>
          <p className="text-center text-black text-2xl py-5">
           Are you sure you want to log out
          </p>
          <center className="py-2">
            <div className="border border-black rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-red-700 mt-[2rem] mb-[4rem]">
             {children}
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Modal;
