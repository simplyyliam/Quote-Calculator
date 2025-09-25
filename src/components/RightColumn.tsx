import { Meta } from "../lib";
import { useCalculator } from "../store";
import { SectionWrapper, Card } from "./ui";
import { Text } from "./ui/typography";

function RightColumn() { 
  const { getVlaue, selected } = useCalculator()
  return (
    <SectionWrapper className="flex-col gap-4">
      {Meta.filter((m) => m.order <= 2).map((m) => (
        <Card>
          {/* Header section */}
          <div className="flex items-center w-full px-2.5 py-3.5">
            <div className="flex items-center gap-2">
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
              <input type="checkbox" checked={selected.includes(opt.id)} onChange={() => getVlaue(opt.id, opt.price)} name={`m-${opt.id}`} value={opt.lable} />
              <Text level={2}>{opt.lable}</Text>
            </label>
          ))}
        </Card>
      ))}
    </SectionWrapper>
  );
}

export default RightColumn;
