interface DisplayPictureProps {
  src: string;
  className?: string;
}

export default function DisplayPicture({ src, className }: DisplayPictureProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-slate-50 ${className}`}
    >
      <img
        src={src}
        alt="Display"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
