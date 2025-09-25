import { useCalculator, useStepper } from "../store";

export const useTotal = () => {
  const { finalValue } = useCalculator();
  const { initialValue } = useStepper();

  const total = finalValue * initialValue;

  return { total };
};
