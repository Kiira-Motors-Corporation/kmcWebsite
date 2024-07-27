import  { useContext } from "react";
import { useState } from "react";
import {  Link, useNavigate,useLocation } from "react-router-dom";
import background from "./assets/images/background.png";
import main from "./assets/images/main.png";
import icon from '../../assets/images/icon.png'
import { AuthContext } from "../../Context/AuthContext";
import {url} from "../../utils/backend.js";
import { FaEye, FaEyeSlash } from 'react-icons/fa';




//Login Form
const Login = () => {
  const { login, loading, user } = useContext(AuthContext);
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

    // Redirect if user is already logged in
    if (user) {
      navigate('/'); // Redirect to home page or dashboard
      return null; // Optionally return null or a loading indicator
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(name, password);
      // console.log(success)
    if (success) {
        const from = location.state?.from?.pathname || '/';
        navigate(from);
    } else {
        setErrorMessage('Login failed. Please check your credentials.');
    }
};


  return (
    <div className="overflow-hidden">
       {loading ? (
              <div className="absolute z-[10] w-full flex justify-center items-center h-full bg-black "><div id="spinner" ><img src={icon} alt="" /></div></div>

            ) : (
                errorMessage && <p>{errorMessage}</p>
            )}

      <div
        className="absolute z-[-1] flex font-poppins overflow-hidden  w-[100vw]  border-none"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="w-[40rem] h-[100vh] border-none  ">
          <center>
            <form
             onSubmit={handleSubmit}
              className="relative md:top-[7rem] top-[5rem] grid w-8/12 md:p-8  rounded-2xl"
            >
              <h1 className="text-2xl font-bold text-left text-white py-5">
                Welcome back
              </h1>
              <input
                type="text"
                name="username"
                onChange={(e) => setName(e.target.value)}
                placeholder="Username"
                required="required"
                 className="my-2 w-full text-sm focus:outline-none focus:ring-0 rounded-lg border-none"
              />

<div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="my-2 w-full text-sm focus:outline-none focus:ring-0 rounded-lg border-none"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="focus:outline-none">
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>
      {/* {passwordError && <p className=" text-xs">{passwordError}</p>} */}
        {/* <p id='spinner'>hello</p> */}
                <button
                  className=" text-white lg:w-6/12 text-sm bg-black rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-white "
                  type="submit"
                >
                  Sign in
                </button>


             <Link to="/sign-up">
                Don't have an account?
                <div className="text-blue-800">Register Now</div>
              </Link>
            </form>
          </center>
        </div>
        <img
          src={main}
          className="md:w-[30rem]  w-[20rem] absolute right-[-5rem] bottom-[-4rem]   overflow-x-hidden"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
