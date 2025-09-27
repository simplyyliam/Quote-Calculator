import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib";

type Config = HTMLAttributes<HTMLDivElement> & {
  size?: "sm" | "md" | "lg" | "xl";
  children: ReactNode;
};

export function DisplayPicture({
  size = "md",
  children,
  className,
  ...props
}: Config) {


  return (
    <div
      className={cn(
        size === "sm" && "w-[30px] h-[30px]",
        size === "md" && "w-[56px] h-[56px]",
        size === "lg" && "w-[70px] h-[70px]",
        size === "xl" && "w-[110px] h-[110px]",

        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
