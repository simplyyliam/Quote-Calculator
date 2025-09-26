import { Meta } from "../lib";
import { useCalculator, useStepper } from "../store";
import { PlusSign, MinusSign } from "./Icons";
import { SectionWrapper, Card } from "./ui";
import { Text } from "./ui/typography";

function LeftColumn() {
  const { initialValue, increment, decrement } = useStepper();
  const { toggleOption, selectedItems } = useCalculator();

  return (
    <SectionWrapper className="flex-col gap-4">
      {Meta.filter((m) => m.order === 3).map((m) => (
        <Card key={m.id}>
          <div className="flex items-center w-full px-2.5 py-3.5">
            <div className="flex items-center gap-2">
              <div className="flex flex-col gap-[4px]">
                <Text level={2}>{m.title}</Text>
                <Text level={3} opacity="50">
                  {m.Subtitle}
                </Text>
              </div>
            </div>
          </div>
          <div className="hide-scrollbar flex items-center justify-between gap-2 w-full h-full flex-wrap">
            {m.options?.map((opt) => {
              // Check if option is selected
              const isSelected = selectedItems.some(
                (item) =>
                  item.titleId === m.id &&
                  item.options.some((o) => o.optionId === opt.id)
              );

              return (
                <button
                  key={opt.id}
                  onClick={() =>
                    toggleOption(m.id, { optionId: opt.id, price: opt.price })
                  }
                  className={`flex items-center justify-center w-[137px] h-[137px] px-10 py-[15px] gap-2.5 p-2.5 hover:bg-neutral-100 transition-all ease-linear cursor-pointer 
                    ${isSelected ? "bg-black/15 hover:bg-black/20 rounded-2xl!" : ""}
                  `}
                >
                  <div className="flex flex-col items-center gap-2">
                    <span>{opt.icon}</span>
                    <Text level={2}>{opt.lable}</Text>
                    <Text
                      level={3}
                      opacity="50"
                      className="bg-black/15 rounded-full px-2"
                    >
                      ${opt.price}
                    </Text>
                  </div>
                </button>
              );
            })}
          </div>
        </Card>
      ))}

      {/* This is for the Post/week card */}
      {Meta.filter((m) => m.order === 4).map((m) => (
        <Card key={m.id}>
          <div className="flex items-center w-full px-2.5 py-3.5">
            <div className="flex items-center gap-2">
              <div className="flex flex-col gap-[4px]">
                <Text level={2}>{m.title}</Text>
                <Text level={3} opacity="50">
                  {m.Subtitle}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between w-full px-25 py-2.5">
            <button
              className="flex items-center justify-center p-5 w-[78px] h-[78px] hover:bg-neutral-100 transition-all ease-linear cursor-pointer rounded-2xl"
              onClick={increment}
            >
              <PlusSign size={36} />
            </button>
            <span className="flex items-center justify-center text-5xl p-5 w-[78px] h-[78px]">
              {initialValue}
            </span>
            <button
              className="flex items-center justify-center p-5 w-[78px] h-[78px] hover:bg-neutral-100 transition-all ease-linear cursor-pointer rounded-2xl"
              onClick={decrement}
            >
              <MinusSign size={36} />
            </button>
          </div>
        </Card>
      ))}
    </SectionWrapper>
  );
}

export default LeftColumn;
