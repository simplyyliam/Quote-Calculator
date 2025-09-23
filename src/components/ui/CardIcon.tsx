import type { ReactNode } from "react";

interface Props {
  icon: string | ReactNode;
  alt: string;
}

function CardIcon({ icon, alt }: Props) {
  return (
    <div className="flex items-center justify-center bg-slate-500/15 w-[35px] h-[35px] rounded-[6px] relative">
      {typeof icon  === "string" ? (
        <img src={icon} alt={`${alt} Icon`} className="absolute"/>
      ) : (
        icon
      )}
    </div>
  );
}

export default CardIcon;
