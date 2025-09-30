import { useTotal } from "../../hooks";
import { Button, Card } from "../ui";
import { Text } from "../ui/typography";

export default function QuoteSummaryCard() {
  const { total } = useTotal();
  return (
    <Card className="flex flex-col w-full h-auto p-[15px] gap-3">
      <div className="w-full flex-col">
        <Text weight="m" className="py-2.5 text-[15px]">
          Quote Summary
        </Text>

        <div className="flex items-center justify-between">
          <Text opacity="50" className="px-2.5 py-1.5 text-[12px]">
            Subtotal
          </Text>
          <Text weight="m" className="text-[12px]">
            ${total}.00
          </Text>
        </div>
        <div className="flex items-center justify-between">
          <Text className="px-2.5 py-1.5 text-[12px] text-red-600">
            Dicount
          </Text>
          <Text className="text-red-600 text-[12px]">
            ${total}.00
          </Text>
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-between">
        <Text weight="m" className="text-[14px]">
          Total
        </Text>
        <Text weight="m" className="text-[14px]">
          ${total}.00
        </Text>
      </div>
      <div className="flex items-center justify-center w-full">
        <Button className="w-[190px] h-[60px]">
          <Text weight="m" className="text-[10px]">
            Confirm & Generate Quote
          </Text>
        </Button>
      </div>
    </Card>
  );
}
