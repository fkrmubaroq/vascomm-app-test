import Image from "next/image";
import { Product } from "./types";

export default function ProductItem({ data }: { data: Product }) {
  return (
    <div
      className="border cursor-pointer border-transparent hover:border-[#D6D6D6] min-w-[183px] flex flex-col gap-y-7 pb-[34px] pt-[15px] hover:shadow-product-card"
    >
      <div className="flex h-[150px] relative justify-center items-center w-full">
        <Image src={data.image} width={120} height={130} alt="" />
      </div>
      <div className="flex flex-col gap-y-[7px] px-4">
        <div className="font-bold text-sm">{data.title}</div>
        <div className="text-sm font-bold text-primary">{data.price}</div>
      </div>
    </div>
  );
}
