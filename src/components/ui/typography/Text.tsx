
import type { HTMLAttributes, JSX, ReactNode } from "react";
import { cn } from "../../../lib";

type TextProps = HTMLAttributes<HTMLHeadingElement> & {
  level?: 1 | 2 | 3 | 4;
  opacity?: "100" | "50"
  children: ReactNode;
};

export function Text({ level = 1, opacity = "100",className, children, ...props }: TextProps) {
  const Tag = (`h${level}` as keyof JSX.IntrinsicElements) as React.ElementType;

  return (
    <Tag
      className={cn(
        "font-normal",
        //Text size levels
        level === 1 && "text-lg",// 18px
        level === 2 && "text-[16px]",
        level === 3 && "text-[14px]",
        level === 4 && "text-[12px]", 
        //Opacity levels
        opacity === "100" && "opacity-100",
        opacity === "50" && "opacity-50",

        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
