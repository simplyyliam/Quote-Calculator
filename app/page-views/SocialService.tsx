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

export default function SocialMediaService() {

  return (
    <div className="flex flex-col w-full h-full p-5 items-center justify-center">
      <div className="flex flex-wrap gap-2.5 h-full overflow-y-scroll justify-center">
        {SocialServices.map((s) => (
          <Card key={s.id} className="w-200 h-fit max-w-sm shadow-none border">
            <CardHeader>
              <CardTitle>{s.title}</CardTitle>
              <CardDescription>{s.Subtitle}</CardDescription>
            </CardHeader>
            <CardContent>
               {s.options.map((o) => (
                <Button
                  key={o.id}
                  variant="ghost"
                  className="flex justify-start cursor-pointer w-full"
                >
                  <Checkbox id={o.id} />
                  <Label htmlFor={o.id} className="cursor-pointer">{o.lable}</Label>
                </Button>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
