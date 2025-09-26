import { create } from "zustand";


type ToggleStore = {
    //State
    toggle: boolean

    //Action
    setToggle: () => void
}

export const useToggle = create<ToggleStore>((set) => ({
    toggle: false,
    setToggle: () => set((s) => ({toggle: !s.toggle}))
}))