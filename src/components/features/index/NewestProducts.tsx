"use client"
import { TDataProduct } from "@/api-collection/product.d";
import TitleSection from "@/components/title/TitleSection";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductItem from "./ProductItem";

export default function NewestProducts({ data }: { data: TDataProduct[]}) {
  return (
    <section className="flex flex-col gap-y-[33px] mt-[33px]">
      <TitleSection text="Terbaru" />
      <Products data={data} />
    </section>
  );
}

function Products({ data }: { data: TDataProduct[] }) {
  return (
    <div className="flex gap-x-[23px]">
      <Swiper
        className="swiper-products"
        pagination={true}
        loop={true}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        slidesPerView={5}
      >
        {data.map((item, key) => (
          <SwiperSlide key={key}>
            <ProductItem key={key} data={item} />{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}