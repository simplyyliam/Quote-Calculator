import { DisplayPicture } from "./DisplayPicture";
import { Text } from "../ui/typography";
import { Button } from "../ui";
import { useToggle } from "../../store";

export default function HeaderCard() {
    const { setToggle } = useToggle()
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-2">
        <DisplayPicture size="xl" className="bg-black">
          This is an image
        </DisplayPicture>
        <div className="flex flex-col items-center justify-center">
          <Text level={"xl"} weight="sb">
            ByHoneyLee
          </Text>
          <Text level={4} opacity="50" weight="m">
            Request for some support below or modify quote
          </Text>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Button>
          <Text level={1} weight="m">
            Request Consultant
          </Text>
        </Button>
        <Button outtline="yes" bg="no" onClick={() => setToggle()}>
          <Text level={1} weight="m">
            Modify Quote
          </Text>
        </Button>
      </div>
    </div>
  );
}
