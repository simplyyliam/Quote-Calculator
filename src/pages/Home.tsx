
import { RightColumn, LeftColumn, SummaryCard, QuoteModal } from "../components";
import { SectionWrapper } from "../components/ui";
import { useToggle } from "../store";
function Home() {
  const { toggle, setToggle } = useToggle()
  return (
    <div className="flex flex-col items-center px-35 gap-4 w-full h-full">
      <SectionWrapper className="gap-4">
        <RightColumn />
        <LeftColumn />
      </SectionWrapper>
      <SummaryCard onclick={() => setToggle()}/>

      {toggle && (
        <QuoteModal />
      )}
    </div>
  );
}

export default Home;
