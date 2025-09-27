import gsap from "gsap";
import { useEffect, useRef } from "react";
import { SectionWrapper } from "./ui";
import HeaderCard from "./quote/HeaderCard";
import QuoteBlock from "./quote/QuoteBlock";
import { Text } from "./ui/typography";
import { useTotal } from "../hooks";

export default function QuoteModal() {
  const QuoteModalRef = useRef<HTMLDivElement | null>(null);
  const { total } = useTotal();

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
          <div className="absolute bottom-0 flex flex-col w-full h-auto p-[15px] gap-2.5 bg-white">
            <div className="w-full flex-col">
              <Text level={4} weight="m">
                Quote Summary
              </Text>

              <div className="flex items-center justify-between">
                <Text level={3} opacity="50" className="px-2.5 py-1.5">
                  Subtotal
                </Text>
                <Text level={3} weight="m">
                  ${total}.00
                </Text>
              </div>
              <div className="flex items-center justify-between">
                <Text level={3} className="px-2.5 py-1.5 text-red-600">
                  Dicount
                </Text>
                <Text level={3} className="text-red-600">
                  ${total}.00
                </Text>
              </div>
            </div>
            <hr />
            <div className="flex items-center justify-between">
              <Text level={4} weight="m">
                Total
              </Text>
              <Text level={4} weight="m">
                ${total}.00
              </Text>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
}
