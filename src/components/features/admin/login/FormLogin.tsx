import { Button } from "@/components/button";
import ContainerInput from "@/components/form/ContainerInput";
import { Input } from "@/components/form/Input";
import { Label } from "@/components/label";
import useMutation from "@/hooks/mutation";
import { TFormLogin } from "@/types/form";
import { useState } from "react";

export default function FormLogin() {
  const [form, setForm] = useState<{ email_telp: string, password: string }>({ email_telp: "", password: "" })
  const { mutate } = useMutation({
    mutateFn: (payload: TFormLogin) => {
      return
    }

  })
  return (
    <form className="flex flex-col gap-y-4">
      <ContainerInput>
        <Label>Email / Nomor Telpon</Label>
        <Input
          name="email_telp"
          value={form.email_telp}
          className="rounded-none"
          placeholder="Contoh: admin@gmail.com"
        />
      </ContainerInput>
      <ContainerInput className="mb-8">
        <Label>Password</Label>
        <Input
          type="password"
          name="password"
          value={form.password}
          className="rounded-none"
          placeholder="Masukkan passward"
        />
      </ContainerInput>

      <Button type="submit" className="w-full rounded-none">MASUK</Button>
    </form>
  );
}