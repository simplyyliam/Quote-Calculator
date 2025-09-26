import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useToggle } from "../store";

export default function QuoteModal() {
  const QuoteModalRef = useRef<HTMLDivElement | null>(null);
  const { setToggle } = useToggle()
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
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="flex flex-col w-[95%] h-[95%] bg-white items-center justify-center">
        This is the Quote Modal
        <button onClick={() => setToggle()}>Go Back</button>
      </div>
    </div>
  );
}
