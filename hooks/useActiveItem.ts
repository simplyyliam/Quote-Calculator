"use client"

import { Data } from "@/lib/sidebar"
import { useState } from "react"

export function useActiveItem() {
  // Default to the first menu item
  const [activeItem, setActiveItemState] = useState(Data.menu[0].title)

  // Custom setter that takes a string (title)
  const setActiveItem = (title: string) => {
    const foundItem = Data.menu.find(item => item.title === title)
    if (foundItem) {
      setActiveItemState(foundItem.title)
      console.log("Active Item:", activeItem)
    } else {
      console.warn(`No menu item found with title: ${title}`)
    }
  }

  return { activeItem, setActiveItem }
}
