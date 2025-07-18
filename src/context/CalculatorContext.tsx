import { createContext, useState, useEffect, type ReactNode } from "react";

type CalculatorData = {
  selectedServices: string[];
  subtotal: number;
  discount: number;
  totalPrice: number;
  currency: string;
  contractLength: number | string;
  postsPerWeek: number;
  platforms: string[];
};

type CalculatorContextType = {
  data: CalculatorData;
  setData: React.Dispatch<React.SetStateAction<CalculatorData>>;
};

const defaultData: CalculatorData = {
  selectedServices: [],
  subtotal: 0,
  discount: 0,
  totalPrice: 0,
  currency: "USD",
  contractLength: 1,
  postsPerWeek: 1,
  platforms: [],
};

// eslint-disable-next-line react-refresh/only-export-components
export const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);

export const CalculatorProvider = ({ children }: { children: ReactNode }) => {
  // Load saved data on initial render only
  const [data, setData] = useState<CalculatorData>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("calculatorData");
        if (saved) return JSON.parse(saved);
      } catch {
        // ignore JSON parse errors, fallback to defaultData
      }
    }
    return defaultData;
  });

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("calculatorData", JSON.stringify(data));
    }
  }, [data]);

  return (
    <CalculatorContext.Provider value={{ data, setData }}>
      {children}
    </CalculatorContext.Provider>
  );
};
