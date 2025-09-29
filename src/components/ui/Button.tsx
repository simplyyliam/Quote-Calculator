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
  bg?: "no" | "yes";
  children: ReactNode;
};

export function Button({
  outtline = "no",
  bg = "yes",
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
        "p-4 rounded-full w-[217px] h-[70px] cursor-pointer",
        outtline === "no" && "border-none",
        outtline === "yes" && "border-1 border-[#C8C8C8]",

        bg === "yes" && "bg-black text-white",
        bg === "no" && "bg-none text-black",

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
