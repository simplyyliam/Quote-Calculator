import DisplayPicture from "./DisplayPicture";
import { Text } from "../ui/typography";
import { Button } from "../ui";
import { useToggle } from "../../store";


export default function HeaderCard() {
  const { setToggle } = useToggle()
  return (
    <div className="flex flex-col gap-4 xl:gap-10">
      <div className="flex xl:flex-col items-center justify-center gap-3">
        <DisplayPicture src="/simplyliam.png" className="w-[70px] h-[70px]"/>
        <div className="flex flex-col xl:items-center xl:justify-center w-[230px] xl:w-[323px]">
          <Text weight="m" className="text-xl xl:text-3xl">ByHoneyLee</Text>
          <Text weight="r" opacity="50" className="text-sm xl:text-center xl:text-lg">Questions? Request a consultant or modify your quote.</Text>
        </div>
      </div>
      <div className="flex xl:flex-col items-center justify-center gap-2">
        <Button className="text-[11px] xl:text-xs w-[160px] h-[50px] xl:w-[217px] xl:h-[70px]">Request Consultant</Button>
        <Button onClick={() => setToggle()} outtline="yes" className="text-[11px] xl:text-xs w-[160px] h-[50px] xl:w-[217px] xl:h-[70px]">Modify Quote</Button>
      </div>
    </div>
  );
}
