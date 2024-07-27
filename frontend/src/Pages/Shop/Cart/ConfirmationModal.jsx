import React, { useEffect, useState } from 'react';

const ConfirmationModal = ({ isVisible, onConfirm, onCancel, message }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShowModal(true);
    } else {
      // Delay hiding the modal to allow the closing animation
      setTimeout(() => setShowModal(false), 300);
    }
  }, [isVisible]);

  // Handle the backdrop click to close the modal
  const handleBackdropClick = () => {
    onCancel(); // Invoke onCancel callback when clicking outside the modal
  };

  // If showModal is false, return null to prevent rendering the modal
  if (!showModal) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={handleBackdropClick}>
      <div className={`bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 ${showModal ? 'translate-y-0' : '-translate-y-full'}`} onClick={(e) => e.stopPropagation()}>
        <p className="text-lg mb-4">{message}</p>
        <div className="flex justify-end">
          <button onClick={onCancel} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2 hover:bg-gray-400">Cancel</button>
          <button onClick={onConfirm} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
