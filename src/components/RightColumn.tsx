import { Meta } from "../lib";
import { useCalculator } from "../store";
import { SectionWrapper, Card } from "./ui";
import { Text } from "./ui/typography";

function RightColumn() {
  const { toggleOption, selectedItems } = useCalculator();

  return (
    <SectionWrapper className="flex-col gap-4">
      {Meta.filter((m) => m.order <= 2).map((m) => (
        <Card key={m.id}>
          {/* Header section */}
          <div className="flex items-center w-full px-2.5 py-3.5">
            <div className="flex items-center gap-2">
              <div className="flex flex-col gap-[4px]">
                <Text level={2} weight="m">
                  {m.title}
                </Text>
                <Text level={3} opacity="50">
                  {m.Subtitle}
                </Text>
              </div>
            </div>
          </div>

          {/* Options */}
          {m.options?.map((opt) => {
            const isSelected = selectedItems.some(
              (item) =>
                item.titleId === m.id &&
                item.options.some((o) => o.optionId === opt.id)
            );

            return (
              <label
                key={opt.id}
                className="flex items-center gap-2.5 p-2.5 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() =>
                    toggleOption(m.id, { optionId: opt.id, price: opt.price })
                  }
                  name={`m-${opt.id}`}
                  value={opt.lable}
                  className="cursor-pointer"
                />
                <Text level={2}>{opt.lable}</Text>
              </label>
            );
          })}
        </Card>
      ))}
    </SectionWrapper>
  );
}

export default RightColumn;
