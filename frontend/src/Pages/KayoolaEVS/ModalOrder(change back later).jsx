
import { jsPDF } from 'jspdf';
import emailjs from 'emailjs-com';

const ModalOrder = ({ isOpen, onClose, data, evs, passengers,selectedExteriorColor,selectedInteriorColor,selectedFloorTrim,name }) => {

  const capacity = "test"
  const sendEmail = (pdfData) => {
    const templateParams = {
      to_name: 'Kiira Motors',
      from_name: 'Jonathan',
      message: 'Here is the product information PDF.',
      pdf: pdfData,
    };

    emailjs.send('service_ff8r68d', 'template_duu0o95', templateParams, 'FOHiZtlGuJIrVuyAn')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (error) => {
        console.log('FAILED...', error);
      });
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    // doc.text(`Color: ${data.color}`, 10, 10);
    // doc.text(`Name: ${data.capacity}`, 10, 20);
    // doc.addImage(data.image, 'JPEG', 10, 30, 50, 50);
    doc.text(`Name: Hello`, 10, 20);


    const pdfData = doc.output('datauristring');
    sendEmail(pdfData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center ">
      <div className="bg-white px-[7rem] p-4 rounded-lg shadow-lg w-1/2">
        <button onClick={onClose} className="float-right text-gray-500 hover:text-gray-700">
          &times;
        </button>
        <h2 className="text-xl mb-4">Kayoola City BUS</h2>
        <img src={data.image} alt="Product" className="w-[15rem] border" />


        <div className='flex text-base justify-between gap-[7%]'>
        <p>{evs.name}</p>
        <p>{passengers}&nbsp;Passengers</p>
        <p>{evs.ranges}&nbsp;km Range</p>
        </div>
        <div className='text-base flex justify-between'><p>Capacity(Seating/Standing) </p> <p>{evs.carryingCapacity}</p></div>

        <div className='text-base flex  py-2 '><p className='w-4/12 text-left'>Exterior Paint </p><div className={`w-10 h-10 shadow-sm rounded first-line: bg-[${selectedExteriorColor}]`}></div></div>
        <div className='text-base  flex py-2'><p className='w-4/12 text-left'>Interior Paint </p><div className={`w-10 h-10 rounded bg-[${selectedInteriorColor}]`}></div></div>
                <div className='text-base flex py-2'><p className='w-4/12 text-left'>Floor Trim </p><div className={`w-10 h-10 rounded bg-[${selectedFloorTrim}]`}></div></div>

<p>{name}</p>
        <button
          onClick={generatePDF}
          className="bg-black text-base text-white py-2 px-8 rounded-full hover:bg-green-700 mt-4"
        >
          Proceed to order
        </button>
      </div>
    </div>
  );
};

export default ModalOrder;
