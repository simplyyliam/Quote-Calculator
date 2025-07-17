import type { ButtonHTMLAttributes, ReactNode } from "react";
import React from "react";

interface BoxSelectorProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected?: boolean;
  children?: ReactNode;
}

export const BoxSelector: React.FC<BoxSelectorProps> = ({
  children,
  className = "",
  isSelected = false,
  ...props
}) => {
  return (
    <button
      className={`flex flex-col items-center justify-center gap-2 w-[140px] h-[79px] rounded-xl
        border border-black/20
        transition-all duration-200 ease-in-out cursor-pointer
        ${
          isSelected
            ? "bg-gray-100 border-gray-400 shadow-md"
            : "hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm"
        }
        ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
