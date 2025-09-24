import { Meta } from "../lib";
import { SectionWrapper, Card } from "./ui";
import { Text } from "./ui/typography";

function RightColumn() {
  return (
    <SectionWrapper className="flex-col gap-4">
      {Meta.filter((m) => m.id <= 2).map((m) => (
        <Card>
          {/* Header section */}
          <div className="flex items-center w-full px-2.5 py-3.5">
            <div className="flex items-center gap-2">
              {/* <CardIcon
                icon={<LightBulb className="text-slate-500" size={24} />}
                alt="Strategy & Reposting"
              /> */}

              <div key={m.id} className="flex flex-col gap-[4px]">
                <Text level={2} weight="m">
                  {m.title}
                </Text>
                <Text level={3} opacity="50">
                  {m.Subtitle}
                </Text>
              </div>
            </div>
          </div>
          {m.options?.map((opt) => (
            <label key={opt.id} className="flex gap-2.5 p-2.5">
              <input type="radio" name={`m-${opt.id}`} value={opt.lable} />
              <Text level={2}>{opt.lable}</Text>
            </label>
          ))}
        </Card>
      ))}
    </SectionWrapper>
  );
}

export default RightColumn;
