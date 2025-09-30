import {
  useEffect,
  useRef,
  type HtmlHTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "../../lib";
import gsap from "gsap";

type Config = HtmlHTMLAttributes<HTMLButtonElement> & {
  outtline?: "no" | "yes";
  children: ReactNode;
};

export function Button({
  outtline = "no",
  className,
  children,
  ...props
}: Config) {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = ref.current;
    if (!button) return;

    const ctx = gsap.context(() => {
      const handlePress = () => {
        gsap.to(button, { scale: 0.95, duration: 0.2, ease: "power2.out" });
      };

      const handleRelease = () => {
        gsap.to(button, { scale: 1, duration: 0.25, ease: "power2.out" });
      };

      button.addEventListener("mousedown", handlePress);
      button.addEventListener("mouseup", handleRelease);

      return () => {
        button.removeEventListener("mousedown", handlePress);
        button.removeEventListener("mouseup", handleRelease);
      };
    }, button);

    return () => ctx.revert();
  }, []);

  return (
    <button
      ref={ref}
      className={cn(
        "rounded-full cursor-pointer p-[11px]",
        outtline === "no" && "border-none bg-black text-white",
        outtline === "yes" && "border-1 border-[#C8C8C8]",

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
