
import { Data } from "@/lib/sidebar"
import { create } from "zustand"


type ActveItem = {
    sidebarActiveItem: string | number
    headerActiveItem: string | number
    setActiveitem: (data: number | string) => void
    setHeaderActiveitem: (data: number | string) => void
}

export const useActiveItemStore = create<ActveItem>((set) => ({
    sidebarActiveItem: Data.menu[0].title,
    headerActiveItem: Data.services[0].lable,
    setActiveitem: (data) => set({sidebarActiveItem: data}), 
    setHeaderActiveitem: (data) => set({headerActiveItem: data}) 
}))