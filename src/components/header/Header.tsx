import { Button } from "../button";
import { Input } from "../form/Input";
import MagniferIcon from "../icons/Magnifer";
import Logo from "../title/Logo";

export default function Header() {
  return (
    <header className=" w-ful border-b border-b-[#E4E4E4]">
      <div className="max-w-[1280px] h-[70px] items-center mx-auto bg-white flex justify-between">
        <Logo />
        <FormSearchInput />
        <div className="flex gap-x-4">
          <Button
            variant="outline-primary"
            className="tracking-[25%] leading-[16.71px] uppercase rounded-none text-sm"
          >
            MASUK
          </Button>
          <Button className="tracking-[25%] leading-[16.71px] uppercase rounded-none text-sm">
            DAFTAR
          </Button>
        </div>
      </div>
    </header>
  );
}

function FormSearchInput() {
  return (
    <div className="relative w-[662px]">
      <Input
        className="bg-[#F9F9F9] border-none rounded-[2px] h-8 outline-none focus:ring-0 text-xs "
        placeholder="Cari parfum kesukaanmu"
      />
      <div className="absolute right-2 top-1.5">
        <MagniferIcon />
      </div>
    </div>
  );
}
