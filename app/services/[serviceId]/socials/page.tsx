"use client";

import { Button } from "@/components/ui/button";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { useState } from "react";

export default function Page() {
  const [toggle, setToggle] = useState(0);

  return (
    <>
      <ResizablePanelGroup
        direction="horizontal"
        className="flex items-center justify-center w-full h-full"
      >
        <ResizablePanel defaultSize={50} className="h-full">
          <div className="flex items-center justify-center h-full bg-stone-100">
            Left Penal
          </div>
        </ResizablePanel>
        <ResizableHandle />
        {toggle > 0 && (
          <ResizablePanel
            key={toggle}
            defaultSize={toggle === 0 ? 0 : 50}
            className="h-full transition-all duration-300"
          >
            <div className="flex items-center justify-center h-full bg-stone-200">
              Right Panel
            </div>
          </ResizablePanel>
        )}
      </ResizablePanelGroup>

      <Button
        onClick={() => setToggle(toggle === 0 ? 50 : 0)}
        variant="outline"
        className="absolute bottom-5 right-5 cursor-pointer"
      >
        Preview
      </Button>
    </>
  );
}
