import React from "react";

interface CurrencyToggleProps {
  currency: "USD" | "ZAR";
  onChange: (currency: "USD" | "ZAR") => void;
}

export const CurrencyToggle: React.FC<CurrencyToggleProps> = ({
  currency,
  onChange,
}) => {
  return (
    <div className="inline-flex items-center bg-gray-200 rounded-full p-[2px] cursor-pointer select-none w-[90px] text-sm font-medium">
      <button
        type="button"
        className={`flex-1 text-center py-1 rounded-full transition-colors duration-300 ${
          currency === "USD"
            ? "bg-white text-blue-600 shadow"
            : "text-gray-600 hover:text-gray-800"
        }`}
        onClick={() => onChange("USD")}
      >
        USD
      </button>
      <button
        type="button"
        className={`flex-1 text-center py-1 rounded-full transition-colors duration-300 ${
          currency === "ZAR"
            ? "bg-white text-blue-600 shadow"
            : "text-gray-600 hover:text-gray-800"
        }`}
        onClick={() => onChange("ZAR")}
      >
        ZAR
      </button>
    </div>
  );
};
