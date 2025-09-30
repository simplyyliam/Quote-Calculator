import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../../lib";

type TextProps = HTMLAttributes<HTMLHeadingElement> & {
  opacity?: "100" | "50";
  weight?: "m" | "sb" | "b" | "r";
  children: ReactNode;
};

export function Text({
  opacity = "100",
  weight = "r",
  className,
  children,
  ...props
}: TextProps) {

  return (
    <h1
      className={cn(
        "font-normal",
        //Opacity levels
        opacity === "100" && "opacity-100",
        opacity === "50" && "opacity-50",
        //Font weight
        weight === "r" && "font-normal",
        weight === "m" && "font-medium",
        weight === "sb" && "font-semibold",
        weight === "b" && "font-bold",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
