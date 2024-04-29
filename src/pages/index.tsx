import { getProducts } from "@/api-collection/product";
import { TDataProduct } from "@/api-collection/product.d";
import AvailableProducts from "@/components/features/index/AvailableProducts";
import BannerHomePage from "@/components/features/index/BannerHomePage";
import NewestProducts from "@/components/features/index/NewestProducts";
import Header from "@/components/header/Header";
import Footer from "@/components/layouts/Footer";
import { Playfair_Display, Poppins } from "next/font/google";
import { useMemo } from "react";

const playFairDisplay = Playfair_Display({ subsets: ["latin"] });
const poppins = Poppins({ weight: "600", subsets: ["latin"] });
export const getServerSideProps = async () => {
  const resProduct = await getProducts();
  return {
    props: {
      dataProduct: resProduct.data?.data || null,
    },
  };
};

export default function Home({
  dataProduct,
}: {
  dataProduct: TDataProduct[] | null;
}) {
  const productNewest = useMemo(() => dataProduct?.filter((item, key) => +item.is_active && key < 10), []) || [];
  const productActive = useMemo(() => dataProduct?.filter((item, key) => +item.is_active), []) || [];

  return (
    <>
      <Header />
      <main className="mt-[31px] max-w-[1080px] mx-auto">
        <BannerHomePage />
        <div className={playFairDisplay.className}>
          <NewestProducts data={productNewest} />
          <AvailableProducts data={productActive} fontPoppins={poppins.className} />
        </div>
      </main>
      <Footer />
    </>
  );
}
