import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import icon from "../../assets/images/icon.png";
import background from "./assets/images/background.png";
import main from "./assets/images/main.png";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { url } from "../../utils/backend";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const [error, setError] = useState(null);
  const { user, signup, loading } = useContext(AuthContext);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if user is already logged in
    if (user) {
      navigate("/"); // Redirect to home page or dashboard
    }
  }, [user, navigate]);

  const validatePassword = (password) => {
    let error = "";
    if (password.length < 8) {
      error = "Password must be at least 8 characters long";
    } else if (!/[A-Z]/.test(password)) {
      error = "Password must contain at least one uppercase letter";
    } else if (!/[a-z]/.test(password)) {
      error = "Password must contain at least one lowercase letter";
    } else if (!/[0-9]/.test(password)) {
      error = "Password must contain at least one number";
    } else if (!/[!@#$%^&*]/.test(password)) {
      error = "Password must contain at least one special character";
    }
    return error;
  };

  const validateEmail = (email) => {
    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Invalid email format.";
    }
    return "";
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordError(validatePassword(newPassword));
  };

  const handleEmailChange = async (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    const emailValidationError = validateEmail(newEmail);
    if (emailValidationError) {
      setEmailError(emailValidationError);
    } else {
      try {
        const response = await axios.post(`${url}/user/check-email`, { email: newEmail });
        if (response.data.exists) {
          setEmailError('Email already exists.');
        } else {
          setEmailError('');
        }
      } catch (error) {
        console.error('Error checking email:', error);
        setEmailError('Error checking email.');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const passwordValidationError = validatePassword(password);
    const emailValidationError = validateEmail(email);
    if (passwordValidationError || emailValidationError) {
      setPasswordError(passwordValidationError);
      setEmailError(emailValidationError);
      return;
    }

    try {
      const success = await signup(name, email, contact, password);
      if (success) {
        navigate("/"); // Navigate to home or any other page after successful signup
      } else {

        setError("Signup failed. Please check your details.");
        alert(error);
      }
    } catch (error) {
      setError("Signup failed. Please check your details.");
    }
  };

  return (
    <div>
      {loading ? (
        <div className="absolute z-[10] w-full flex justify-center items-center h-full bg-black ">
          <div id="spinner">
            <img src={icon} alt="" />
          </div>
        </div>
      ) : (
        error && <p>{error}</p>
      )}

      <div
        className="absolute z-[-1] flex font-poppins overflow-hidden  w-[100vw]  border-none"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="w-[40rem] h-[100vh] border-none  ">
          {error && <p>{error}</p>}
          <center>
            <form
              className="relative md:top-[3rem] top-[5rem] grid lg:w-8/12 w-10/12 p-8  rounded-2xl"
              onSubmit={handleSubmit}
            >
              <h1 className="text-2xl font-medium text-left text-white py-5">
                Create new account
              </h1>
              <div className="flex  gap-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  className="my-2 w-full text-sm focus:outline-none focus:ring-0 rounded-lg border-none"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  className="my-2 w-full text-sm focus:outline-none focus:ring-0 rounded-lg border-none"
                  onChange={handleEmailChange}
                />

              </div>
              {emailError && <p className=" text-xs text-yellow-200 text-left">{emailError}</p>}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Contact"
                  value={contact}
                  className="my-2 w-full text-sm focus:outline-none focus:ring-0 rounded-lg border-none"
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={handlePasswordChange}
                  placeholder="Password"
                  required
                  className="my-2 w-full text-sm focus:outline-none focus:ring-0 rounded-lg border-none"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="focus:outline-none"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              {passwordError && <p className=" text-left pb-4 text-yellow-200 text-xs">{passwordError}</p>}

              <button
               disabled={!!emailError}
                className={emailError ? 'disabled-button lg:w-6/12 text-white text-sm backdrop-blur-sm bg-black/30 rounded-full py-2 px-[30px] ring-1 ring-black' :`text-white lg:w-6/12 text-sm bg-black rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-white`}
                type="submit"
              >
                Sign Up
              </button>

              <Link to="/login" className="text-sm text-left py-2">
                Already have an account?
                <span className="text-blue-800 font-bold">Sign In</span>
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

export default Signup;
