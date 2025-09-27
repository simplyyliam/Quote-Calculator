import { useEffect, useRef } from "react";
import { useTotal } from "../hooks";
import { Text } from "./ui/typography";
import { gsap } from "gsap";
import { useCalculator } from "../store";

interface props {
  onclick: () => void;
}

export default function SummaryCard({ onclick }: props) {
  const { total } = useTotal();
  const { finalValue } = useCalculator();
  const SummaryCardRef = useRef<HTMLButtonElement>(null);

useEffect(() => {
  const card = SummaryCardRef.current;
  if (!card) return;

  const ctx = gsap.context(() => {
    if (finalValue > 0) {
      gsap.fromTo(
        card,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" }
      );
    } else {
      gsap.to(card, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: "power3.inOut",
      });
    }

    const handlePress = () => {
      gsap.to(card, { scale: 0.95, duration: 0.2, ease: "power2.out" });
    };

    const handleRelease = () => {
      gsap.to(card, { scale: 1, duration: 0.25, ease: "power2.out" });
    };

    card.addEventListener("mousedown", handlePress);
    card.addEventListener("mouseup", handleRelease);

    return () => {
      card.removeEventListener("mousedown", handlePress);
      card.removeEventListener("mouseup", handleRelease);
    };
  }, card);

  return () => ctx.revert();
}, [finalValue]);


  return (
    <button
      onClick={onclick}
      ref={SummaryCardRef}
      className="flex items-center justify-between p-2 rounded-[20px] bg-black text-white cursor-pointer absolute bottom-10 opacity-0 scale-0"
    >
      <div className="flex flex-col items-start px-2.5 py-3.5">
        <Text level={2}>Your Estimated Monthly Summary</Text>
        <Text level={1} opacity="50">
          Based on your selections
        </Text>
      </div>
      <div className="flex flex-col text-end px-2.5 py-3.5">
        <Text level={"xl"}>${total}</Text>
        <Text level={1} opacity="50">
          10% Discount applied
        </Text>
      </div>
    </button>
  );
}
