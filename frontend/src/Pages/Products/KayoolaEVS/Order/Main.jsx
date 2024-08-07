import { Fragment, useEffect } from "react";
import { useState } from "react";
import { ColorOptionExterior } from "./ColorOption.jsx";
import back from "../assets/images/order/back.png";
import fore from "../assets/images/order/fore.png";
import Footer from "../../../../Components/ui/Footer";
import { useAuth } from "../../../../Context/AuthContext";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CapacityOption } from "./ColorOption.jsx";
import PhoneInput from "react-phone-input-2";
import "../../../../../node_modules/react-phone-input-2/lib/style.css";
import ModalOrder from "./ModalOrder.jsx";
import { url } from "../../../../utils/backend.js";
import ImageSlider from "./ImageSlider";

const Order = () => {
  const { user } = useAuth();
  const [evs, setEVS] = useState({});
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    fetchEVS();
  }, [id]);

  console.log(user);

  const [formData, setFormData] = useState({
    accName: user.name,
    address: "",
    colors: {
      exterior_Color: "",
      interior_Color: "",
      floor_Trim: "",
    },
    capacities: {
      capacity: "",
    },
    userId: user.id,
  });

  const selectedColor = formData.colors.exterior_Color;

  const fetchEVS = async () => {
    if (!user) {
      alert("You need to log in ");
      return;
    }

    try {
      const response = await axios.get(`${url}/vehicle/type/EVS/${id}`);
      setEVS(response.data);
    } catch (error) {
      console.error("Error fetching item:", error);
    }
  };

  console.log(evs);
  console.log(formData);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      phoneNumber: value,
    }));
  };

  const handleColorSelect = (group, color) => {
    setFormData((prev) => ({
      ...prev,
      colors: {
        ...prev.colors,
        [group]: color,
      },
    }));
  };

  const handleCapacitySelect = (group, text) => {
    setFormData((prev) => ({
      ...prev,
      capacities: {
        // ...prev.capacities,
        [group]: text,
      },
    }));
  };

  useEffect(() => {
    if (evs) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        // name: evs.name || "",
      }));
    }
  }, [evs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleConfirm = async () => {
    try {
      const response = await axios.post(url + "/evs_orders", formData);
      console.log("Order submitted successfully:", response.data);
      // Optionally, you can clear the form after successful submission
      setFormData({
        accName: user.name,
        address: "",
        colors: {
          exterior_Color: "",
          interior_Color: "",
          floor_Trim: "",
        },
        capacities: {
          capacity: "",
        },
        userId: user.id,
      });
    } catch (error) {
      console.error("Error submitting order:", error);
    }
    console.log(formData);
  };

  const capacityGroup = {
    capacity: [{ text: "90 (42/48)" }, { text: "70 (32/38)" }],
  };

  const colorGroups = {
    exterior_Color: [
      { title: "Red", color: "red" },
      { title: "Orange", color: "orange" },
      { title: "Gray", color: "grey" },
      { title: "White", color: "white" },
    ],
    interior_Color: [
      { title: "Beige", color: "#E28000" },
      { title: "Black", color: "#C1C1C1" },
      { title: "White", color: "#404040" },
    ],
    floor_Trim: [
      { title: "Chrome", color: "#C0C0C0" },
      { title: "Matte", color: "#808080" },
      { title: "Gloss", color: "#FFD700" },
    ],
  };

  return (
    <Fragment>
      {/* Carousel */}
      <form onSubmit={handleSubmit}>
        <div>
          <div className=" justify-evenly absolute right-[20%] top-[20%]">
            {Object.keys(colorGroups).map((group) => (
              <div key={group} className=" ">
                <h3 className="font-bold text-sm">{group.toUpperCase()}</h3>
                <div className="flex gap-2">
                  {colorGroups[group].map((colorOption) => (
                    <ColorOptionExterior
                      key={colorOption.title}
                      title={colorOption.title}
                      color={colorOption.color}
                      group={group}
                      selectedColor={formData.colors[group]}
                      onSelect={handleColorSelect}
                    />
                  ))}
                </div>
              </div>
            ))}

            <div className="rounded-2xl flex justify-center text-base">
              <center>
                <p className="py-2 text-left font-medium">
                  Capacity (Seating/Standing)
                </p>
                <div className="flex justify-between">
                  {Object.keys(capacityGroup).map((group) => (
                    <div key={group} className="space-y-4  ">
                      <div className="flex gap-4 ">
                        {capacityGroup[group].map((capacityOption) => (
                          <CapacityOption
                            key={capacityOption.text}
                            text={capacityOption.text}
                            group={group}
                            selectedColor={formData.capacities[group]}
                            onSelect={handleCapacitySelect}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </center>
            </div>
          </div>
          <div className="absolute z-[-10]">
            <img src={back} alt="" className=" bottom-[25%] w-full" />
          </div>
          <div className="h-auto  relative z-[-1] w-12/12 font-poppins">
            <span className="h-full flex  flex-col items-center absolute w-full z-[4] ">
              <p className="text-3xl font-bold w-11/12 md:w-full text-center text-white py-8">
                {evs.name}
              </p>
            </span>

            <div className="">
              <ImageSlider selectedColor={selectedColor} />
            </div>

            <img src={fore} alt="" className="absolute bottom-[25%] w-full" />
          </div>
        </div>

        <div className="flex border-2 rounded-2xl justify-center text-center gap-[7%] mx-[7%] py-[3rem]">
          <ul>
            <li>Dimensions L*W*H</li>
            <li>{evs.dimensions}</li>
          </ul>

          <ul>
            <li>Wheelbase</li>
            <li>{evs.wheelbase}</li>
          </ul>

          <ul>
            <li>Range</li>
            <li>{evs.ranges}&nbsp;km</li>
          </ul>

          <ul>
            <li>Gross Vehicle Weight</li>
            <li>{evs.grossVehicleWeight}&nbsp;kg</li>
          </ul>

          <ul>
            <li>Power</li>
            <li>{evs.power}&nbsp;kW</li>
          </ul>

          <ul>
            <li>Carrying Capacity</li>
            <li>{evs.carryingCapacity}</li>
          </ul>
        </div>

        {/* Section 1 */}
        <div className="mx-[7%] rounded-2xl border-2 my-[7%]">
          {/* Section 2 */}

          {/* Section 3 */}
          <div className="rounded-2xl flex justify-center text-[1.3rem] py-[3rem]">
            <center>
              <p className="py-[2rem]">Customer information</p>
              <div className="flex flex-col gap-4 justify-between w-12/12">
                <div className="w-[20rem]">
                  <input
                    className="outline-none bg-[#F3F3F3] border-0 rounded-2xl p-3 w-full"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Preferred Mode of Payment"
                  />
                </div>
                <PhoneInput
                  country={"ug"}
                  name="contact"
                  value={formData.phoneNumber}
                  onChange={handlePhoneChange}
                  inputClass="outline-none bg-[#F3F3F3] border-0 rounded-2xl p-3 w-full"
                  containerClass="w-full"
                  buttonClass="bg-[#F3F3F3]"
                  disableDropdown={true}
                  inputProps={{
                    maxLength: 16, // Example limit (adjust as needed)
                  }}
                />
                <div className="w-[20rem]">
                  <input
                    className="outline-none bg-[#F3F3F3] border-0 rounded-2xl p-3 w-full"
                    type="text"
                    name="text"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Address"
                  />
                </div>

                <div className="20rem">
                  <button
                    type="submit"
                    // onClick={openModal}
                    className="bg-[#000] items-start text-base w-8/12 text-white rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-red-700 mt-[2rem]"
                  >
                    Add Order
                  </button>

                  <ModalOrder
                    selectedColor={selectedColor.toLowerCase()}
                    isOpen={isModalOpen}
                    formData={formData}
                    onClose={() => setIsModalOpen(false)}
                    onConfirm={handleConfirm}
                  />
                </div>
              </div>
            </center>
          </div>
        </div>
      </form>

      <Footer />
    </Fragment>
  );
};

export default Order;
