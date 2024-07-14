import { Fragment, useEffect } from "react";
import { useState } from "react";
import jsPDF from "jspdf";
import ColorOption from "./ColorOption"; // Ensure correct import path
import Modal from "../../Components/Modal";
import PDFModal from "./Modal"; // Ensure correct import path for PDFModal
import carousel from "../../assets/images/order/carousel.png";
import back from "../../assets/images/order/back.png";
import fore from "../../assets/images/order/fore.png";
import Footer from "../../Components/ui/Footer";
import { useAuth } from "../../Components/AuthContext";
import axios from "axios";
import { useParams } from "react-router-dom";
import ModalOrder from "./ModalOrder";
import { CapacityOption } from "./ColorOption";
import PhoneInput from "react-phone-input-2";
import { useCounter } from "../Cart/CounterContext";

const Order = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPDFModal, setShowPDFModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfContent, setPdfContent] = useState(null);
  const [selectedExteriorColor, setSelectedExteriorColor] = useState("");
  const [selectedInteriorColor, setSelectedInteriorColor] = useState("");
  const [selectedFloorTrim, setSelectedFloorTrim] = useState("");
  const { user } = useAuth();
  const [evs, setEVS] = useState([]);
  const { id } = useParams();
  const [passengers, setPassengers] = useState("");
  const { counter, incrementCounter, decrementCounter } = useCounter();


  // user info
  const [name, setName] = useState(undefined);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");

  const [data, setData] = useState({
    color: "Red",
    capacity: "a",
    image: carousel,
  });

  useEffect(() => {
    fetchEVS();
  }, [id]);

  useEffect(() => {
    handlePassengers();
    handleExteriorColorSelect();
    handleInteriorColorSelect();
    handleFloorTrimSelect();
  }, []);

  const openModal = () => {
    if (
      passengers === undefined ||
      selectedExteriorColor === undefined ||
      selectedInteriorColor === undefined ||
      selectedFloorTrim === undefined ||
      name === undefined ||
      phoneNumber === undefined ||
      email === undefined
    ) {
      setIsModalOpen(false);
      alert("Please select all elements before proceeding.");
    } else {
      setIsModalOpen(true);
      // console.log(passengers);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fetchEVS = async () => {
    if (!user) {
      alert("You need to log in ");
      return;
    }

    try {
      const response = await axios.get(`http://localhost:3000/evs/${id}`);
      setEVS(response.data);
    } catch (error) {
      console.error("Error fetching item:", error);
    }
  };

  const colorNameMap = {
    "#E28000": "Orange",
    "#C1C1C1": "Gray",
    "#404040": "Slate",
    "#F1F1F1": "Light Gray",
    "#643526": "Wood",
  };

  const handleExteriorColorSelect = (color) => {
    setSelectedExteriorColor(color);
  };

  const handlePassengers = (passenger) => {
    setPassengers(passenger);
    // console.log(passenger);
  };

  const handleInteriorColorSelect = (color) => {
    setSelectedInteriorColor(color);
  };

  const handleFloorTrimSelect = (color) => {
    setSelectedFloorTrim(color);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // console.log(name);

  const generatePdf = () => {
    const doc = new jsPDF();
    doc.text(`Exterior Color: ${colorNameMap[selectedExteriorColor]}`, 10, 10);
    doc.text(`Interior Color: ${colorNameMap[selectedInteriorColor]}`, 10, 20);
    doc.text(`Floor Trim: ${colorNameMap[selectedFloorTrim]}`, 10, 30);

    const pdfContent = doc.output("blob");
    setPdfContent(pdfContent);
    setShowPDFModal(true);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("file", pdfContent, "quote.pdf");
    formData.append("email", "bamujonah@gmail.com"); // Replace with the actual email address

    const response = await fetch("/send-email", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      console.log("Email sent successfully");
    } else {
      console.error("Failed to send email");
    }
  };

  return (
    <Fragment>
      {/* Carousel */}
      <div
        style={{
          backgroundImage: `url(${back})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
        }}
        className="h-[100vh] relative z-[-1] w-12/12 font-poppins"
      >
        <span className="h-full flex flex-col items-center absolute w-full z-[4] top-[4rem]">
          <p className="text-3xl font-bold w-11/12 md:w-full text-center text-white py-8">
            {evs.name}
          </p>
        </span>
        <img
          src={carousel}
          alt=""
          className="relative z-[1] left-[6%] md:top-[-18%] top-[50%] w-11/12 overflow-hidden md:bottom-[25%]"
        />
        <img src={fore} alt="" className="absolute bottom-[25%] w-full" />
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
      <div className="mx-[7%] rounded-2xl border-2 my-[12.5%]">
        <div className="w-full text-center font-bold text-3xl py-[7%]">
          Create your custom experience
        </div>
        <div className="md:flex justify-evenly  text-lg">
          <div className="  rounded-2xl cursor-pointer">
            <div className="py-[1.5rem]   rounded-2xl cursor-pointer text-center ">
              <p
                onClick={() => setSelectedExteriorColor(undefined)}
                className="text-center font-medium pb-[1rem]"
              >
                Exterior paint
              </p>
              <div className="flex items-center ">
                <ColorOption
                  title="Orange"
                  color="#E28000"
                  isSelected={selectedExteriorColor === "#E28000"}
                  onSelect={handleExteriorColorSelect}
                />
                <ColorOption
                  title="Gray"
                  color="#C1C1C1"
                  isSelected={selectedExteriorColor === "#C1C1C1"}
                  onSelect={handleExteriorColorSelect}
                />
                <ColorOption
                  title="Slate"
                  color="#404040"
                  isSelected={selectedExteriorColor === "#404040"}
                  onSelect={handleExteriorColorSelect}
                />
              </div>
            </div>
          </div>

          <div className="  rounded-2xl cursor-pointer">
            <div className="py-[1.5rem] rounded-2xl cursor-pointer text-center">
              <p
                onClick={() => setSelectedInteriorColor(undefined)}
                className="text-center font-medium pb-[1rem]"
              >
                Interior paint
              </p>
              <div className="flex items-center justify-center">
                <ColorOption
                  title="Orange"
                  color="#E28000"
                  isSelected={selectedInteriorColor === "#E28000"}
                  onSelect={handleInteriorColorSelect}
                />
                <ColorOption
                  title="Gray"
                  color="#C1C1C1"
                  isSelected={selectedInteriorColor === "#C1C1C1"}
                  onSelect={handleInteriorColorSelect}
                />
                <ColorOption
                  title="Slate"
                  color="#404040"
                  isSelected={selectedInteriorColor === "#404040"}
                  onSelect={handleInteriorColorSelect}
                />

                {/* Add more ColorOption components as needed */}
              </div>
            </div>
          </div>

          <div className=" rounded-2xl cursor-pointer">
            <div className="py-[1.5rem]  rounded-2xl cursor-pointer text-center">
              <p
                onClick={() => setSelectedFloorTrim(undefined)}
                className="text-center font-medium pb-[1rem]"
              >
                Floor trim
              </p>
              <div className="flex items-center justify-center">
                <ColorOption
                  title="Slate"
                  color="#404040"
                  isSelected={selectedFloorTrim === "#404040"}
                  onSelect={handleFloorTrimSelect}
                />
                <ColorOption
                  title="Wood"
                  color="#643526"
                  isSelected={selectedFloorTrim === "#643526"}
                  onSelect={handleFloorTrimSelect}
                />
                <ColorOption
                  title="Light Gray"
                  color="#F1F1F1"
                  isSelected={selectedExteriorColor === "#F1F1F1"}
                  onSelect={handleFloorTrimSelect}
                />
                {/* Add more ColorOption components as needed */}
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="rounded-2xl flex justify-center text-lg">
          <center>
            <p className="py-[1rem]">Capacity (Seating/Standing)</p>
            <div className="flex justify-between">
              <CapacityOption
                name="90 (42/48)"
                passenger="90"
                onSelect={handlePassengers}
              />

              <CapacityOption
                name="70 (32/38)"
                passenger="70"
                onSelect={handlePassengers}
              />
            </div>
          </center>
        </div>

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
                  value={name}
                  onChange={handleNameChange}
                  placeholder="Name/Organisation"
                />
              </div>
              <PhoneInput
                country={"ug"}
                name="contact"
                value={phoneNumber}
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
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Email"
                />
              </div>



              <div className="20rem">
                <button
                  onClick={generatePdf}
                  className="bg-[#000] items-start text-base w-8/12 text-white rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-red-700 mt-[2rem]"
                >
                  Get Quote
                </button>
                <button
                  onClick={openModal}
                  className="bg-[#000] items-start text-base w-8/12 text-white rounded-full py-2 px-[30px] focus:outline-none focus:ring focus:ring-red-700 mt-[2rem]"
                >
                  Show Details
                </button>
                <ModalOrder
                  isOpen={isModalOpen}
                  onClose={closeModal}
                  data={data}
                  evs={evs}
                  passengers={passengers}
                  selectedExteriorColor={selectedExteriorColor}
                  selectedInteriorColor={selectedInteriorColor}
                  selectedFloorTrim={selectedFloorTrim}
                  name={name}
                  phoneNumber={phoneNumber}
                  email={email}
                />
                <div className="absolute z-[999]">
                  {showPDFModal && (
                    <PDFModal onClose={() => setShowPDFModal(false)}>
                      <div className="p-4 ">
                        <p>PDF Preview</p>
                        <img src={carousel} alt="" className="w-32" />
                        Insert iframe or other preview component here
                        <iframe
                          src={URL.createObjectURL(pdfContent)}
                          width="100%"
                          height="300px"
                          title="PDF Preview"
                        ></iframe>
                        <img src={URL.createObjectURL(pdfContent)} alt="" />
                        <button
                          className="bg-green-500 text-white px-4 py-2 rounded"
                          onClick={handleSubmit}
                        >
                          Submit
                        </button>
                        <button
                          className="bg-red-500 text-white px-4 py-2 rounded"
                          onClick={() => setShowPDFModal(false)}
                        >
                          Cancel
                        </button>
                      </div>
                    </PDFModal>
                  )}
                </div>

                <Modal
                  isVisible={showModal}
                  onClose={() => {
                    setShowModal(false);
                  }}
                />
              </div>
            </div>
          </center>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Order;
