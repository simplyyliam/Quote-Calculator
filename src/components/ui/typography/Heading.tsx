import type { HtmlHTMLAttributes } from "react";
import type React from "react";

export const Heading: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h1 className={`text-xl font-medium ${className}`} {...props}>
      {children}
    </h1>
  );
};
