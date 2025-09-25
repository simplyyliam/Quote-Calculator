import { Meta } from "../lib";
import { useCalculator, useStepper } from "../store";
import { LightBulb, PlusSign, MinusSign } from "./Icons";
import { SectionWrapper, Card, CardIcon } from "./ui";
import { Text } from "./ui/typography";

function LeftColumn() {
  const { initialValue, increment, decrement } = useStepper();
  const { getVlaue, selected } = useCalculator();

  return (
    <SectionWrapper className="flex-col gap-4">
      {Meta.filter((m) => m.order === 3).map((m) => (
        <Card className="h-[20em]! overflow-hidden">
          <div className="flex items-center w-full px-2.5 py-3.5">
            <div className="flex items-center gap-2">
              <div key={m.id} className="flex flex-col gap-[4px]">
                <Text level={2}>{m.title}</Text>
                <Text level={3} opacity="50">
                  {m.Subtitle}
                </Text>
              </div>
            </div>
          </div>
          <div className="hide-scrollbar  overflow-y-auto">
            {m.options?.map((opt) => (
              <button
                key={opt.id}
                onClick={() => getVlaue(opt.id, opt.price)}
                className={`flex w-full gap-2.5 p-2.5 hover:bg-neutral-100 transition-all ease-linear cursor-pointer 
                ${
                  selected.includes(opt.id)
                    ? "bg-blue-600/15 hover:bg-blue-500/25!"
                    : ""
                }
                `}
              >
                <CardIcon
                  icon={<LightBulb className="text-slate-500" size={24} />}
                  alt="Strategy & Reposting"
                />
                <Text level={2}>{opt.lable}</Text>
              </button>
            ))}
          </div>
        </Card>
      ))}

      {/* This is for the Post/week card */}
      {Meta.filter((m) => m.order === 4).map((m) => (
        <Card>
          <div className="flex items-center w-full px-2.5 py-3.5">
            <div className="flex items-center gap-2">
              <div key={m.id} className="flex flex-col gap-[4px]">
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
              {<PlusSign size={36} className={""} />}
            </button>
            <span className="flex items-center justify-center text-5xl p-5 w-[78px] h-[78px]">
              {initialValue}
            </span>
            <button
              className="flex items-center justify-center p-5 w-[78px] h-[78px] hover:bg-neutral-100 transition-all ease-linear cursor-pointer rounded-2xl"
              onClick={decrement}
            >
              <MinusSign size={36} className={""} />
            </button>
          </div>
        </Card>
      ))}
    </SectionWrapper>
  );
}

export default LeftColumn;
