
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
            className={`flex flex-col items-center justify-center gap-2 w-[140px] h-[79px] border-1 border-black/50 rounded-xl hover:bg-blue-200/25  transition-all ease-linear cursor-pointer ${
                isSelected ? "bg-blue-200/25 border-blue-500" : ""
            } ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};