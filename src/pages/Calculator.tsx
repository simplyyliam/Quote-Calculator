// Refactored Calculator Component with cleaner UI and Apple-inspired premium styling
import { useEffect, useState, useCallback, useRef } from "react";
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
import { QuoteModal } from "../components/QuoteModal";
import { QuoteSection } from "../components/QuoteSection";
import { QuoteButton } from "../components/QuoteButton";
import emailjs from "@emailjs/browser";

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

  type StrategyKey = keyof typeof getPriceMap.strategy;
  type ContentKey = keyof typeof getPriceMap.content;
  type CommunityKey = keyof typeof getPriceMap.community;

  const [finalPrice, setFinalPrice] = useState<number>(0);
  const [currency, setCurrency] = useState<"USD" | "ZAR">("USD");
  const [isModalOpen, setModalOpen] = useState(false);
  const [subtotal, setSubtotal] = useState<number>(0);
  const [discountAmount, setDiscountAmount] = useState<number>(0);

  const [isConsultationModalOpen, setConsultationModalOpen] = useState(false);

  const USD_TO_ZAR = 18.5;

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

  const getPriceMap = {
    platforms: [150, 220, 250, 175, 225, 100],
    strategy: {
      "Social Media Strategy": 100,
      "Competitor Analysis": 80,
      "Monthly Performance Reports": 70,
    },
    content: {
      "Custom Graphics": 150,
      Copywriting: 120,
      Photography: 200,
    },
    community: {
      none: 0,
      basic: 100,
      standard: 200,
      premium: 300,
    },
  } as const;

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
    getPriceMap.community,
    getPriceMap.content,
    getPriceMap.platforms,
    getPriceMap.strategy,
    communityManagement,
    postValue,
    selectedContent,
    selectedContractLength,
    selectedPlatforms,
    selectedStrategy,
  ]);

  useEffect(() => {
    calculateTotal();
  }, [calculateTotal]);

  const platformDetails = selectedPlatforms.map((idx) => {
    const name = [
      "Facebook",
      "Instagram",
      "YouTube",
      "LinkedIn",
      "TikTok",
      "Pinterest",
    ][idx];
    const unitPrice = getPriceMap.platforms[idx];
    const totalPrice = unitPrice * postValue;
    return { name, unitPrice, totalPrice };
  });

  const strategyDetails = selectedStrategy.map((key) => ({
    name: key,
    price: getPriceMap.strategy[key],
  }));

  const contentDetails = selectedContent.map((key) => ({
    name: key,
    price: getPriceMap.content[key],
  }));

  const communityDetail = {
    name:
      communityManagement.charAt(0).toUpperCase() +
      communityManagement.slice(1),
    price: getPriceMap.community[communityManagement],
  };

  // const discountText = contractLength; // e.g. "10% discount"

  function handleRequestConsultation() {
    setModalOpen(false); // Close quote modal
    setConsultationModalOpen(true); // Open consultation modal
  }

  // function handleModifyQuote() {
  //   setModalOpen(false);
  // }

  const platformIcons: Record<string, JSX.Element> = {
    Facebook: <FaFacebookF className="text-blue-600" size={24} />,
    Instagram: <FaInstagram className="text-pink-500" size={24} />,
    YouTube: <FaYoutube className="text-red-600" size={24} />,
    LinkedIn: <FaLinkedinIn className="text-blue-700" size={24} />,
    TikTok: <FaTiktok className="text-black" size={24} />,
    Pinterest: <FaPinterestP className="text-red-500" size={24} />,
  };

  const formRef = useRef<HTMLFormElement | null>(null);
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  function sendEmail(e: React.FormEvent) {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
      () => {
        alert("Message sent successfully!");
        setConsultationModalOpen(false);
        formRef.current?.reset();
      },
      (error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Please try again later.");
      }
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] pt-5 font-sans">
      <main className="max-w-6xl mx-auto py-12 px-4 flex flex-col md:flex-row gap-10">
        <section className="flex-1 space-y-8">
          <Box className="bg-white shadow-lg rounded-3xl p-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-900">
                Configuration
              </h2>
              <CurrencyToggle currency={currency} onChange={setCurrency} />
            </div>

            <div className="space-y-8">
              {/* Strategy & Reporting */}
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
                          toggleSelection<StrategyKey>(
                            setSelectedStrategy,
                            label
                          )
                        }
                      />
                    )
                  )}
                </div>
              </div>

              {/* Content Creation */}
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
                          toggleSelection<ContentKey>(setSelectedContent, label)
                        }
                      />
                    )
                  )}
                </div>
              </div>

              {/* Community Management */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Community Management
                </h3>
                <select
                  className="w-full border border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
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
                      className="transition-colors duration-200"
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

        <section className="flex-1 space-y-10">
          <Box className="bg-white shadow-lg rounded-3xl p-8">
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
                  <div
                    className={`flex items-center justify-center w-14 h-14 transition-transform duration-200 ${
                      selectedPlatforms.includes(idx)
                        ? "text-gray-700 scale-105"
                        : "text-gray-400"
                    } hover:scale-105`}
                  >
                    {platformIcons[label]}
                  </div>
                  <h3
                    className={`text-base font-semibold transition-colors duration-200 ${
                      selectedPlatforms.includes(idx)
                        ? "text-gray-900"
                        : "text-gray-800 hover:text-gray-900"
                    }`}
                  >
                    {label}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {getCurrencySymbol()}
                    {convertPrice(getPriceMap.platforms[idx])}
                  </p>
                </BoxSelector>
              ))}
            </div>

            <div className="mt-10">
              <label
                htmlFor="postsRange"
                className="block text-gray-700 font-semibold mb-3"
              >
                Posts Per Week
              </label>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-500 text-sm font-medium">1</span>
                <span className="text-blue-600 font-semibold text-lg">
                  {postValue}
                </span>
                <span className="text-gray-500 text-sm font-medium">7</span>
              </div>
              <input
                id="postsRange"
                type="range"
                min={1}
                max={7}
                value={postValue}
                onChange={(e) => setPostValue(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
            </div>

            <div className="bg-gray-900 text-white rounded-xl p-8 space-y-6 shadow-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold tracking-wide">
                    Your Estimated Monthly Price
                  </h2>
                  <p className="text-sm text-gray-300 mt-1">
                    Based on your selections
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-semibold tracking-tight">
                    {getCurrencySymbol()}
                    {currency === "USD"
                      ? finalPrice
                      : Math.round(finalPrice * USD_TO_ZAR)}
                  </span>
                  <p className="text-xs text-gray-400 mt-1">
                    {contractLength} discount
                  </p>
                </div>
              </div>
              <CustomButton
                onClick={() => setModalOpen(true)}
                className="w-full py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg"
              >
                Get Your Quote
              </CustomButton>
            </div>
          </Box>
        </section>

        {isModalOpen && (
          <QuoteModal onClose={() => setModalOpen(false)}>
            <h2 className="text-xl font-semibold mb-4">Quote Summary</h2>

            <div className="space-y-4 p-2.5 max-h-[60vh] overflow-y-auto">
              {/* Platforms */}
              <QuoteSection>
                <h3 className="font-medium text-lg mb-2">Platforms</h3>
                {platformDetails.length === 0 && (
                  <p className="text-black/35">No platforms selected</p>
                )}
                <ul className="list-disc list-inside">
                  {platformDetails.map(({ name, unitPrice, totalPrice }) => (
                    <li
                      key={name}
                      className="flex justify-between text-[14px] "
                    >
                      <div className="flex gap-2 text-black/50">
                        <span className="gap-3">{name} -</span>
                        <span>
                          {convertPrice(unitPrice)} × {postValue} post/week
                        </span>
                      </div>
                      <span className="text-[16px]">
                        {getCurrencySymbol()}
                        {convertPrice(totalPrice)}
                      </span>
                    </li>
                  ))}
                </ul>
              </QuoteSection>

              {/* Strategies */}
              <QuoteSection>
                <h3 className="font-medium text-lg mb-2">
                  Strategy & Reporting
                </h3>
                {strategyDetails.length === 0 && (
                  <p className="text-gray-500">No strategies selected</p>
                )}
                <ul className="list-disc list-inside">
                  {strategyDetails.map(({ name, price }) => (
                    <li key={name} className="flex justify-between text-[14px]">
                      <span className="text-black/50">{name}</span>
                      <span className="text-[16px]">
                        {getCurrencySymbol()}
                        {convertPrice(price)}
                      </span>
                    </li>
                  ))}
                </ul>
              </QuoteSection>

              {/* Content Creation */}
              <QuoteSection>
                <h3 className="font-medium text-lg mb-2">Content Creation</h3>
                {contentDetails.length === 0 && (
                  <p className="text-gray-500">No content selected</p>
                )}
                <ul className="list-disc list-inside">
                  {contentDetails.map(({ name, price }) => (
                    <li key={name} className="flex justify-between text-[14px]">
                      <span className="text-black/50">{name}</span>
                      <span className="text-[16px]">
                        {getCurrencySymbol()}
                        {convertPrice(price)}
                      </span>
                    </li>
                  ))}
                </ul>
              </QuoteSection>

              {/* Community Management */}
              <QuoteSection>
                <h3 className="font-medium text-lg mb-2">
                  Community Management
                </h3>
                <div className="flex justify-between">
                  <span className="text-[14px] text-black/50">
                    {communityDetail.name}
                  </span>
                  <span className="text-[16px]">
                    {getCurrencySymbol()}
                    {convertPrice(communityDetail.price)}
                  </span>
                </div>
              </QuoteSection>

              {/* Footer */}
              <QuoteSection className="pt-4 border-t-1 border-black/10 mt-4 flex flex-col font-semibold text-xl">
                <div className="flex flex-col font-medium text text-[14px] text-black/50">
                  <span className="flex items-center justify-between py-2.5">
                    <span>Subtotal</span>
                    <span>
                      {getCurrencySymbol()}
                      {currency === "USD"
                        ? subtotal
                        : Math.round(subtotal * USD_TO_ZAR)}
                    </span>
                  </span>
                  <span className="flex items-center justify-between py-2.5">
                    <span>Discount</span>
                    <span className="text-red-500">
                      -{getCurrencySymbol()}
                      {currency === "USD"
                        ? discountAmount
                        : Math.round(discountAmount * USD_TO_ZAR)}
                    </span>
                  </span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center justify-between py-2.5">
                    <span>Monthly Total:</span>
                    <span>
                      {getCurrencySymbol()}
                      {currency === "USD"
                        ? finalPrice
                        : Math.round(finalPrice * USD_TO_ZAR)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <QuoteButton
                      onClick={handleRequestConsultation}
                      className="bg-[#608ff5] text-white"
                    >
                      Request Consultant
                    </QuoteButton>
                    <QuoteButton onClick={() => setModalOpen(false)}>
                      Modify Quote
                    </QuoteButton>
                  </div>
                </div>
              </QuoteSection>
            </div>
          </QuoteModal>
        )}

        {isConsultationModalOpen && (
          <QuoteModal onClose={() => setConsultationModalOpen(false)}>
            <h2 className="text-xl font-semibold mb-4">
              Request a Consultation
            </h2>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="user_email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Let us know what you're looking for..."
                  required
                ></textarea>
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setConsultationModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  Send Request
                </button>
              </div>
            </form>
          </QuoteModal>
        )}
      </main>
    </div>
  );
}

export default Calculator;
