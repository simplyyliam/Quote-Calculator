import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTotal } from "@/hooks";
import { SocialServices } from "@/lib/services/SocialServiceData";
import { useCalculator } from "@/store/useCalculatorStore";
import { usePost } from "@/store/usePostStore";
import { useEffect, useRef, useState } from "react";

const strategy = SocialServices.filter((f) => f.order === 0);
const content = SocialServices.filter((f) => f.order === 1);
const community = SocialServices.filter((f) => f.order === 2);
const platforms = SocialServices.filter((f) => f.order === 3);
const contract = SocialServices.filter((f) => f.order === 4);

export default function SocialMediaService() {
  const [isCompact, setIsCompact] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { toggleOption, selectedItems, selectedContract, setContract } =
    useCalculator();
  const { currentValue } = usePost();

  const { formatPrice, isLoading } = useTotal(); // <-- useTotal hook

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
          {strategy.map((s) => (
            <Card
              key={s.id}
              className="mb-3 w-full h-fit break-inside-avoid border shadow-none rounded-2xl bg-white gap-2.5"
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
                {s.options.map((opt) => {
                  const isSelected = selectedItems.some(
                    (item) =>
                      item.titleId === s.title &&
                      item.options.some((o) => o.optionId === opt.lable)
                  );

                  return (
                    <Button
                      key={opt.id}
                      variant="ghost"
                      onClick={() =>
                        toggleOption(s.title, {
                          optionId: opt.lable,
                          price: opt.price ?? 0,
                        })
                      }
                      className={`flex items-center justify-start gap-2 cursor-pointer w-full text-left hover:bg-muted/40 ${
                        isSelected ? "bg-accent" : ""
                      }`}
                    >
                      <div className="flex w-full items-center justify-between">
                        {opt.lable}

                        <span>{formatPrice(opt.price ?? 0)}</span>
                      </div>
                    </Button>
                  );
                })}
              </CardContent>
            </Card>
          ))}
          {content.map((s) => (
            <Card
              key={s.id}
              className="mb-3 w-full h-fit break-inside-avoid border shadow-none rounded-2xl bg-white gap-2.5"
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
                {s.options.map((opt) => {
                  const isSelected = selectedItems.some(
                    (item) =>
                      item.titleId === s.title &&
                      item.options.some((o) => o.optionId === opt.lable)
                  );

                  return (
                    <Button
                      key={opt.id}
                      variant="ghost"
                      onClick={() =>
                        toggleOption(s.title, {
                          optionId: opt.lable,
                          price: opt.price ?? 0,
                        })
                      }
                      className={`flex items-center justify-start gap-2 cursor-pointer w-full text-left hover:bg-muted/40 ${
                        isSelected ? "bg-accent" : ""
                      }`}
                    >
                      <div className="flex w-full items-center justify-between">
                        {opt.lable}

                        <span>{formatPrice(opt.price ?? 0)}</span>
                      </div>
                    </Button>
                  );
                })}
              </CardContent>
            </Card>
          ))}
          {community.map((s) => (
            <Card
              key={s.id}
              className="mb-3 w-full h-fit break-inside-avoid border shadow-none rounded-2xl bg-white gap-2.5"
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
                {s.options.map((opt) => {
                  const isSelected = selectedItems.some(
                    (item) =>
                      item.titleId === s.title &&
                      item.options.some((o) => o.optionId === opt.lable)
                  );

                  return (
                    <Button
                      key={opt.id}
                      variant="ghost"
                      onClick={() =>
                        toggleOption(s.title, {
                          optionId: opt.lable,
                          price: opt.price ?? 0,
                        })
                      }
                      className={`flex items-center justify-start gap-2 cursor-pointer w-full text-left hover:bg-muted/40 ${
                        isSelected ? "bg-accent" : ""
                      }`}
                    >
                      <div className="flex w-full items-center justify-between">
                        {opt.lable}

                        <span>{formatPrice(opt.price ?? 0)}</span>
                      </div>
                    </Button>
                  );
                })}
              </CardContent>
            </Card>
          ))}
          {platforms.map((s) => (
            <Card
              key={s.id}
              className="mb-3 w-full h-fit break-inside-avoid border shadow-none rounded-2xl bg-white gap-2.5"
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
                {s.options.map((opt) => {
                  const isSelected = selectedItems.some(
                    (item) =>
                      item.titleId === s.title &&
                      item.options.some((o) => o.optionId === opt.lable)
                  );

                  return (
                    <Button
                      key={opt.id}
                      variant="ghost"
                      onClick={() =>
                        toggleOption(s.title, {
                          optionId: opt.lable,
                          price: opt.price ?? 0,
                        })
                      }
                      className={`flex items-center justify-start gap-2 cursor-pointer w-full text-left hover:bg-muted/40 ${
                        isSelected ? "bg-accent" : ""
                      }`}
                    >
                      <div className="flex w-full items-center justify-between">
                        {opt.lable}

                        <span>{formatPrice(opt.price ?? 0)}</span>
                      </div>
                    </Button>
                  );
                })}
              </CardContent>
            </Card>
          ))}
          {contract.map((s) => (
            <Card
              key={s.id}
              className="mb-3 w-full h-fit break-inside-avoid border shadow-none rounded-2xl bg-white gap-2.5"
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
                {s.options.map((opt) => {
                  const isSelected = selectedContract?.months === opt.months;

                  return (
                    <Button
                      key={opt.id}
                      variant="ghost"
                      onClick={() =>
                        setContract({
                          months: opt.months ?? 0,
                          discount: opt.dicounts ?? 0,
                        })
                      }
                      className={`flex items-center justify-start gap-2 cursor-pointer w-full text-left hover:bg-muted/40 ${
                        isSelected ? "bg-accent" : ""
                      }`}
                    >
                      <div className="flex w-full items-center justify-between">
                        {opt.lable}
                      </div>
                    </Button>
                  );
                })}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
