import React from 'react';

const PDFModal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded">
        <button className="absolute top-0 right-0 m-4" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default PDFModal;
