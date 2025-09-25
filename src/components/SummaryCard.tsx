import { useEffect, useRef, useState } from "react";
import { useTotal } from "../hooks";
import { Text } from "./ui/typography";
import { gsap } from "gsap";
import { useCalculator } from "../store";

export default function SummaryCard() {
  const { total } = useTotal();
  const { finalValue } = useCalculator();
  const SummaryCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = SummaryCardRef.current;
    if (!card) return;

    if (finalValue > 0) {
      gsap.to(card, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power3.out",
      });
    } else {
      gsap.to(card, {
        opacity: 0,
        scale: 0,
        duration: 0.3,
        ease: "power3.out",
      });
    }
  }, [finalValue]);

  return (
    <div
      ref={SummaryCardRef}
      className="flex items-center justify-between p-2 rounded-[20px] bg-black text-white absolute bottom-10 opacity-0 scale-0"
    >
      <div className="flex flex-col px-2.5 py-3.5">
        <Text level={3}>Your Estimated Monthly Summary</Text>
        <Text level={4} opacity="50">
          Based on your selections
        </Text>
      </div>
      <div className="flex flex-col text-end px-2.5 py-3.5">
        <Text level={"xl"}>${total}</Text>
        <Text level={4} opacity="50">
          10% Discount applied
        </Text>
      </div>
    </div>
  );
}
