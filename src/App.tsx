import { Box } from "./components/box";
import { BoxSelector } from "./components/BoxSelector";
import { CustomButton } from "./components/CustomButton";
import { NavBar } from "./components/nav";
import { Selector } from "./components/selectors";
import { useState } from "react";

function App() {
  // Single-select for contact length
  const [selectedContactLength, setSelectedContactLength] = useState<number | null>(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState<number[]>([]);
  const [postValue, setPostValue] = useState<number | null>(0);

  // Set contact length selection
  const handleContactLengthClick = (idx: number) => {
    setSelectedContactLength(idx);
  };

  // Toggle platform selection (multi-select)
  const handlePlatformClick = (idx: number) => {
    setSelectedPlatforms((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  function handleQuoteResults () {
    

    return "$3480"
  }

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <NavBar>Quote Calculator</NavBar>

      <div className="flex items-center justify-center w-auto h-auto gap-15 ">
        {/* First Layout */}
        <Box>
          {/* Strategy & Reporting */}
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-medium">Strategy & Reporting</h1>
            <div className="flex flex-col gap-2 ml-8">
              <Selector>Social Media Strategy</Selector>
              <Selector>Competitor Analysis</Selector>
              <Selector>Monthly Performance Reports</Selector>
            </div>
          </div>
          {/* Content Creation */}
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-medium">Content Creation</h1>
            <div className="flex flex-col gap-2 ml-8">
              <Selector>Custom Graphics </Selector>
              <Selector>Copywriting</Selector>
              <Selector>Photography</Selector>
            </div>
          </div>

          {/* Contact Lengths */}
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-medium">Contact Length</h1>
            <div className="flex gap-2">
              <BoxSelector
                isSelected={selectedContactLength === 0}
                onClick={() => handleContactLengthClick(0)}
              >
                <h1 className="text-[16px] font-medium">Monthly</h1>
                <h3 className="text-[14px] font-light opacity-50">
                  No discount
                </h3>
              </BoxSelector>
              <BoxSelector
                isSelected={selectedContactLength === 1}
                onClick={() => handleContactLengthClick(1)}
              >
                <h1 className="text-[16px] font-medium">3 Months</h1>
                <h3 className="text-[14px] font-light opacity-50">
                  20% discount
                </h3>
              </BoxSelector>
              <BoxSelector
                isSelected={selectedContactLength === 2}
                onClick={() => handleContactLengthClick(2)}
              >
                <h1 className="text-[16px] font-medium">6 Months</h1>
                <h3 className="text-[14px] font-light opacity-50">
                  10% discount
                </h3>
              </BoxSelector>
            </div>
          </div>
        </Box>

        {/* Second Layout */}
        <Box>
          {/* Platforms */}
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-medium">Select Platforms</h1>
            <div className="grid grid-cols-3 grid-rows-2 gap-2">
              <BoxSelector
                className="h-auto p-4"
                isSelected={selectedPlatforms.includes(0)}
                onClick={() => handlePlatformClick(0)}
              >
                <div className="flex items-center justify-center w-[50px] h-[50px] bg-stone-200 rounded-full"></div>
                <h1 className="text-[16px]">Faceboox</h1>
                <h3 className="text-[14px] font-light opacity-50">$150</h3>
              </BoxSelector>
              <BoxSelector
                className="h-auto p-4"
                isSelected={selectedPlatforms.includes(1)}
                onClick={() => handlePlatformClick(1)}
              >
                <div className="flex items-center justify-center w-[50px] h-[50px] bg-stone-200 rounded-full"></div>
                <h1 className="text-[16px]">Instagram</h1>
                <h3 className="text-[14px] font-light opacity-50">$220</h3>
              </BoxSelector>
              <BoxSelector
                className="h-auto p-4"
                isSelected={selectedPlatforms.includes(2)}
                onClick={() => handlePlatformClick(2)}
              >
                <div className="flex items-center justify-center w-[50px] h-[50px] bg-stone-200 rounded-full"></div>
                <h1 className="text-[16px]">YouTube</h1>
                <h3 className="text-[14px] font-light opacity-50">$250</h3>
              </BoxSelector>
              <BoxSelector
                className="h-auto p-4"
                isSelected={selectedPlatforms.includes(3)}
                onClick={() => handlePlatformClick(3)}
              >
                <div className="flex items-center justify-center w-[50px] h-[50px] bg-stone-200 rounded-full"></div>
                <h1 className="text-[16px]">Linkdin</h1>
                <h3 className="text-[14px] font-light opacity-50">$175</h3>
              </BoxSelector>
              <BoxSelector
                className="h-auto p-4"
                isSelected={selectedPlatforms.includes(4)}
                onClick={() => handlePlatformClick(4)}
              >
                <div className="flex items-center justify-center w-[50px] h-[50px] bg-stone-200 rounded-full"></div>
                <h1 className="text-[16px]">TikTok</h1>
                <h3 className="text-[14px] font-light opacity-50">$225</h3>
              </BoxSelector>
              <BoxSelector
                className="h-auto p-4"
                isSelected={selectedPlatforms.includes(5)}
                onClick={() => handlePlatformClick(5)}
              >
                <div className="flex items-center justify-center w-[50px] h-[50px] bg-stone-200 rounded-full"></div>
                <h1 className="text-[16px]">Pinterest</h1>
                <h3 className="text-[14px] font-light opacity-50">$100</h3>
              </BoxSelector>
            </div>
          </div>
          {/* Post Slider */}
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex items-center justify-between w-full">
              <h1 className=" text-[16px] font-medium">Posts Per Weeks</h1>
              <span>{postValue}</span>
            </div>
            <input
              type="range"
              min={1}
              max={7}
              value={`${postValue}`}
              onChange={(e) => setPostValue(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex items-center justify-between w-full">
              <span>1</span>
              <span>7</span>
            </div>
          </div>

          {/* Results Box  */}
          <div className="flex flex-col w-full h-auto p-4 gap-4 bg-[#0D0D0D] text-white rounded-xl">
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col gap-1.5">
                <h1 className="font-medium">Your Estimated Monthly Price</h1>
                <h1 className="opacity-50">Base on your selections</h1>
              </div>
              <div className="flex flex-col items-end gap-1.5">
                <span className="text-4xl">{handleQuoteResults()}</span>
                <h1 className="opacity-50 text-[12px]">10% discount applied</h1>
              </div>
            </div>
            <CustomButton>Get Your Quote</CustomButton>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default App;