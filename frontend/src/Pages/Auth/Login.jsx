import  { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import {  Link, useNavigate,useLocation } from "react-router-dom";
import background from "./assets/images/background.png";
import main from "./assets/images/main.png";
import icon from '../../assets/images/icon.png'
import { AuthContext } from "../../Components/AuthContext";





//Login Form
const Login = () => {
  const { login, loading, user } = useContext(AuthContext);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState(null);



  const navigate = useNavigate();
  const location = useLocation();

    // Redirect if user is already logged in
    if (user) {
      navigate('/'); // Redirect to home page or dashboard
      return null; // Optionally return null or a loading indicator
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(username, password);
    if (success) {
        const from = location.state?.from?.pathname || '/';
        navigate(from);
    } else {
        setErrorMessage('Login failed. Please check your credentials.');
    }
};


//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Set loading to true when the request starts
//     try {
//         const response = await axios.post('http://localhost:3000/login', {
//             username,
//             password
//         }, {
//             withCredentials: true
//         });

//         if (response.data.loggedIn) {
//             setErrorMessage('Login successful');
//             navigate('/cart')
//             // Redirect or perform additional actions
//         } else {
//           setErrorMessage(response.data.message);
//         }
//     } catch (error) {
//       setErrorMessage('Password or Username is invalid');
//     } finally {
//       setLoading(false); // Set loading to false when the request finishes
//   }
// };


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
              <h1 className="text-3xl font-bold text-left text-white py-5">
                Welcome back
              </h1>
              <input
                type="text"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required="required"
                className="my-4 rounded-2xl border-none   "
              />

              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required="required"
                className="my-4 rounded-2xl border-none  "
              />
              {/* <span>Show Password</span> */}
              <div> {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
        {/* <p id='spinner'>hello</p> */}
                <button
                  className=" text-white w-6/12 bg-black rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-white "
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
