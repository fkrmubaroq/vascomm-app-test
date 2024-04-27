import LogoIcon, { LogoText } from "../icons/Logo";

export default function Logo() {
  return (
    <div className="flex gap-x-2 items-center w-[168px]">
      <LogoIcon />
      <LogoText />
    </div>
  );
}
