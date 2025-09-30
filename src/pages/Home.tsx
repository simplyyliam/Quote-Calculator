import { SummaryCard, QuoteModal, QuouteGrid,  } from "../components";
import { SectionWrapper } from "../components/ui";
import { useToggle } from "../store";

function Home() {
  const { toggle, setToggle } = useToggle();

  return (
    <div className="flex flex-col items-center w-full h-full px-4 sm:px-8 md:px-16 lg:px-35 gap-4 sm:gap-6 md:gap-8">
      <SectionWrapper className="w-full max-w-[1400px] gap-4 sm:gap-6 md:gap-8">
        <QuouteGrid />
      </SectionWrapper>

      {/* Summary always centered */}
        <SummaryCard onclick={() => setToggle()} />

      {/* Modal overlays on all sizes */}
      {toggle && <QuoteModal />}
    </div>
  );
}

export default Home;
