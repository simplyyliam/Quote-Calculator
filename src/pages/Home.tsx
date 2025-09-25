import { RightColumn, LeftColumn, SummaryCard } from "../components";
import { Card, SectionWrapper } from "../components/ui";
import { Heading } from "../components/ui/typography";

function Home() {
  return (
    <div className="flex flex-col items-center px-35 gap-4 w-full h-full">
      <Card className="px-5 py-3.5">
        <div className="flex items-center justify-between">
          <Heading>Currency</Heading>
        </div>
      </Card>
      <SectionWrapper className="gap-4">
        <RightColumn />
        <LeftColumn />
      </SectionWrapper>
      <SummaryCard />
    </div>
  );
}

export default Home;
