import type { HtmlHTMLAttributes } from "react";
import type React from "react";

export const Box: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-8 h-full ${className}`} {...props}>
      {children}
    </div>
  );
};
