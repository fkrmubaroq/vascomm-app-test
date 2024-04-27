"use client"
import TitleSection from "@/components/title/TitleSection";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
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
export default function NewestProducts() {
  return (
    <section className="flex flex-col gap-y-[33px] mt-[33px]">
      <TitleSection text="Terbaru" />
      <Products data={dataProducts} />
    </section>
  );
}

function Products({ data }: { data: Product[] }) {
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