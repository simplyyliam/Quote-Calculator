import { RightColumn, LeftColumn } from "../components";
import { Card, SectionWrapper } from "../components/ui";
import { Heading, Text } from "../components/ui/typography";
import { useTotal } from "../hooks";
function Home() {
  const  { total } = useTotal()
  return (
    <div className="flex flex-col items-center px-35 gap-4 w-full h-full">
      <Card className="px-5 py-3.5">
        <div className="flex items-center justify-between">
          <Heading>Currency</Heading>
          <Text level={1} weight="sb" className="w-fit">{total}</Text>
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
