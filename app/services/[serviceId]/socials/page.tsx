"use client";

import { Invoice, SocialMediaService } from "@/app/page-views";
import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useTotal } from "@/hooks";

import { useState } from "react";

export default function Page() {
  const [toggle, setToggle] = useState(80);
  const { total } = useTotal()
  const { formatPrice } = useTotal(); // <-- useTotal hook

  return (
    <>
      <ResizablePanelGroup
        direction="horizontal"
        className="flex items-center justify-center w-full h-full"
      >
        <ResizablePanel defaultSize={50} className="h-full">
          <SocialMediaService />
        </ResizablePanel>
        <ResizableHandle />
        {toggle > 0 && (
          <ResizablePanel
            defaultSize={toggle === 0 ? 0 : 80}
            className="h-full"
          >
            <Invoice />
          </ResizablePanel>
        )}
      </ResizablePanelGroup>

      <Button
        onClick={() => setToggle(toggle === 0 ? 80 : 0)}
        variant="outline"
        className="absolute bottom-5 right-5 cursor-pointer"
      >
        <span> {formatPrice(total)} Preview</span>
      </Button>
    </>
  );
}
