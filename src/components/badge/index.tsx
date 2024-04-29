import cn from "classnames";

const variants = {
  red: "bg-[#D83A56] text-white ",
  green: "bg-[#479F77] text-white ",
};

type TVariant = keyof typeof variants;
export default function Badge({ className, text, variant }: { className?: string; text: string; variant: TVariant }) {
  return <div className={cn(className, "w-[70px] h-5 rounded-full text-center font-semibold font-poppins text-[9px]", variants[variant])}>{text}</div>;
}