import React from 'react'
import { LogoutModal } from '../../Components/Modal'
import { AuthContext } from "../../Context/AuthContext";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const Logout = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


const handleLogout = async (e) => {
    e.preventDefault();
    await logout();
    // Redirect to home page after login
    navigate('/login');
};

const handleContinue = async () => {




        navigate(from);

};

  return (
    <div
      className="absolute h-[100vh] inset-0 z-[100]  bg-[#555555] flex justify-center items-center"
      id="wrapper"

      style={{ transition: "all 0.8s ease" }}
    >
      <div style={{ transition: "all 0.3s ease" }} className="w-[600px] ">
        <div className="bg-white p-2 rounded-2xl flex flex-col py-5">


          <p className="text-center text-black text-2xl py-5">
           Are you sure you want to log out
          </p>
          <div className="flex gap-2 justify-center">
          <div onClick={handleLogout} className="border bg-red-600 gap-4 cursor-pointer rounded-full py-2 px-[30px] text-white font-semibold focus:outline-none focus:ring focus:ring-red-700 ">
             Logout
            </div>
            <div onClick={handleContinue} className="border text-white bg-black rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-red-700 ">
             Continue Browsing
            </div>
          </div>


        </div>
      </div>
    </div>


  )
}

export default Logout