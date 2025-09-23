
import { RightColumn, LeftColumn } from "../components"
import { Card, SectionWrapper } from "../components/ui"
import { Heading} from "../components/ui/typography"
function Home() {
  return (
    <div className="flex flex-col items-center px-35 gap-4 w-full h-full">
      <Card className="px-5 py-3.5">
        <Heading>Currency</Heading>
      </Card>
      <SectionWrapper className="gap-4">
        <RightColumn />
        <LeftColumn />
      </SectionWrapper>
    </div>
  )
}

export default Home