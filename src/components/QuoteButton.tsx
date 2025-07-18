import type { HtmlHTMLAttributes } from "react";

export const QuoteButton: React.FC<HtmlHTMLAttributes<HTMLButtonElement>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <button className={`flex items-center justify-center px-6 py-3.5 font-medium text-[15px] border-1 border-[#608ff5] w-full h-[50px] rounded-lg cursor-pointer hover:bg-[#4A80F5] hover:text-white transition-all ease-linear ${className}`} {...props}>{children}</button>
    )
}