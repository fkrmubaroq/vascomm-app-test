import { TDataProduct } from "@/api-collection/product.d";
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
import { formatRupiah } from "@/lib/utils";
import dayjs from "dayjs";

export default function TableProduct({
  data,
  onDelete,
  onEdit,
  onDetail,
}: {
  data: TDataProduct[];
  onDelete: (data: TDataProduct) => void;
  onEdit: (data: TDataProduct) => void;
  onDetail: (data: TDataProduct) => void;
}) {
  return (
    <Table className="table-admin">
      <TableHeader>
        <TableRow>
          <TableHead>No</TableHead>
          <TableHeadWithSort className="rounded-l-md">Produk</TableHeadWithSort>
          <TableHeadWithSort>Tanggal Dibuat</TableHeadWithSort>
          <TableHeadWithSort centered>Harga (Rp)</TableHeadWithSort>
          <TableHeadWithSort centered>Status</TableHeadWithSort>
          <TableHead> </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((product, key) => (
          <TableRow key={key} className="font-rubik text-sm">
            <TableCell>{key + 1}</TableCell>
            <TableCell className="font-medium">
              <div className="flex gap-x-5 items-center">
                {product.image && (
                  <img
                    loading="lazy"
                    src={
                      product.image.startsWith("http")
                        ? product.image
                        : `${process.env.NEXT_PUBLIC_API_BASE_URL}/uploads/${product.image}`
                    }
                    width={40}
                    height={40}
                    alt=""
                  />
                )}
                <div className="text-[#454C75]">{product.product_name}</div>
              </div>
            </TableCell>
            <TableCell className="text-[#A3A6AC] ">
              {dayjs(product.created_at).format("DD MMMM YYYY")}
            </TableCell>
            <TableCell className="text-right">
              {formatRupiah(product.price)}
            </TableCell>
            <TableCell>
              <div className="flex justify-center">
                <Badge
                  variant={+product.is_active ? "green" : "red"}
                  text={+product.is_active ? "AKTIF" : "TIDAK AKTIF"}
                />
              </div>
            </TableCell>
            <TableCell>
              <div className="flex gap-x-4 justify-center">
                <Button
                  variant="red"
                  className="!w-7 !h-7 !p-0 !rounded-full"
                  onClick={() => onDelete(product)}
                >
                  <TrashIcon />
                </Button>
                <Button
                  variant="green"
                  className="!w-7 !h-7 !p-0 !rounded-full"
                  onClick={() => onDetail(product)}
                >
                  <EyeIcon />
                </Button>
                <Button
                  variant="orange"
                  className="w-7 h-7 !p-0 !rounded-full "
                  onClick={() => onEdit(product)}
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
