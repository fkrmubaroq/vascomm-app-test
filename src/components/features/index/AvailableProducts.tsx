import { TDataProduct } from "@/api-collection/product.d";
import { Button } from "@/components/button";
import TitleSection from "@/components/title/TitleSection";
import cn from "classnames";
import { useMemo, useState } from "react";
import ProductItem from "./ProductItem";

export default function AvailableProducts({ data, fontPoppins }: { data: TDataProduct[], fontPoppins: string }) {
  const [showMore, setShowMore] = useState<boolean>(false);
  const dataFilter = useMemo(() => data?.filter((item,key) => {
    if (showMore) {
      return item;
    }
    return key < 10
  }), [showMore]);
  return (
    <section>
      <section className="flex flex-col gap-y-[33px] mt-[33px]">
        <TitleSection text="Produk Tersedia" />
        <Products data={dataFilter} />
        {showMore ? (
          <Button
            variant="outline-primary"
            className={cn(fontPoppins, "w-[163px] rounded-none mx-auto")}
            onClick={() => setShowMore(false)}
          >
            Lihat lebih sedikit
          </Button>
        ) : (
          <Button
            variant="outline-primary"
            className={cn(fontPoppins, "w-[163px] rounded-none mx-auto")}
            onClick={() => setShowMore(true)}
          >
            Lihat lebih banyak
          </Button>
        )}
      </section>
    </section>
  );
}

function Products({ data }: { data: TDataProduct[] }) {
  return (
    <div className="grid grid-cols-5 gap-x-[23px]">
      {data.map((item, key) => (
        <ProductItem key={key} data={item} />
      ))}
    </div>
  );
}