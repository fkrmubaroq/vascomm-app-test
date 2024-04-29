import { TDataProduct } from "@/api-collection/product.d";
import { formatRupiah, storage } from "@/lib/utils";
import Image from "next/image";

export default function ProductItem({ data }: { data: TDataProduct }) {
  return (
    <div
      className="border cursor-pointer border-transparent hover:border-[#D6D6D6] min-w-[183px] flex flex-col gap-y-7 pb-[34px] pt-[15px] hover:shadow-product-card"
    >
      <div className="flex h-[150px] relative justify-center items-center w-full">
        <Image src={data.image.startsWith("http") ? data.image : storage(data.image)} width={120} height={130} alt="" />
      </div>
      <div className="flex flex-col gap-y-[7px] px-4">
        <div className="font-bold text-sm line-clamp-1">{data.product_name}</div>
        <div className="text-sm font-semibold font-poppins text-primary">{formatRupiah(data.price,".", "IDR")}</div>
      </div>
    </div>
  );
}
