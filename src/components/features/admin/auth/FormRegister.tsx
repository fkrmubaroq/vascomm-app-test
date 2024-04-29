import { Button } from "@/components/button";
import ContainerInput from "@/components/form/ContainerInput";
import { Input } from "@/components/form/Input";
import { Label } from "@/components/label";
import { TFormLogin } from "@/types/form";
import { useState } from "react";

export default function FormRegister({ onRegister }: { onRegister: (form: TFormLogin) => void;  }) {
  const [form, setForm] = useState<TFormLogin>({
    email: "",
    telp: "",
    full_name: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister(form);
  };
  return (
    <form className="flex flex-col gap-y-4" onSubmit={onSubmit}>
      <ContainerInput>
        <Label>Nama</Label>
        <Input
          name="full_name"
          value={form.full_name}
          className="rounded-none"
          onChange={onChange}
          placeholder="Nama Lengkap"
          required
        />
      </ContainerInput>
      <ContainerInput>
        <Label>Nomor Hanphone</Label>
        <Input
          name="telp"
          value={form.telp}
          className="rounded-none"
          onChange={onChange}
          placeholder="Masukan Nomor Handphone"
          required
        />
      </ContainerInput>
      <ContainerInput>
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          value={form.email}
          className="rounded-none"
          onChange={onChange}
          placeholder="Masukan email"
          required
        />
      </ContainerInput>

      <Button type="submit" className="w-full rounded-none">
        DAFTAR
      </Button>
    </form>
  );
}
