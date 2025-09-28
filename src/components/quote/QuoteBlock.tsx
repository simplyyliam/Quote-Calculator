import { useCalculator } from "../../store";
import { Text } from "../ui/typography";

export default function QuoteBlock() {
  const { selectedItems } = useCalculator();

  return (
    // Card
    <>
      <div className="hide-scrollbar flex flex-col w-full h-full  p-[15px] gap-10 overflow-hidden overflow-y-auto">
        {/* Header */}
        {selectedItems.map((items) => (
          <div className="flex flex-col gap-2.5">
            <Text level={4} weight="m" className="py-2.5">
              {items.titleId}
            </Text>

            {/* Options */}
            {items.options?.map((o) => (
              <div className="flex items-center justify-between py-1.25 px-2.5">
                <Text level={2} opacity="50">
                  {o.optionId}
                </Text>
                <Text level={2} opacity="50">
                  ${o.price}.00
                </Text>
              </div>
            ))}
            <hr />
            <div className="flex items-center justify-between pr-2.5">
              <Text level={4} weight="m">
                Total {items.titleId}
              </Text>
              <Text level={4} weight="m">
                ${items.options.reduce((acc, o) => acc + o.price, 0)}.00
              </Text>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
