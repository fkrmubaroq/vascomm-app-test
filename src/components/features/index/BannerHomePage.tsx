"use client"
import Image from "next/image";
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

export default function BannerHomePage(){
  return (
    <div className="max-w-[1180px] mx-auto">
      <Swiper
        className="banner-home-page !pb-10"
        pagination={true}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <Image
            src="/images/banner/banner-1.png"
            width={1080}
            height={331}
            objectFit="cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/banner/banner-1.png"
            width={1080}
            height={331}
            objectFit="cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/banner/banner-2.png"
            width={1080}
            height={331}
            objectFit="cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/banner/banner-2.png"
            width={1080}
            height={331}
            objectFit="cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/banner/banner-2.png"
            width={1080}
            height={331}
            objectFit="cover"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
