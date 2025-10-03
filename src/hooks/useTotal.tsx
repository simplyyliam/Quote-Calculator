import { useCalculator, useStepper } from "../store";

export const useTotal = () => {
  const { finalValue, selectedContract } = useCalculator();
  const { initialValue } = useStepper();

  const baseTotal = finalValue * initialValue;

  const total = selectedContract ? baseTotal * (1 - selectedContract.discount) : baseTotal


  return { total };
};
