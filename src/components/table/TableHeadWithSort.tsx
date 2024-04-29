import cn from "classnames";
import { TableHead } from ".";
import SortIcon from "../icons/Sort";

export default function TableHeadWithSort({
  className,
  children,
  centered,
}: {
  className?: string;
  children: React.ReactNode;
  centered?: boolean;
}) {
  return (
    <TableHead>
      <div
        className={cn(
          "flex gap-x-4 items-center",
          {
            "justify-center": centered,
          },
          className
        )}
      >
        <span className="text-[#3E3E3E] text-xs">{children}</span>
        <SortIcon />
      </div>
    </TableHead>
  );
}
