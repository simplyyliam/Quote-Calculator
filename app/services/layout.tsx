'use client'

import { Sidebar } from "@/components/custom/sidebar";
import { useActiveItemStore } from "@/store/ActiveItemStore";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { headerActiveItem } = useActiveItemStore()
  return (
    <main className="flex w-screen h-screen">
      <div className="flex w-fit">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full h-full">
        <header className="flex items-center w-full p-2.5">
          <div className="flex gap-2 items-center">
            <span className="w-6 h-6 bg-accent rounded-sm" ></span>
            {headerActiveItem}
          </div>
        </header>
        <div className="flex w-full h-full">{children}</div>
      </div>
    </main>
  );
}
