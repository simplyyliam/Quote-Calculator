import { Meta } from "../lib";
import { LightBulb } from "./Icons";
import { SectionWrapper, Card, CardIcon } from "./ui";
import { Text } from "./ui/typography";

function LeftColumn() {
  return (
    <SectionWrapper className="flex-col gap-4">
      {Meta.filter((m) => m.id >= 3).map((m) => (
        <Card>
          <div className="flex items-center w-full px-2.5 py-3.5">
            <div className="flex items-center gap-2">
              <CardIcon
                icon={<LightBulb className="text-slate-500" size={24} />}
                alt="Strategy & Reposting"
              />

              <div key={m.id} className="flex flex-col gap-[4px]">
                <Text level={2}>{m.title}</Text>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </SectionWrapper>
  );
}

export default LeftColumn;
