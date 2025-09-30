import { Meta } from "../lib";
import { useCalculator, useStepper } from "../store";
import { PlusSign, MinusSign } from "./Icons";
import { Card } from "./ui";
import { Text } from "./ui/typography";

export default function QuoteGrid() {
  const { toggleOption, selectedItems } = useCalculator();
  const { initialValue, increment, decrement } = useStepper();

  return (
    <div className="w-full h-full">
      {/* Scrollable only on small screens */}
      <div className="h-[calc(100vh-100px)] overflow-y-auto md:overflow-visible pr-2">
        <div className="columns-1 md:columns-2 gap-4 w-full">
          {Meta.map((m) => (
            <Card key={m.id} className="mb-4 gap-4 break-inside-avoid">
              {/* Header */}
              <div className="flex items-center w-full px-2.5 py-3.5">
                <div className="flex flex-col gap-[4px]">
                  <Text weight="m">{m.title}</Text>
                  <Text opacity="50">{m.Subtitle}</Text>
                </div>
              </div>

              {/* Options */}
              {m.order <= 2 && (
                <div className="flex flex-col gap-2">
                  {m.options?.map((opt) => {
                    const isSelected = selectedItems.some(
                      (item) =>
                        item.titleId === m.title &&
                        item.options.some((o) => o.optionId === opt.lable)
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
                            toggleOption(m.title, {
                              optionId: opt.lable,
                              price: opt.price ?? 0,
                            })
                          }
                          className="cursor-pointer"
                        />
                        <Text>{opt.lable}</Text>
                      </label>
                    );
                  })}
                </div>
              )}

              {m.order === 3 && (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                  {m.options?.map((opt) => {
                    const isSelected = selectedItems.some(
                      (item) =>
                        item.titleId === m.title &&
                        item.options.some((o) => o.optionId === opt.lable)
                    );

                    return (
                      <button
                        key={opt.id}
                        onClick={() =>
                          toggleOption(m.title, {
                            optionId: opt.lable,
                            price: opt.price ?? 0,
                          })
                        }
                        className={`flex flex-col items-center justify-center gap-2.5  hover:bg-black/20 transition-all ease-linear cursor-pointer
            ${isSelected ? "bg-black/15 hover:bg-black/20 rounded-2xl" : ""}
            w-full aspect-square
          `}
                      >
                        <span>{opt.icon}</span>
                        <Text>{opt.lable}</Text>
                        <Text
                          opacity="50"
                          className="bg-black/15 rounded-full px-2"
                        >
                          ${opt.price}
                        </Text>
                      </button>
                    );
                  })}
                </div>
              )}

              {m.order === 4 && (
                <div className="flex items-center justify-between w-full px-4 md:px-25 py-2.5 gap-2">
                  <button
                    className="flex items-center justify-center p-3 md:p-5 w-12 md:w-[78px] h-12 md:h-[78px] hover:bg-neutral-100 transition-all ease-linear cursor-pointer rounded-2xl"
                    onClick={increment}
                  >
                    <PlusSign size={24} />
                  </button>

                  <span className="flex items-center justify-center text-3xl md:text-5xl p-3 md:p-5 w-12 md:w-[78px] h-12 md:h-[78px]">
                    {initialValue}
                  </span>

                  <button
                    className="flex items-center justify-center p-3 md:p-5 w-12 md:w-[78px] h-12 md:h-[78px] hover:bg-neutral-100 transition-all ease-linear cursor-pointer rounded-2xl"
                    onClick={decrement}
                  >
                    <MinusSign size={24} />
                  </button>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
