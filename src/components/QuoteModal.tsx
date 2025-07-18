import type { HtmlHTMLAttributes } from "react";

export const QuoteResults: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={`${className}`} {...props}>{children}</div>
  )
}