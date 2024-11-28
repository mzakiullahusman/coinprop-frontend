import React from "react";

const MessageModal = ({ message, closeModal }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={closeModal}
    >
      <div
        className="bg-[#151B19] rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#1C1D20] px-4 py-3 border-b border-gray-700">
          <h3 className="text-lg leading-6 font-medium text-white">
            Withdrawal
          </h3>
        </div>
        {/* Modal Content */}
        <div className="px-4 py-5 sm:p-6">
          <p className="text-md text-gray-300 text-center">{message}</p>
        </div>
        {/* Modal Actions */}
        <div className="bg-[#1C1D20] px-4 py-3 flex justify-end">
          <button
            type="button"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-[#06b6d4] border border-transparent rounded-md hover:bg-[#22d3ee] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#22d3ee]"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
