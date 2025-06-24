import { Box } from "./components/box";
import { BoxSelector } from "./components/BoxSelector";
import { CustomButton } from "./components/CustomButton";
import { NavBar } from "./components/nav";
import { Selector } from "./components/selectors";
import { useEffect, useState } from "react";
import { useCallback } from "react";

function App() {
  // Single-select for Contract length
  const [selectedContractLength, setselectedContractLength] = useState<
    number | null
  >(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState<number[]>([]);
  const [postValue, setPostValue] = useState<number | null>(0);

  const [contractLength, setContractLength] = useState<string | null>(null);
  const [selectedStrategy, setSelectedStrategy] = useState<string[]>([]);
  const [selectedContent, setSelectedContent] = useState<string[]>([]);
  const [finalPrice, setFinalPrice] = useState<number>(0);
  const [communityManagement, setCommunityManagement] = useState<string>("none");

  // Set Contract length selection
  const handleContractLengthClick = (idx: number) => {
    setselectedContractLength(idx);
  };

  // Toggle platform selection (multi-select)
  const handlePlatformClick = (idx: number) => {
    setSelectedPlatforms((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const getPlatformPrice = (platformIdx: number): number => {
    switch (platformIdx) {
      case 0:
        return 150; // Facebook
      case 1:
        return 220; // Instagram
      case 2:
        return 250; // YouTube
      case 3:
        return 175; // LinkedIn
      case 4:
        return 225; // TikTok
      case 5:
        return 100; // Pinterest
      default:
        return 0;
    }
  };

  const getStrategyPrice = (item: string) => {
    switch (item) {
      case "Social Media Strategy":
        return 100;
      case "Competitor Analysis":
        return 80;
      case "Monthly Performance Reports":
        return 70;
      default:
        return 0;
    }
  };

  const getContentPrice = (item: string) => {
    switch (item) {
      case "Custom Graphics":
        return 150;
      case "Copywriting":
        return 120;
      case "Photography":
        return 200;
      default:
        return 0;
    }
  };


  const getCommunityManagement = (item: string) => {
    switch (item) {
      case "none":
        return 0;
      case "basic":
        return 100;
      case "standard":
        return 200;
      case "premium":
        return 300;
      default:
        return 0;
    }
  } 

  const calculateTotal = useCallback(() => {
    let total = 0;

    selectedPlatforms.forEach((idx) => {
      total += getPlatformPrice(idx);
    });

    selectedStrategy.forEach((item) => {
      total += getStrategyPrice(item);
    });

    selectedContent.forEach((item) => {
      total += getContentPrice(item);
    });


    total += getCommunityManagement(communityManagement);

    if (postValue) {
      total *= postValue;
    }

    if (selectedContractLength !== null) {
      switch (selectedContractLength) {
        case 1: // 3 Months
          total = total - total * 0.1;
          setContractLength("10% discount")
          break;
        case 2: // 6 Months
          total = total - total * 0.2;
          setContractLength("20% discount")
          break;
        default:
          setContractLength("No discount")
          break;
      }
    }

    setFinalPrice(Math.round(total));
  }, [
    selectedPlatforms,
    selectedStrategy,
    selectedContent,
    postValue,
    selectedContractLength,
    communityManagement
  ]);

  useEffect(() => {
    calculateTotal();
  }, [calculateTotal]);

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
              <Selector
                label="Social Media Strategy"
                checked={selectedStrategy.includes("Social Media Strategy")}
                onChange={() => {
                  const label = "Social Media Strategy";
                  setSelectedStrategy((prev) =>
                    prev.includes(label)
                      ? prev.filter((item) => item !== label)
                      : [...prev, label]
                  );
                }}
              />
              <Selector
                label="Competitor Analysis"
                checked={selectedStrategy.includes("Competitor Analysis")}
                onChange={() => {
                  const label = "Competitor Analysis";
                  setSelectedStrategy((prev) =>
                    prev.includes(label)
                      ? prev.filter((item) => item !== label)
                      : [...prev, label]
                  );
                }}
              />
              <Selector
                label="Monthly Performance Reports"
                checked={selectedStrategy.includes(
                  "Monthly Performance Reports"
                )}
                onChange={() => {
                  const label = "Monthly Performance Reports";
                  setSelectedStrategy((prev) =>
                    prev.includes(label)
                      ? prev.filter((item) => item !== label)
                      : [...prev, label]
                  );
                }}
              />
            </div>
          </div>
          {/* Content Creation */}
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-medium">Content Creation</h1>
            <div className="flex flex-col gap-2 ml-8">
              <Selector
                label="Custom Graphics"
                checked={selectedContent.includes("Custom Graphics")}
                onChange={() => {
                  const label = "Custom Graphics";
                  setSelectedContent((prev) =>
                    prev.includes(label)
                      ? prev.filter((item) => item !== label)
                      : [...prev, label]
                  );
                }}
              />
              <Selector
                label="Copywriting"
                checked={selectedContent.includes("Copywriting")}
                onChange={() => {
                  const label = "Copywriting";
                  setSelectedContent((prev) =>
                    prev.includes(label)
                      ? prev.filter((item) => item !== label)
                      : [...prev, label]
                  );
                }}
              />
              <Selector
                label="Photography"
                checked={selectedContent.includes("Photography")}
                onChange={() => {
                  const label = "Photography";
                  setSelectedContent((prev) =>
                    prev.includes(label)
                      ? prev.filter((item) => item !== label)
                      : [...prev, label]
                  );
                }}
              />
            </div>
          </div>
          
          {/* Community Management */}
          <div className="flex flex-col gap-3">
            <h1 className="text-lg font-medium">Community Management</h1>
            <select
              name="community-management"
              id="community-management"
              className="border border-black/50 max-w-[18em] py-2.5 px-5 rounded-lg"
              value={communityManagement}
              onChange={e => setCommunityManagement(e.target.value)}
            >
              <option value="none">None</option>
              <option value="basic">Basic (1 hour/day)</option>
              <option value="standard">Standard (2 hours/day)</option>
              <option value="premium">Premium (3+ hours/day)</option>
            </select>
          </div>

          {/* Contract Lengths */}
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-medium">Contract Length</h1>
            <div className="flex gap-2">
              <BoxSelector
                isSelected={selectedContractLength === 0}
                onClick={() => handleContractLengthClick(0)}
              >
                <h1 className="text-[16px] font-medium">Monthly</h1>
                <h3 className="text-[14px] font-light opacity-50">
                  No discount
                </h3>
              </BoxSelector>
              <BoxSelector
                isSelected={selectedContractLength === 1}
                onClick={() => handleContractLengthClick(1)}
              >
                <h1 className="text-[16px] font-medium">3 Months</h1>
                <h3 className="text-[14px] font-light opacity-50">
                  10% discount
                </h3>
              </BoxSelector>
              <BoxSelector
                isSelected={selectedContractLength === 2}
                onClick={() => handleContractLengthClick(2)}
              >
                <h1 className="text-[16px] font-medium">6 Months</h1>
                <h3 className="text-[14px] font-light opacity-50">
                  20% discount
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
                <span className="text-4xl">${finalPrice}</span>
                <h1 className="opacity-50 text-[12px]">
                  {contractLength ?? ""}
                </h1>
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
