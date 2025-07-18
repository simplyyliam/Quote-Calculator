export type CalculatorData = {
  selectedServices: string[];
  subtotal: number;
  discount: number;
  totalPrice: number;
  currency: string;
  contractLength: number | string;
  postsPerWeek: number;
  platforms: string[];
};

export type CalculatorContextType = {
  data: CalculatorData;
  setData: React.Dispatch<React.SetStateAction<CalculatorData>>;
};

export const defaultData: CalculatorData = {
  selectedServices: [],
  subtotal: 0,
  discount: 0,
  totalPrice: 0,
  currency: "USD",
  contractLength: 1,
  postsPerWeek: 1,
  platforms: [],
};
