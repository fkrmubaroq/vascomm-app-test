import SocialMediaIcon from "../icons/SocialMedia";
import Logo from "../title/Logo";

export default function Footer() {
  return (
    <footer className=" border-t border-t-[#E4E4E4] py-20 mt-[53px]">
      <div className="max-w-[1280px] mx-auto flex gap-x-28">
        <AboutUs />
        <Column
          title="Layanan"
          menus={["BANTUAN", "TANYA JAWAB", "HUBUNGI KAMI", "CARA BERJUALAN"]}
        />
        <Column
          title="Tentang Kami"
          menus={[
            "ABOUT US",
            "KARIR",
            "BLOG",
            "KEBIJAKAN PRIVASI",
            "SYARAT DAN KETENTUAN",
          ]}
        />
        <Column
          title="Mitra"
          menus={[
            "SUPPLIER"
          ]}
        />
      </div>
    </footer>
  );
}

function AboutUs() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-3 max-w-[270px]">
      <div className="-ml-4">
      <Logo />
      </div>
      <div className="font-poppins text-gray-400 text-center leading-[16.8px] text-xs mt-[44px] max-w-[262px] mb-[65px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo in
        vestibulum, sed dapibus tristique nullam.
      </div>
      <SocialMediaIcon />
    </div>
  );
}

function Column({ title, menus }: { title: string; menus:string[] }) {
  return (
    <div className="text-[#1F1C17]">
      <div className="text-lg font-playFair mb-8">{title}</div>
      <div className="flex flex-col gap-y-4">
        {menus.map((menu, key) => (
          <div
            key={key}
            className="uppercase tracking-widest text-xs"
          >{menu}</div>
        ))}
      </div>
    </div>
  );
}