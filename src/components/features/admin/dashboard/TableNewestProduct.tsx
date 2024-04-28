import { TDataProduct } from "@/api-collection/product.d";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/table";
import { formatRupiah } from "@/lib/utils";
import dayjs from "dayjs";

export default function TableNewestProduct({ data }: { data: TDataProduct[] | null }) {
  return (
    <Card className="bg-white border-none max-w-[784px]">
      <CardHeader>
        <CardTitle className="text-[#3A3C58] text-base font-medium font-rubik">
          Produk Terbaru
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader className="bg-primary text-white">
            <TableRow>
              <TableHead className="rounded-l-md">Produk</TableHead>
              <TableHead>Tanggal Dibuat</TableHead>
              <TableHead className="rounded-r-md">Harga (Rp)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((product, key) => (
              <TableRow key={key} className="font-rubik text-sm">
                <TableCell className="font-medium">
                  <div className="flex gap-x-5 items-center">
                    {product.image && <img loading="lazy" src={product.image} width={40} height={40} alt="" />}
                    <div className="text-[#454C75]">
                      {product.product_name}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-[#A3A6AC] ">
                  {dayjs(product.created_at).format("DD MMMM YYYY")}
                </TableCell>
                <TableCell className="text-right">
                  {formatRupiah(product.price)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
