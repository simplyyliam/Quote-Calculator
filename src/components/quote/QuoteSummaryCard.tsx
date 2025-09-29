import { useTotal } from "../../hooks";
import { Button, Card } from "../ui";
import { Text } from "../ui/typography";

export default function QuoteSummaryCard() {
  const { total } = useTotal();
  return (
    <Card className="flex flex-col w-full h-auto p-[15px] gap-3">
      <div className="w-full flex-col">
        <Text level={4} weight="m" className="py-2.5">
          Quote Summary
        </Text>

        <div className="flex items-center justify-between">
          <Text level={3} opacity="50" className="px-2.5 py-1.5">
            Subtotal
          </Text>
          <Text level={3} weight="m">
            ${total}.00
          </Text>
        </div>
        <div className="flex items-center justify-between">
          <Text level={3} className="px-2.5 py-1.5 text-red-600">
            Dicount
          </Text>
          <Text level={3} className="text-red-600">
            ${total}.00
          </Text>
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-between">
        <Text level={4} weight="m">
          Total
        </Text>
        <Text level={4} weight="m">
          ${total}.00
        </Text>
      </div>
      <div className="flex items-center justify-center w-full">
        <Button>
          <Text level={1} weight="m">
            Confirm & Generate Quote
          </Text>
        </Button>
      </div>
    </Card>
  );
}
