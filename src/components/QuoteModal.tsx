import React from "react";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export const QuoteModal: React.FC<ModalProps> = ({ onClose, children }) => {

  return (
    <div
      className="fixed inset-0 bg-black/25 backdrop-blur-md bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="quote-modal bg-white rounded-[20px] w-[35em] p-6 shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
        style={{
          msOverflowStyle: "none",
          scrollbarWidth: "none"
        }}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
          aria-label="Close modal"
        >
          &#10005;
        </button>
        {children}
      </div>
    </div>
  );
};

