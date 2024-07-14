import  { useState,useEffect, useContext } from "react";
import { AuthContext } from "../../Components/AuthContext";
import icon from "../../assets/images/icon.png";
import background from "./assets/images/background.png";
import main from "./assets/images/main.png";
import {Link, useNavigate } from "react-router-dom";



const Signup = () => {
  const [username, setUsername] = useState("");
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const {user, signup, loading } = useContext(AuthContext);
  const navigate = useNavigate();


  useEffect(() => {
    // Redirect if user is already logged in
    if (user) {
        navigate('/'); // Redirect to home page or dashboard
    }
}, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const success = await signup(
        username,
        fname,
        lname,
        email,
        country,
        phone,
        category,
        password
      );
      if (success) {
        navigate("/"); // Navigate to home or any other page after successful signup
      } else {
        setError("Signup failed. Please check your details.");
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
            className="relative md:top-[1rem] top-[5rem] grid w-8/12 p-8  rounded-2xl"
            onSubmit={handleSubmit}>
              <h1 className="text-3xl font-bold text-left text-white py-5">
              Create new account
              </h1>
              <div className="flex gap-2">
              <input
                type="text"
                placeholder="Username"
                value={username}
                className="my-2 rounded-2xl border-none  "
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="text"
                placeholder="First Name"
                value={fname}
                className="my-2 rounded-2xl border-none  "
                onChange={(e) => setFirstName(e.target.value)}
              />
              </div>

              <div className="flex gap-2">
              <input
                type="text"
                placeholder="Last Name"
                value={lname}
                className="my-2 rounded-2xl border-none "
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                className="my-2 rounded-2xl border-none  "
                onChange={(e) => setEmail(e.target.value)}
              />
              </div>

           <div className="flex gap-2">
           <input
                type="text"
                placeholder="Country"
                value={country}
                className="my-2 rounded-2xl border-none  "
                onChange={(e) => setCountry(e.target.value)}
              />
              <input
                type="text"
                placeholder="Phone"
                value={phone}
                className="my-2 rounded-2xl border-none  "
                onChange={(e) => setPhone(e.target.value)}
              />
           </div>


              <select
                onChange={(e) => setCategory(e.target.value)}
                id="category"
                name="category"
                className=" rounded-2xl border-none  "
                required
              >
                <option value="" disabled selected>
                  Select a category <b>🔻</b>
                </option>
                <option value="customer">Personal</option>
                <option value="dealer">Dealer</option>
                <option value="supplier">Supplier</option>
                <option value="supplier">Business</option>
              </select>
              <br />
              <input
                type="password"
                placeholder="Password"
                value={password}
                className="my-2 rounded-2xl border-none  "
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                 className=" rounded-2xl border-none  "
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
               <button
                  className=" text-white w-6/12 bg-black rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-white "
                  type="submit"
                >
                  Sign Up
                </button>

             <Link to="/login">
                Already have an account?
                <div className="text-blue-800">Sign In</div>
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
