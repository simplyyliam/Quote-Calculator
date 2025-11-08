
import { Data } from "@/lib/sidebar"
import { create } from "zustand"


type ActveItem = {
    activeItem: string | number
    setActiveitem: (data: number | string) => void
}

export const useActiveItemStore = create<ActveItem>((set) => ({
    activeItem: Data.menu[0].title,
    setActiveitem: (data) => set({activeItem: data}) 
}))