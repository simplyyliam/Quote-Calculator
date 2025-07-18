import type { HtmlHTMLAttributes } from "react";

export const QuoteButton: React.FC<HtmlHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`flex items-center justify-center px-6 py-3.5 font-medium text-[15px] border border-[#608ff5] h-[50px] rounded-lg cursor-pointer hover:bg-[#4A80F5] hover:text-white transition-all ease-linear max-w-[200px] min-w-[120px] mx-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
