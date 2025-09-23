import { type HtmlHTMLAttributes } from "react";
import type React from "react";

export const Card: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={`flex flex-col w-full h-auto bg-white rounded-2xl p-2.5 gap-2.5 ${className}`} {...props}>
      {children}
    </div>
  );
};
