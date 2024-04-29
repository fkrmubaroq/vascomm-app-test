import { TDataUser } from "@/api-collection/user.d";
import Badge from "@/components/badge";
import { Button } from "@/components/button";
import EditIcon from "@/components/icons/Edit";
import EyeIcon from "@/components/icons/Eye";
import TrashIcon from "@/components/icons/Trash";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";
import TableHeadWithSort from "@/components/table/TableHeadWithSort";

export default function TableUser({
  data,
  onEdit,
  onDetail,
  onDelete,
}: {
  data: TDataUser[];
  onEdit: (data: TDataUser) => void;
  onDetail: (data: TDataUser) => void;
  onDelete: (data: TDataUser) => void;
}) {
  return (
    <Table className="table-admin">
      <TableHeader>
        <TableRow className="bg-white">
          <TableHead>No</TableHead>
          <TableHeadWithSort>Nama Lengkap</TableHeadWithSort>
          <TableHeadWithSort centered>Email</TableHeadWithSort>
          <TableHeadWithSort>No. Telepon</TableHeadWithSort>
          <TableHeadWithSort centered className="w-[150px]">
            Status
          </TableHeadWithSort>
          <TableHead className="w-[200px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, key) => (
          <TableRow key={key} className="font-poppins text-sm">
            <TableCell>{key + 1}</TableCell>
            <TableCell>{item.full_name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.telp}</TableCell>
            <TableCell>
              <div className="flex justify-center">
                <Badge
                  variant={+item.is_active ? "green" : "red"}
                  text={+item.is_active ? "AKTIF" : "TIDAK AKTIF"}
                />
              </div>
            </TableCell>
            <TableCell>
              <div className="flex gap-x-4 justify-center">
                <Button
                  variant="red"
                  className="!w-7 !h-7 !p-0 !rounded-full"
                  onClick={() => onDelete(item)}
                >
                  <TrashIcon />
                </Button>
                <Button
                  variant="green"
                  className="!w-7 !h-7 !p-0 !rounded-full"
                  onClick={() => onDetail(item)}
                >
                  <EyeIcon />
                </Button>
                <Button
                  variant="orange"
                  className="w-7 h-7 !p-0 !rounded-full "
                  onClick={() => onEdit(item)}
                >
                  <EditIcon />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
