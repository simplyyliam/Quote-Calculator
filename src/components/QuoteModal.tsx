import gsap from "gsap";
import { useEffect, useRef } from "react";
import { SectionWrapper } from "./ui";
import HeaderCard from "./quote/HeaderCard";
import QuoteBlock from "./quote/QuoteBlock";
import { Text } from "./ui/typography";
import { QuoteSummary } from "./quote";

export default function QuoteModal() {
  const QuoteModalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const Modal = QuoteModalRef.current;
    if (!Modal) return;

    gsap.to(Modal, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power3.out",
    });
  }, []);

  return (
    <div
      ref={QuoteModalRef}
      className="fixed inset-0 flex items-center justify-center opacity-0 scale-0"
    >
      <div className="flex w-[95%] h-[95%] bg-white items-center justify-center">
        <SectionWrapper className="items-center justify-center h-full">
          <HeaderCard />
        </SectionWrapper>
        <SectionWrapper className="flex-col items-center h-full p-6.5 relative">
          <Text level={"lg"} weight="sb">
            Quote Overview
          </Text>
          <QuoteBlock />
          <QuoteSummary />
        </SectionWrapper>
      </div>
    </div>
  );
}
