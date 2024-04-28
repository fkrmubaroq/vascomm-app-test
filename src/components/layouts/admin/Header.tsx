import Logo from "@/components/title/Logo";

export default function Header({ id }: { id: string }) {
  return <header id={id} className="flex justify-between pl-7 pr-8 shadow-sm border-b border-b-gray-100">
    <Logo />
    <AvatarUser emailTelp="admin@mail.com" role="admin" />
  </header>;
}

function AvatarUser({ emailTelp, role }: { emailTelp: string, role: string }) {
  return (
    <div className="flex gap-x-4 items-center">
      <div className="flex flex-col items-end font-poppins">
        <div className="text-primary text-[10px]">Hallo {role},</div>
        <div className="text-sm">{emailTelp}</div>
      </div>
      <div className="w-10 h-10 bg-[#C4C4C4] rounded-full"></div>
    </div>
  );
}