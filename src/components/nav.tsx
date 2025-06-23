import type { HtmlHTMLAttributes } from "react";
import type React from "react";

export const NavBar: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={`flex items-center justify-center w-full p-5 absolute top-5
     font-medium ${className}`} {...props}>
      {children}
    </div>
  );
};
