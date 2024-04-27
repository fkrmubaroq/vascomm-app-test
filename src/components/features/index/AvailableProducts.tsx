import { Button } from "@/components/button";
import TitleSection from "@/components/title/TitleSection";
import cn from "classnames";
import ProductItem from "./ProductItem";
import { Product } from "./types";

const dataProducts: Product[] = [
  {
    image: "/images/products/product-1.png",
    title: "Euodia",
    price: "IDR x.xxx.980",
  },
  {
    image: "/images/products/product-2.png",
    title: "Euodia",
    price: "IDR x.xxx.980",
  },
  {
    image: "/images/products/product-2.png",
    title: "Euodia",
    price: "IDR x.xxx.980",
  },
  {
    image: "/images/products/product-2.png",
    title: "Euodia",
    price: "IDR x.xxx.980",
  },
  {
    image: "/images/products/product-2.png",
    title: "Euodia",
    price: "IDR x.xxx.980",
  },
  {
    image: "/images/products/product-2.png",
    title: "Euodia",
    price: "IDR x.xxx.980",
  },
  {
    image: "/images/products/product-2.png",
    title: "Euodia",
    price: "IDR x.xxx.980",
  },
];
export default function AvailableProducts({ fontPoppins }: { fontPoppins: string }) {
  return (
    <section>
      <section className="flex flex-col gap-y-[33px] mt-[33px]">
        <TitleSection text="Produk Tersedia" />
        <Products data={dataProducts} />
        <Button variant="outline-primary" className={cn(fontPoppins, "w-[163px] rounded-none mx-auto")}>
          Lihat lebih banyak
        </Button>
      </section>
    </section>
  );
}

function Products({ data }: { data: Product[] }) {
  return (
    <div className="grid grid-cols-5 gap-x-[23px]">
      {data.map((item, key) => (
        <ProductItem key={key} data={item} />
      ))}
    </div>
  );
}