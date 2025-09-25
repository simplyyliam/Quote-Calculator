import { create } from "zustand";

type StepperStore = {
    initialValue: number,
    increment: () => void,
    decrement: () => void,
}

export const useStepper = create<StepperStore>((set, get) => ({
    initialValue: 1,
    increment: () => {
        const { initialValue } = get()
        if (initialValue >= 7) {
            return initialValue
        }
        const newStep = initialValue + 1
        set({initialValue: newStep})
     
    },
    decrement: () => {
        const { initialValue } = get()
        if (initialValue <= 1) {
            return initialValue
        }
        const newStep = initialValue - 1
        set({initialValue: newStep})
 
    },
}))