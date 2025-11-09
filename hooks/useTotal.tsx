import { useEffect, useState } from "react";
import { useCalculator } from "@/store/useCalculatorStore";
import { usePost } from "@/store/usePostStore";

// Map country codes to currency and locale
const countryToCurrencyLocale: Record<string, { currency: string; locale: string }> = {
  ZA: { currency: "ZAR", locale: "en-ZA" },
  US: { currency: "USD", locale: "en-US" },
  GB: { currency: "GBP", locale: "en-GB" },
  EU: { currency: "EUR", locale: "en-IE" },
};

export const useTotal = () => {
  const { finalValue, selectedContract } = useCalculator();
  const { currentValue } = usePost();

  const baseTotal = finalValue * currentValue;
  const discountTotal = baseTotal * (selectedContract?.discount ?? 0);
  const total = selectedContract
    ? baseTotal * (1 - selectedContract.discount)
    : baseTotal;

  const [currency, setCurrency] = useState("USD");
  const [country, setCountry] = useState("United States");
  const [locale, setLocale] = useState("en-US");
  const [rate, setRate] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCurrency() {
      try {
        // Get user country
        const res = await fetch("https://ipwho.is/");
        const data = await res.json();
        const countryCode = data.country_code || "US";
        const countryName = data.country || "United States";

        const { currency: userCurrency, locale: userLocale } =
          countryToCurrencyLocale[countryCode] || {
            currency: "USD",
            locale: "en-US",
          };

        // Fetch latest exchange rate
        const rateRes = await fetch(`https://open.er-api.com/v6/latest/USD`);
        const rateData = await rateRes.json();
        const exchangeRate = rateData.rates[userCurrency] ?? 1;

        setCountry(countryName);
        setCurrency(userCurrency);
        setLocale(userLocale);
        setRate(exchangeRate);
      } catch (error) {
        console.error("Currency fetch failed", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCurrency();
  }, []);

  const formatPrice = (amountUSD: number) => {
    if (isLoading) return ""; // prevent showing wrong value
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    }).format(amountUSD * rate);
  };

  const convertPrice = (amountUSD: number) => amountUSD * rate;

  return {
    total,
    baseTotal,
    discountTotal,
    currency,
    country,
    locale,
    rate,
    isLoading,
    formatPrice,
    convertPrice,
    formatted: {
      total: formatPrice(total),
      baseTotal: formatPrice(baseTotal),
      discountTotal: formatPrice(discountTotal),
    },
  };
};
