import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Components/AuthContext";
import icon from "../../assets/images/icon.png";
import background from "./assets/images/background.png";
import main from "./assets/images/main.png";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { user, signup, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if user is already logged in
    if (user) {
      navigate("/"); // Redirect to home page or dashboard
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const success = await signup(name, email, contact, password);
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
              className="relative md:top-[3rem] top-[5rem] grid lg:w-8/12 w-10/12 p-8  rounded-2xl"
              onSubmit={handleSubmit}
            >
              <h1 className="text-2xl font-medium text-left text-white py-5">
                Create new account
              </h1>
              <div className="flex  gap-2">
                <input
                  type="text"
                  placeholder="Username"
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
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Contact"
                  value={contact}
                  className="my-2 w-full text-sm focus:outline-none focus:ring-0 rounded-lg border-none"
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>


              <input
                type="password"
                placeholder="Password"
                value={password}
                className="my-2 w-full text-sm focus:outline-none focus:ring-0 rounded-lg border-none"
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                className=" text-white lg:w-6/12 text-sm bg-black rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-white "
                type="submit"
              >
                Sign Up
              </button>

              <Link to="/login" className="text-xs text-left py-2">
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
