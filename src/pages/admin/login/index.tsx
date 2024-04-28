import FormLogin from "@/components/features/admin/login/FormLogin";
import Image from "next/image";

export default function Login() {
  return (
    <div className="flex w-full min-h-screen">
      <div className="w-1/2 min-h-screen relative">
        <Image
          src="/images/background.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="w-1/2  flex justify-center items-center">
        <div className="max-w-[400px] mx-auto ">
          <div className="font-poppins text-2xl leading-[36px]">
            Selamat Datang Admin
          </div>
          <div className="text-[#9B9B9B] leading-[18px] font-poppins text-xs mb-8">
            Silahkan masukkan email atau nomor telepon dan password Anda untuk
            mulai menggunakan aplikasi
          </div>
          <FormLogin />
        </div>
      </div>
    </div>
  );
}