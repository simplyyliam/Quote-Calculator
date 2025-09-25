import { useTotal } from "../hooks";
import { Text } from "./ui/typography";

export default function SummaryCard() {
  const { total } = useTotal();
  return (
    <div className="flex items-center justify-between p-2 rounded-[20px] bg-black text-white absolute bottom-10">
      <div className="flex flex-col px-2.5 py-3.5">
        <Text level={3}>Your Estimated Monthly Summary</Text>
        <Text level={4} opacity="50">Based on your selections</Text>
      </div>
      <div className="flex flex-col text-end px-2.5 py-3.5">
        <Text level={"xl"}>${total}</Text>
        <Text level={4} opacity="50">10% Discount applied</Text>
      </div>
    </div>
  );
}
