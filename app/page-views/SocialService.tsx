import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { SocialServices } from "@/lib/services/SocialServiceData";
import { useEffect, useRef, useState } from "react";

const group_one = SocialServices.filter((f) => f.order !== 3);
const platforms = SocialServices.filter((f) => f.order === 3);

export default function SocialMediaService() {
  const [isCompact, setIsCompact] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      setIsCompact(width < 900);
    });

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col w-full h-screen overflow-hidden"
    >
      {/* Scrollable content area */}
      <div className="flex-1 overflow-y-auto px-5 py-4">
        <div
          className={`${
            isCompact
              ? "flex flex-wrap justify-center" 
              : "columns-1 sm:columns-2 lg:columns-3"
          } gap-3`}
        >
          {[...group_one, ...platforms].map((s) => (
            <Card
              key={s.id}
              className="mb-3 w-full h-90 break-inside-avoid border shadow-none rounded-2xl bg-white gap-2.5"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold">
                  {s.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {s.Subtitle}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col gap-1.5">
                {s.options.map((o) => (
                  <Button
                    key={o.id}
                    variant="ghost"
                    className="flex items-center justify-start gap-2 cursor-pointer w-full text-left hover:bg-muted/40"
                  >
                    <Checkbox id={o.id} />
                    <Label htmlFor={o.id} className="cursor-pointer text-sm">
                      {o.lable}
                    </Label>
                  </Button>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
