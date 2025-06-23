import type { HtmlHTMLAttributes } from "react";
import type React from "react";

export const CustomButton: React.FC<HtmlHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button className={`flex items-center justify-center bg-white text-black cursor-pointer py-[9px] rounded-md hover:bg-stone-200 hover:-translate-y-0.5  transition-all ease-linear ${className}`} {...props}>
      {children}
    </button>
  );
};
