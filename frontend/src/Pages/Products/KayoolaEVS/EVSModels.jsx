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
            <div className="w-[18rem] object-cover object-center">
              <img
                className=""
                src={`${url}/${item.image_path}`}
                alt=""
              />
            </div>
            <p>{item.length}&nbsp;{item.name}</p>
            <div className="flex justify-between">
              <p>{item.seats}&nbsp;seats</p>{" "}
              <NavLink to={`/evs/${item.id}`} className="border text-sm rounded-full border-black px-8 py-2">
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
