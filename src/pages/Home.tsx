import { RightColumn, LeftColumn, SummaryCard } from "../components";
import { SectionWrapper } from "../components/ui";
function Home() {
  return (
    <div className="flex flex-col items-center px-35 gap-4 w-full h-full">
      <SectionWrapper className="gap-4">
        <RightColumn />
        <LeftColumn />
      </SectionWrapper>
      <SummaryCard />
    </div>
  );
}

export default Home;
