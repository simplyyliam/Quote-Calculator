import { create } from "zustand";


type Option = {
    optionId: string
    price: number
}


type SelectedItem = {
    titleId: string,
    options: Option[]
}

type CalculatorStore = {

    //States
    finalValue: number, //Stores the final value of all items
    selectedItems: SelectedItem[]
    selectedContract: {months: number, discount: number} | null

    //Actions
    toggleOption: (titleId: string, option: Option) => void
    setContract: (contract: {months: number, discount: number }) => void
}

export const useCalculator = create<CalculatorStore>((set) => ({
    finalValue: 0,
    selectedItems: [],
    toggleOption: (titleId, option) =>
        set((s) => {
            let updatedItem = [...s.selectedItems]
            const item = updatedItem.find((i) => i.titleId === titleId)

            if (!item) {
                updatedItem.push({ titleId, options: [option] })
                return {
                    selectedItems: updatedItem,
                    finalValue: s.finalValue + option.price
                }
            }


            const optionExists = item.options.find((i) => i.optionId === option.optionId)
            if (optionExists) {
                item.options = item.options.filter((i) => i.optionId !== option.optionId)
                if (item.options.length === 0) {
                    updatedItem = updatedItem.filter((i) => i.titleId !== titleId)
                }
                return {
                    selectedItems: updatedItem,
                    finalValue: s.finalValue - option.price
                }
            } else {
                item.options.push(option)
                return {
                    selectedItems: updatedItem,
                    finalValue: s.finalValue + option.price
                }
            }
        }),
        selectedContract: null,
        setContract: (contract) => set({selectedContract: contract})
}))