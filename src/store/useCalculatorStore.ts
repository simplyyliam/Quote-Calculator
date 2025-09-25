import { create } from "zustand";


type CalculatorStore = {
    //Actions
    finalValue: number, //Stores the final value of all items
    getVlaue: (id: string, price: number) => void //Gets the value of individual items

    //States
    selected: string[] //Checks if an item is selected or not
}

export const useCalculator = create<CalculatorStore>((set) => ({
    finalValue: 0,
    selected: [],
    getVlaue(id, price) {
        set((s) => {
            if(s.selected.includes(id)) {
                return {
                    selected: s.selected.filter((x) => x !== id), //This checks whether an id is included inside the selected array. If it is, then filter it out since it has been already selected if clicked again.
                    finalValue: s.finalValue - price
                }
            }

            return {
                selected: [...s.selected, id], //This method spreads out all the previous selected items + the new selected items.
                finalValue: s.finalValue + price
            }
        })
    },
}))