import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {url} from "../../../utils/backend";

const EVSModels = () => {
  const [evs, setEVS] = useState([]);

  useEffect(() => {
    fetchEVS();
  }, []);



  const fetchEVS = async () => {
    try {
      const response = await axios.get(url + "/vehicle/type/EVS");
      setEVS(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };
  return (
    <div>

      <div className="bg-white pb-[7%] flex justify-center items-center flex-wrap gap-8 px-[7%] overflow-hidden">
        {evs.map((item) => (
          <div key={item.id}>
            <div className="md:w-[18rem] w-[10rem] object-cover object-center">
              <img
                className="object-center object-cover"
                src={`${url}/${item.image_path}`}
                alt=""
              />
            </div>
            <p>{item.length}&nbsp;{item.name}</p>
            <div className="flex md:flex-row flex-col justify-between">
              <p>{item.vehicle.seats}&nbsp;seats</p>{" "}
              <NavLink to={`/evs/${item.id}`} className="border text-sm rounded-full border-black px-0 md:px-8 text-center py-2">
                Order
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EVSModels;
