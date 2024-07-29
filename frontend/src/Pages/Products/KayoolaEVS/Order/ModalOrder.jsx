// import { jsPDF } from "jspdf";

import {url} from "../../../../utils/backend"
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ModalOrder = ({ user, isOpen, formData, onClose, onConfirm }) => {
  // const { counter, incrementCounter, decrementCounter } = useCounter();
  const location = useLocation();
  const navigate = useNavigate();
 const { image, alt } = location.state || {};

  const handleClose = () => {
    navigate(-1); // Go back to the previous page
  };


  // const colorNameMap = {
  //   "#E28000": "Orange",
  //   "#C1C1C1": "Gray",
  //   "#404040": "Slate",
  //   "#F1F1F1": "Light Gray",
  //   "#643526": "Wood",
  // };

  // const generatePDF = () => {
  //   const doc = new jsPDF();
  //   doc.text(`Name: ${name}`, 10, 10);
  //   doc.text(`Email: ${email}`, 10, 20);
  //   doc.text(`Contact: ${phoneNumber}`, 10, 30);
  //   doc.text(`Exterior Color: ${colorNameMap[selectedExteriorColor]}`, 10, 40);
  //   doc.text(`Interior Color: ${colorNameMap[selectedInteriorColor]}`, 10, 50);
  //   doc.text(`Floor Trim: ${colorNameMap[selectedFloorTrim]}`, 10, 60);

  //   // doc.addImage(data.image, "JPEG", 10, 30, 50, 50);
  //   // doc.text(`Name: ${name}`, 10, 20);

  //   const pdfData = doc.output("datauristring");
  //   // console.log(pdfData);
  //   sendPDFToServer(pdfData);
  // };

  if (!isOpen) return null;

  // const sendPDFToServer = (pdfData) => {
  //   axios
  //     .post("http://localhost:3000/api/send-email", { pdfData })
  //     .then((response) => {
  //       console.log("Email sent successfully!", response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error sending email:", error);
  //     });
  // };



  return (
    <div className="fixed inset-0 font-poppins text-base bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white px-[14%] p-6 rounded-lg shadow-lg">

        <h2 className="text-xl font-bold mb-4">Confirm Your Order</h2>
        <div className="mb-4 text-left">
          <img className=" h-32" src={image} alt={alt} />
          <div className="font-medium flex gap-4 items-center">Name:<span className="text-sm font-normal">{formData.accName}</span></div>
          {/* <p><strong>Email:</strong> {formData.email}</p> */}
          <div>
            <p><strong>Colors:</strong></p>
            <p>Exterior Color: <span className="text-sm">{formData.colors.exterior_Color}</span></p>
            <p>Interior Color: <span className="text-sm">{formData.colors.interior_Color}</span></p>
            <p>Floor Trim: <span className="text-sm">{formData.colors.floor_Trim}</span></p>
          </div>
          <div>
            <p><strong>Capacities:</strong></p>
            <p>Capacity: <span className="text-sm">{formData.capacities.capacity}</span></p>
          </div>
          {/* <p><strong>User ID:</strong> {formData.userId}</p> */}
        </div>
        <div className="flex justify-end">
          <button onClick={onClose} className="mr-2 bg-gray-200 px-4 py-2 rounded">Cancel</button>
          <button onClick={onConfirm} className="bg-red-500 text-white px-4 py-2 rounded">Confirm</button>
          <button className="absolute top-2 right-2 text-gray-500" onClick={handleClose}>X</button>
        </div>
      </div>
    </div>
  );
};

export default ModalOrder;
