import { create } from "zustand";

type PostStore = {
    currentValue: number
    setCurrentValue: (value: number) => void
}

export const usePost = create<PostStore>((set) => ({
    currentValue: 1,
    setCurrentValue: (value) => set(() => ({currentValue: value}))
}))