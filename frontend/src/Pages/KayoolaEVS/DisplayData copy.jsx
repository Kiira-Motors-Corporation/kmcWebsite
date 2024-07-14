import { useEffect, useState, useContext } from "react";
import { OrderContext } from "./OrderContext";
import { FaTrashCan } from "react-icons/fa6";
import background from "./assets/images/background.png"

const FormDataDisplay = () => {
  const [allEntries, setAllEntries] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const { removeOrder } = useContext(OrderContext);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const storedEntries = localStorage.getItem("entries");
    if (storedEntries) {
      setAllEntries(JSON.parse(storedEntries));
    }
  }, []);

  const handleDelete = (index) => {
    setItemToDelete(index);
    setIsModalOpen(true);
  };

  const handleQuantityChange = (index, value) => {
    if (value < 1) {
      value = 1; // Ensure minimum quantity is 1
    }
    setQuantities({ ...quantities, [index]: value });
  };

  const confirmDelete = () => {
    const updatedEntries = allEntries.filter((_, i) => i !== itemToDelete);
    setAllEntries(updatedEntries);
    localStorage.setItem("entries", JSON.stringify(updatedEntries));
    setIsModalOpen(false);
    removeOrder();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setItemToDelete(null);
  };

  return (
    <div className="p-8 h-[100vh]" style={{backgroundImage:`url(${background})`,backgroundPosition:'center', objectFit:'cover'}}>
      <h1 className="text-2xl font-bold mb-4">EVS</h1>
      <div className="flex justify-around">
        {allEntries.length === 0 ? (
          <p>No form data</p>
        ) : (
          allEntries.map((entry, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-4">
              <p>
                <strong>Name:</strong> {entry.name}
              </p>
              <p>
                <strong>Email:</strong> {entry.email}
              </p>
              <p>
                <strong>Phone Number:</strong> {entry.phoneNumber}
              </p>
              <p>
                <strong>Phone Number:</strong> {entry.prodName}
              </p>
              <p>
                <strong>Capacities:</strong> {entry.evs?.passengers}
              </p>
              <div>
                <h3 className="font-bold mt-4">Selected Colors</h3>
                <p>
                  <strong>Exterior:</strong> {entry.colors?.exterior}
                </p>
                <p>
                  <strong>Interior:</strong> {entry.colors?.interior}
                </p>
                <p>
                  <strong>Trim:</strong> {entry.colors?.trim}
                </p>
              </div>
              {/* Add quantity input */}
              <input
                type="number"
                value={quantities[index] || 1} // Default to 1 if not set
                onChange={(e) =>
                  handleQuantityChange(index, parseInt(e.target.value))
                }
                min="1" // Minimum value allowed
                className="quantity-input"
              />
              <button
                className="text-red-600"
                onClick={() => handleDelete(index)}
              >
                <FaTrashCan />
              </button>
            </div>
          ))
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 transition-opacity duration-300 ease-out">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 ease-out transform scale-95">
            <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
            <p>Are you sure you want to delete this entry?</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={closeModal}
                className="bg-gray-500 text-white p-2 rounded-lg mr-2"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="bg-red-500 text-white p-2 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormDataDisplay;
