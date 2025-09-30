import type { HtmlHTMLAttributes } from "react";

export const SectionWrapper: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <div className={`hide-scrollbar flex w-full overflow-y-auto ${className}`}{...props}>{children}</div>
    )
}