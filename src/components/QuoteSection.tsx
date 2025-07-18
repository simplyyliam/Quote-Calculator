import type { HtmlHTMLAttributes } from "react";


export const QuoteSection: React.FC<HtmlHTMLAttributes<HTMLTableSectionElement>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <section className={`p-3.5 ${className}`} {...props}>{children}</section>
    )
}