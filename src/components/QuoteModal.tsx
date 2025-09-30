import gsap from "gsap";
import { useEffect, useRef } from "react";
import { SectionWrapper } from "./ui";
import HeaderCard from "./quote/HeaderCard";
import QuoteBlock from "./quote/QuoteBlock";
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
      <div className="flex flex-col xl:flex-row w-full h-full xl:w-[95%] xl:h-[95%] p-[15px] gap-4 bg-[#f0f0f2] items-center justify-center">
        <SectionWrapper className="flex items-center justify-center h-1/3
         xl:h-full">
          <HeaderCard />
        </SectionWrapper>
        <SectionWrapper className="flex-col items-center h-full p-2.5 xl:p-6.5 relative bg-white rounded-4xl">
          <QuoteBlock />
          <QuoteSummary />
        </SectionWrapper>
      </div>
    </div>
  );
}
