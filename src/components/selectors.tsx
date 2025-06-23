import type { HtmlHTMLAttributes } from "react";
import type React from "react";

export const Selector: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={`flex items-center gap-2.5 w-full text-[16px]
     font-medium ${className}`}
      {...props}
    >
        <input type="checkbox" />
      {children}
    </div>
  );
};
