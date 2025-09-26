import type { ElementType } from "react";

interface Props {
  icon: string | ElementType;
  alt: string;
}

function CardIcon({ icon, alt }: Props) {
  if (typeof icon === "string") {
    return (
      <div className="flex items-center justify-center w-[35px] h-[35px] rounded-[6px] relative">
        <img src={icon} alt={`${alt} Icon`} className="absolute" />
      </div>
    );
  }

  const Icon = icon;
  return (
    <div className="flex items-center justify-center w-[35px] h-[35px] rounded-[6px] relative">
      <Icon className="w-5 h-5 absolute" />
    </div>
  );
}

export default CardIcon