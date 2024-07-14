import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../Components/ui/Footer";


const NotFound = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => navigate("/"), 8000); // Redirect after 8 seconds
    return () => clearTimeout(timeout);
  }, [navigate]);

  console.log(props.timeout);

  // //  timeout
  const { timeout = 8000 } = props; // Set default timeout of 5 seconds
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => Math.max(0, prevTime - 1000)); // Update and clamp to 0
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [timeout]); // Dependency array for useEffect

  const data = [
    {
      id: 1,
      name: "kayoola Evs",
    },
    { id: 2, name: "kayoola Coach" },
    { id: 3, name: "kayoola Chargers" },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  // const [query, setQuery] = useState(false);

  // const handleQuery = () => {
  //   setQuery(!query);
  // };

  return (
    <>


      <div className="flex justify-center items-center w-full h-[50vh] flex-col font-poppins">
        <h1 className="text-5xl font-bold ">Sorry! Page not found.</h1>
        <p className="text-lg py-2">
          We couldnt find the page you were looking for.
        </p>
        <p>
          You can go back to the <a href="/">homepage</a> or wait a few seconds
          to be redirected automatically.
        </p>

        {/* <div>
          <input
            type="search"
            name=""
            id=""
            className="bg-gray-100 "
            placeholder="🏸 Search Here"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            // onClick={handleQuery}
          />
          <div id="template">
            {data
              .filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((val) => (
                <div key={val.id} className="block">
                  {val.name}
                </div>
              ))}
          </div>
        </div> */}
        <div>Countdown: {remainingTime / 1000} seconds remaining</div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
