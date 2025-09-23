import type { HtmlHTMLAttributes } from "react";

export const SectionWrapper: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <div className={`flex w-full h-full ${className}`}{...props}>{children}</div>
    )
}