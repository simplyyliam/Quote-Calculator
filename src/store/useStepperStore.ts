import { create } from "zustand";


type StepperStore = {
    initialValue: number,
    increment: () => void,
    decrement: () => void
}

export const useStepper = create<StepperStore>((set, get) => ({
    initialValue: 0,
    increment: () => {
        const { initialValue } = get()
        if (initialValue >= 7) {
            return initialValue 
        }
        set({ initialValue: initialValue + 1 })
    },
    decrement: () => {
        const { initialValue } = get()
        if (initialValue <= 0) {
            return initialValue
        }
        set({ initialValue: initialValue - 1 })
    }
}))