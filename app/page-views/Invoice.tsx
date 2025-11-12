import { Separator } from "@/components/ui/separator";
import { useCalculator } from "@/store/useCalculatorStore";

export default function Invoice() {
  const { selectedItems } = useCalculator();

  return (
    <div className="flex flex-col w-full h-full p-5 overflow-auto">
      {/* Top layer */}
      <div className="flex flex-col w-full h-fit gap-3.5">
        {/* Header */}
        <div className="flex justify-between">
          <div className="flex gap-3">
            <div className="w-[5em] h-[5em] bg-accent relative">Image</div>
            <div className="flex flex-col gap-1.5">
              <h1 className="text-2xl font-semibold">ByHoneyLee</h1>
              <p className="text-sm font-medium">ByHoneyLee</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-end">
            <h1 className="text-5xl font-semibold">INVOICE</h1>
            <span className="font-medium text-lg">#052546</span>
          </div>
        </div>
        <div className="flex flex-col text-[14px] font-medium gap-2 ">
          <span>byhoneylee@gmail.com</span>
          <span>byhoneylee.com </span>
          <span>+27 73 370 6360</span>
        </div>
      </div>
      {/* Middle Layer */}
      <div className="flex flex-col h-full py-6 gap-10">
        <div className="flex flex-col gap-2">
          <h1>Description</h1>
          <p>your quote details</p>
        </div>
        <Separator />

        <div className="flex flex-col h-fit gap-5 justify-between">
          {selectedItems.map((s) => (
            <div key={s.titleId} className="flex justify-between w-full">
              <span>{s.titleId}</span>
              {s.options.map((o) => (
                <span key={o.optionId}>{o.price}</span>
              ))}
            </div>
          ))}
        </div>
        <Separator />
      </div>
      {/* Bottom Layer */}
      <div className="flex flex-col w-full h-fit gap-3.5">
        {/* Header */}
        <div className="flex justify-between">
          <div className="flex gap-3">
            <div className="w-[5em] h-[5em] bg-accent relative">Image</div>
            <div className="flex flex-col gap-1.5">
              <h1 className="text-3xl font-semibold">Bank Details</h1>
              <p className="text-sm font-medium">ByHoneyLee</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-end">
            <h1 className="text-5xl font-semibold">Terms</h1>
            <span className="font-medium text-[14px] max-w-85 text-end">
              Payment should be paid in full no later than 15 days after
              receiving this invoice
            </span>
            <span className="font-medium text-[14px] max-w-30 text-end">
              Have a nice day, byhoneylee
            </span>
          </div>
        </div>
        <div className="flex flex-col w-55 text-[14px] font-medium gap-2">
          <div className="flex justify-between">
            <span>BANK / FIC</span>
            <span>008526894</span>
          </div>
          <div className="flex justify-between">
            <span>Address</span>
            <div className="flex flex-col">
              <span> 30 Halawai Dr</span>
              <span> Lahaina</span>
              <span>Hawaii</span>
              <span>96761</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
