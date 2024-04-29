import HomeIcon from "@/components/icons/Home";
import NotebookIcon from "@/components/icons/Notebook";
import UserIcon from "@/components/icons/User";
import { SidebarMenu } from "@/types/global";
import cn from "classnames";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

const menus = [
  {
    icon: <HomeIcon />,
    text: "Dashboard",
    href: "/admin/dashboard",
  },
  {
    icon: <UserIcon />,
    text: "Manajemen User",
    href: "/admin/users",
  },
  {
    icon: <NotebookIcon />,
    text: "Manajemen Produk",
    href: "/admin/products",
  },
];
export default function Sidebar({ id }: { id: string }) {
  return (
    <nav id={id} className="flex flex-col gap-y-2">
      {menus.map((menu, key) => (
        <MenuItem key={key} data={menu} />
      ))}
    </nav>
  );
}

function MenuItem({ data }: { data: SidebarMenu }) {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <div
      className={cn(
        "flex menu-item items-center px-5 cursor-pointer group h-[45px] hover:bg-primary",
        {
          "bg-primary active": pathName === data.href,
        }
      )}
      onClick={() => {
        router.push(data.href);
      }}
    >
      <div className="w-10 h-10 flex justify-center items-center">
        {data.icon}
      </div>
      <span
        className={cn("text-[#1A1111] group-hover:text-white text-sm", {
          "text-white": pathName === data.href,
        })}
      >
        {data.text}
      </span>
    </div>
  );
}
