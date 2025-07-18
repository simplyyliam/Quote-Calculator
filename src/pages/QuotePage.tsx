import { QuoteButton } from "../components/QuoteButton";
import { QuoteSection } from "../components/QuoteSection";
import { useCalculator } from "../libs/useCalculator";
import { formatCurrency } from "../libs/FormatCurrency";
import { useNavigate } from "react-router-dom";

export default function QuotePage() {
  const {
    selectedServices,
    subtotal,
    discount,
    totalPrice,
    currency,
    contractLength,
    postsPerWeek,
    platforms,
  } = useCalculator().data;

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };
  const handleRequestConsultant = () => {
    navigate("/quote-form");
  };

  // Dummy price map for example - replace with your actual prices or pass them via context if possible
  const priceMap = {
    platforms: {
      Facebook: 150,
      Instagram: 220,
      YouTube: 250,
      LinkedIn: 175,
      TikTok: 225,
      Pinterest: 100,
    },
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
  };

  // Separate selected services by category
  const platformItems = platforms.map((platform) => ({
    name: platform,
    unitPrice:
      priceMap.platforms[platform as keyof typeof priceMap.platforms] || 0,
    totalPrice:
      (priceMap.platforms[platform as keyof typeof priceMap.platforms] || 0) *
      postsPerWeek,
  }));

  const strategyItems = selectedServices
    .filter((s) => Object.keys(priceMap.strategy).includes(s))
    .map((name) => ({
      name,
      price: priceMap.strategy[name as keyof typeof priceMap.strategy],
    }));

  const contentItems = selectedServices
    .filter((s) => Object.keys(priceMap.content).includes(s))
    .map((name) => ({
      name,
      price: priceMap.content[name as keyof typeof priceMap.content],
    }));

  // Find community service, default none if none selected
  const communityName =
    selectedServices.find((s) => Object.keys(priceMap.community).includes(s)) ||
    "none";
  const communityPrice =
    priceMap.community[communityName as keyof typeof priceMap.community];

  // Calculate totals per section
  const platformTotal = platformItems.reduce((acc, i) => acc + i.totalPrice, 0);
  const strategyTotal = strategyItems.reduce((acc, i) => acc + i.price, 0);
  const contentTotal = contentItems.reduce((acc, i) => acc + i.price, 0);

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Your Quote Summary</h1>

      {/* Platforms Section */}
      <QuoteSection>
        <h3 className="font-medium text-lg mb-2">Platforms</h3>
        {platformItems.length === 0 ? (
          <p className="text-black/50 text-sm">No platforms selected</p>
        ) : (
          <ul className="list-disc list-inside text-[14px] text-black/50">
            {platformItems.map(({ name, unitPrice, totalPrice }) => (
              <li key={name} className="flex justify-between">
                <div>
                  {name}: {formatCurrency(unitPrice, currency)} × {postsPerWeek}{" "}
                  post
                  {postsPerWeek > 1 ? "s" : ""}
                </div>
                <div>{formatCurrency(totalPrice, currency)}</div>
              </li>
            ))}
            <li className="font-semibold flex justify-between mt-2 border-t pt-2 text-black">
              <span>Total Platforms</span>
              <span>{formatCurrency(platformTotal, currency)}</span>
            </li>
          </ul>
        )}
      </QuoteSection>

      {/* Strategy Section */}
      <QuoteSection>
        <h3 className="font-medium text-lg mb-2">Strategy & Reporting</h3>
        {strategyItems.length === 0 ? (
          <p className="text-black/50 text-sm">No strategies selected</p>
        ) : (
          <ul className="list-disc list-inside text-[14px] text-black/50">
            {strategyItems.map(({ name, price }) => (
              <li key={name} className="flex justify-between">
                <div>{name}</div>
                <div>{formatCurrency(price, currency)}</div>
              </li>
            ))}
            <li className="font-semibold flex justify-between mt-2 border-t pt-2 text-black">
              <span>Total Strategy</span>
              <span>{formatCurrency(strategyTotal, currency)}</span>
            </li>
          </ul>
        )}
      </QuoteSection>

      {/* Content Section */}
      <QuoteSection>
        <h3 className="font-medium text-lg mb-2">Content Creation</h3>
        {contentItems.length === 0 ? (
          <p className="text-black/50 text-sm">No content selected</p>
        ) : (
          <ul className="list-disc list-inside text-[14px] text-black/50">
            {contentItems.map(({ name, price }) => (
              <li key={name} className="flex justify-between">
                <div>{name}</div>
                <div>{formatCurrency(price, currency)}</div>
              </li>
            ))}
            <li className="font-semibold flex justify-between mt-2 border-t pt-2 text-black">
              <span>Total Content</span>
              <span>{formatCurrency(contentTotal, currency)}</span>
            </li>
          </ul>
        )}
      </QuoteSection>

      {/* Community Section */}
      <QuoteSection>
        <h3 className="font-medium text-lg mb-2">Community Management</h3>
        <div className="flex justify-between text-black/50 text-[14px]">
          <span>
            {communityName.charAt(0).toUpperCase() + communityName.slice(1)}
          </span>
          <span>{formatCurrency(communityPrice, currency)}</span>
        </div>
      </QuoteSection>

      {/* Plan Details Section */}
      <QuoteSection>
        <h3 className="font-medium text-lg mb-2">Plan Details</h3>
        <ul className="text-[14px] text-black/50 space-y-1">
          <li>
            <span className="font-medium">Posts per week:</span> {postsPerWeek}
          </li>
          <li>
            <span className="font-medium">Contract length:</span>{" "}
            {typeof contractLength === "number"
              ? `${contractLength} ${contractLength === 1 ? "month" : "months"}`
              : contractLength}
          </li>
        </ul>
      </QuoteSection>

      {/* Pricing Breakdown */}
      <QuoteSection>
        <h3 className="font-medium text-lg mb-2">Quote Summary</h3>
        <div className="text-[14px] text-black/50 space-y-1">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>{formatCurrency(subtotal, currency)}</span>
          </div>
          <div className="flex justify-between text-red-500">
            <span>Discount:</span>
            <span>-{formatCurrency(discount, currency)}</span>
          </div>
          <div className="border-t border-black/10 pt-2 flex justify-between font-semibold text-black">
            <span>Total Price:</span>
            <span>{formatCurrency(totalPrice, currency)}</span>
          </div>
        </div>
      </QuoteSection>

      {/* Back Button */}
      <div className="mt-6 flex justify-center">
        <QuoteButton
          className="bg-[#608ff5] text-white"
          onClick={handleRequestConsultant}
        >
          Reqeust Consultant
        </QuoteButton>
        <QuoteButton onClick={handleBack}>Modify Quote</QuoteButton>
      </div>
    </div>
  );
}
