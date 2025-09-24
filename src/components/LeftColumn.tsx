  
import { Meta } from "../lib";
import { useStepper } from "../store";
import { LightBulb, PlusSign, MinusSign } from "./Icons";
import { SectionWrapper, Card, CardIcon } from "./ui";
import { Text } from "./ui/typography";

function LeftColumn() {

  const { initialValue, increment, decrement } = useStepper()
    
  return (
    <SectionWrapper className="flex-col gap-4">
      {Meta.filter((m) => m.id === 3).map((m) => (
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
          {m.options?.map((opt) => (
            <div key={opt.id} className="flex gap-2.5 p-2.5 ">
              <CardIcon
                icon={<LightBulb className="text-slate-500" size={24} />}
                alt="Strategy & Reposting"
              />
              <Text level={2}>{opt.lable}</Text>
            </div>
          ))}
        </Card>
      ))}

      {/* This is for the Post/week card */}
      {Meta.filter((m) => m.id === 4).map((m) => (
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
            <button className="flex items-center justify-center p-5 w-[78px] h-[78px] hover:bg-neutral-100 transition-all ease-linear cursor-pointer rounded-2xl"
            onClick={increment}
            >
              {<PlusSign size={36} className={""} />}
            </button>
            <span className="flex items-center justify-center text-5xl p-5 w-[78px] h-[78px]">
              {initialValue}
            </span>
            <button className="flex items-center justify-center p-5 w-[78px] h-[78px] hover:bg-neutral-100 transition-all ease-linear cursor-pointer rounded-2xl"
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
