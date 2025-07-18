import React, { useEffect, useState, useCallback } from "react";
import { Box } from "../components/box";
import { BoxSelector } from "../components/BoxSelector";
import { CustomButton } from "../components/CustomButton";
import { Selector } from "../components/selectors";
import { CurrencyToggle } from "../components/CurrencyToggle";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTiktok,
  FaPinterestP,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCalculator } from "../libs/useCalculator";

function Calculator() {
  const [selectedContractLength, setContractLengthIndex] = useState<
    number | null
  >(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState<number[]>([]);
  const [postValue, setPostValue] = useState<number>(1);
  const [contractLength, setContractLength] = useState<string>("");
  const [selectedStrategy, setSelectedStrategy] = useState<StrategyKey[]>([]);
  const [selectedContent, setSelectedContent] = useState<ContentKey[]>([]);
  const [communityManagement, setCommunityManagement] =
    useState<CommunityKey>("none");

  const [finalPrice, setFinalPrice] = useState<number>(0);
  const [currency, setCurrency] = useState<"USD" | "ZAR">("USD");
  const [subtotal, setSubtotal] = useState<number>(0);
  const [discountAmount, setDiscountAmount] = useState<number>(0);
  const [hasLoaded, setHasLoaded] = useState(false);

  const { data } = useCalculator();

  const USD_TO_ZAR = 18.5;
  const navigate = useNavigate();
  const { setData } = useCalculator();

  type StrategyKey = keyof typeof getPriceMap.strategy;
  type ContentKey = keyof typeof getPriceMap.content;
  type CommunityKey = keyof typeof getPriceMap.community;

  function toggleSelection<T>(
    setState: React.Dispatch<React.SetStateAction<T[]>>,
    value: T
  ) {
    setState((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  }

const getPriceMap = React.useMemo(() => ({
  platforms: [150, 220, 250, 175, 225, 100] as const,
  strategy: {
    "Social Media Strategy": 100,
    "Competitor Analysis": 80,
    "Monthly Performance Reports": 70,
  } as const,
  content: {
    "Custom Graphics": 150,
    Copywriting: 120,
    Photography: 200,
  } as const,
  community: {
    none: 0,
    basic: 100,
    standard: 200,
    premium: 300,
  } as const,
}), []);

  const getCurrencySymbol = () => (currency === "USD" ? "$" : "R");

  const convertPrice = (usd: number) =>
    currency === "USD" ? usd : Math.round(usd * USD_TO_ZAR);

  const calculateTotal = useCallback(() => {
    let total = 0;

    selectedPlatforms.forEach((idx) => {
      total += getPriceMap.platforms[idx] || 0;
    });

    selectedStrategy.forEach((item) => {
      total += getPriceMap.strategy[item] || 0;
    });

    selectedContent.forEach((item) => {
      total += getPriceMap.content[item] || 0;
    });

    total += getPriceMap.community[communityManagement] || 0;
    total *= postValue;

    const baseTotal = total;
    let discountMultiplier = 1;
    let discountLabel = "No discount";

    if (selectedContractLength === 1) {
      discountMultiplier = 0.9;
      discountLabel = "10%";
    } else if (selectedContractLength === 2) {
      discountMultiplier = 0.8;
      discountLabel = "20%";
    }

    const final = Math.round(baseTotal * discountMultiplier);
    const discountVal = Math.round(baseTotal - final);

    setSubtotal(Math.round(baseTotal));
    setDiscountAmount(discountVal);
    setContractLength(discountLabel);
    setFinalPrice(final);
  }, [
    communityManagement,
    postValue,
    selectedContent,
    selectedContractLength,
    selectedPlatforms,
    selectedStrategy,
    getPriceMap.community,
    getPriceMap.content,
    getPriceMap.strategy,
    getPriceMap.platforms,
  ]);

  useEffect(() => {
    calculateTotal();
  }, [calculateTotal]);

  const platformIcons: Record<string, React.ReactElement> = {
    Facebook: <FaFacebookF className="text-blue-600" size={24} />,
    Instagram: <FaInstagram className="text-pink-500" size={24} />,
    YouTube: <FaYoutube className="text-red-600" size={24} />,
    LinkedIn: <FaLinkedinIn className="text-blue-700" size={24} />,
    TikTok: <FaTiktok className="text-black" size={24} />,
    Pinterest: <FaPinterestP className="text-red-500" size={24} />,
  };

  const handleContinue = () => {
    // Save calculated state to context
    const selectedServices = [
      ...selectedStrategy,
      ...selectedContent,
      communityManagement !== "none" ? communityManagement : null,
    ].filter(Boolean) as string[];

    setData((prev) => ({
      ...prev,
      selectedServices,
      subtotal,
      discount: discountAmount,
      totalPrice: finalPrice,
      currency,
      contractLength,
      postsPerWeek: postValue,
      platforms: selectedPlatforms.map(
        (i) =>
          [
            "Facebook",
            "Instagram",
            "YouTube",
            "LinkedIn",
            "TikTok",
            "Pinterest",
          ][i]
      ),
    }));

    navigate("/quote");
  };

useEffect(() => {
  if (!data || hasLoaded) return; // Only run once when data exists and hasn't loaded before

  const platformNames = [
    "Facebook",
    "Instagram",
    "YouTube",
    "LinkedIn",
    "TikTok",
    "Pinterest",
  ];

  setSelectedPlatforms(
    data.platforms
      .map((p) => platformNames.indexOf(p))
      .filter((i) => i !== -1)
  );

  setSelectedStrategy(
    data.selectedServices.filter((s) =>
      Object.keys(getPriceMap.strategy).includes(s)
    ) as StrategyKey[]
  );

  setSelectedContent(
    data.selectedServices.filter((s) =>
      Object.keys(getPriceMap.content).includes(s)
    ) as ContentKey[]
  );

  const community =
    data.selectedServices.find((s) =>
      Object.keys(getPriceMap.community).includes(s)
    ) || "none";
  setCommunityManagement(community as CommunityKey);

  if (typeof data.contractLength === "string") {
    const contractMapping: Record<string, number> = {
      "No discount": 0,
      "10%": 1,
      "20%": 2,
    };
    setContractLengthIndex(contractMapping[data.contractLength] ?? null);
  } else if (typeof data.contractLength === "number") {
    setContractLengthIndex(data.contractLength);
  } else {
    setContractLengthIndex(null);
  }

  setPostValue(Number(data.postsPerWeek));

  if (data.currency === "USD" || data.currency === "ZAR") {
    setCurrency(data.currency);
  } else {
    setCurrency("USD");
  }

  setSubtotal(data.subtotal);
  setDiscountAmount(data.discount);
  setFinalPrice(data.totalPrice);

  setHasLoaded(true); // mark as loaded so it doesn't overwrite again
}, [data, getPriceMap, hasLoaded]);


  return (
    <div className="min-h-screen pt-5 font-sans">
      <main className="max-w-6xl mx-auto py-12 px-4 flex flex-col md:flex-row gap-10">
        {/* Config Section */}
        <section className="flex-1 space-y-8">
          <Box className="border border-gray-100 rounded-3xl p-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-900">
                Configuration
              </h2>
              <CurrencyToggle currency={currency} onChange={setCurrency} />
            </div>

            {/* Strategy, Content, Community */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Strategy & Reporting
                </h3>
                <div className="space-y-3">
                  {(Object.keys(getPriceMap.strategy) as StrategyKey[]).map(
                    (label) => (
                      <Selector
                        key={label}
                        label={label}
                        checked={selectedStrategy.includes(label)}
                        onChange={() =>
                          toggleSelection(setSelectedStrategy, label)
                        }
                      />
                    )
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Content Creation
                </h3>
                <div className="space-y-3">
                  {(Object.keys(getPriceMap.content) as ContentKey[]).map(
                    (label) => (
                      <Selector
                        key={label}
                        label={label}
                        checked={selectedContent.includes(label)}
                        onChange={() =>
                          toggleSelection(setSelectedContent, label)
                        }
                      />
                    )
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Community Management
                </h3>
                <select
                  className="min-w-[15em] border border-gray-300 rounded-lg py-2 px-4 text-gray-700"
                  value={communityManagement}
                  onChange={(e) =>
                    setCommunityManagement(e.target.value as CommunityKey)
                  }
                >
                  {(Object.keys(getPriceMap.community) as CommunityKey[]).map(
                    (level) => (
                      <option key={level} value={level}>
                        {level.charAt(0).toUpperCase() + level.slice(1)}
                      </option>
                    )
                  )}
                </select>
              </div>

              {/* Contract Length */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Contract Length
                </h3>
                <div className="flex gap-4">
                  {[
                    { label: "Monthly", desc: "No discount" },
                    { label: "3 Months", desc: "10% discount" },
                    { label: "6 Months", desc: "20% discount" },
                  ].map((item, idx) => (
                    <BoxSelector
                      key={item.label}
                      isSelected={selectedContractLength === idx}
                      onClick={() => setContractLengthIndex(idx)}
                    >
                      <h1 className="text-base font-semibold">{item.label}</h1>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </BoxSelector>
                  ))}
                </div>
              </div>
            </div>
          </Box>
        </section>

        {/* Platform & Estimate Section */}
        <section className="flex-1 space-y-10">
          <Box className="border border-gray-100 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-8 text-gray-900">
              Platforms
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                "Facebook",
                "Instagram",
                "YouTube",
                "LinkedIn",
                "TikTok",
                "Pinterest",
              ].map((label, idx) => (
                <BoxSelector
                  key={label}
                  className="flex flex-col items-center justify-center gap-1 p-6 h-[120px] transition-shadow hover:shadow-md rounded-lg"
                  isSelected={selectedPlatforms.includes(idx)}
                  onClick={() =>
                    setSelectedPlatforms((prev) =>
                      prev.includes(idx)
                        ? prev.filter((i) => i !== idx)
                        : [...prev, idx]
                    )
                  }
                >
                  <div className="flex flex-col items-center justify-center gap-1 p-6 h-[120px]">
                    <div className="flex items-center justify-center w-14 h-14">
                      {platformIcons[label]}
                    </div>
                    <h3 className="text-base font-semibold">{label}</h3>
                    <p className="text-sm text-gray-500">
                      {getCurrencySymbol()}
                      {convertPrice(getPriceMap.platforms[idx])}
                    </p>
                  </div>
                </BoxSelector>
              ))}
            </div>

            <div className="mt-10">
              <label className="block text-gray-700 font-semibold mb-3">
                Posts Per Week
              </label>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-500">1</span>
                <span className="text-blue-600 font-bold">{postValue}</span>
                <span className="text-gray-500">7</span>
              </div>
              <input
                type="range"
                min={1}
                max={7}
                value={postValue}
                onChange={(e) => setPostValue(Number(e.target.value))}
                className="w-full accent-blue-600"
              />
            </div>

            {/* Pricing Estimate Box */}
            <div className="bg-black text-white rounded-xl p-8 space-y-6 mt-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold">
                    Your Estimated Monthly Price
                  </h2>
                  <p className="text-sm text-gray-300">
                    Based on your selections
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold">
                    {getCurrencySymbol()}
                    {currency === "USD"
                      ? finalPrice
                      : Math.round(finalPrice * USD_TO_ZAR)}
                  </span>
                  <p className="text-xs text-gray-400">
                    {contractLength} discount
                  </p>
                </div>
              </div>
              <CustomButton
                onClick={handleContinue}
                className="w-full py-3 text-lg font-semibold"
              >
                Get Your Quote
              </CustomButton>
            </div>
          </Box>
        </section>
      </main>
    </div>
  );
}

export default Calculator;
