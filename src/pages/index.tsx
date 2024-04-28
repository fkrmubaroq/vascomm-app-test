import AvailableProducts from "@/components/features/index/AvailableProducts";
import BannerHomePage from "@/components/features/index/BannerHomePage";
import NewestProducts from "@/components/features/index/NewestProducts";
import Header from "@/components/header/Header";
import Footer from "@/components/layouts/Footer";
import { Playfair_Display, Poppins } from "next/font/google";

const playFairDisplay = Playfair_Display({ subsets: ["latin"] });
const poppins = Poppins({ weight: "600", subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <Header />
      <main className="mt-[31px] max-w-[1080px] mx-auto">
        <BannerHomePage />
        <div className={playFairDisplay.className}>
          <NewestProducts />
          <AvailableProducts fontPoppins={poppins.className} />
        </div>
      </main>
      <Footer />
    </>
  );
}
