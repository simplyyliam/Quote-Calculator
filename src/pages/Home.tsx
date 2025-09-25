import { RightColumn, LeftColumn } from "../components";
import { Card, SectionWrapper } from "../components/ui";
import { useCalculator } from "../store";
import { Heading, Text } from "../components/ui/typography";
function Home() {
  const  { finalValue } = useCalculator()
  return (
    <div className="flex flex-col items-center px-35 gap-4 w-full h-full">
      <Card className="px-5 py-3.5">
        <div className="flex items-center justify-between">
          <Heading>Currency</Heading>
          <Text level={1} weight="sb" className="w-fit">{finalValue}</Text>
        </div>
      </Card>
      <SectionWrapper className="gap-4">
        <RightColumn />
        <LeftColumn />
      </SectionWrapper>
    </div>
  );
}

export default Home;
