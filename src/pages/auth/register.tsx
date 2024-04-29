import { createUser } from "@/api-collection/user";
import FormRegister from "@/components/features/admin/auth/FormRegister";
import useMutation from "@/hooks/mutation";
import { TFormRegister } from "@/types/form";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Register() {

  const router = useRouter();
  const { mutate:onRegister } = useMutation<TFormRegister>({
    mutateFn: async (payload: TFormRegister) => {
      const response = await createUser(payload);
      return response.data || [];
    },
    onSuccess:(response) => {
      alert(response.message);
      // TODO: implement oAuth2
      router.push("/admin/dashboard")
    },
    onError: (message) => {
      alert(message);
    }
  })
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
            registrasi akun
          </div>
          <FormRegister onRegister={onRegister} />
        </div>
      </div>
    </div>
  );
}
