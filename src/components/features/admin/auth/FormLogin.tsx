import { Button } from "@/components/button";
import ContainerInput from "@/components/form/ContainerInput";
import { Input } from "@/components/form/Input";
import { Label } from "@/components/label";
import { TFormLogin } from "@/types/form";
import { useState } from "react";

export default function FormLogin({
  onLogin,
}: {
  onLogin: (form: TFormLogin) => void;
}) {
  const [form, setForm] = useState<TFormLogin>({ email: "", password: "" });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(form);
  };
  return (
    <form className="flex flex-col gap-y-4" onSubmit={onSubmit} method="POST">
      <ContainerInput>
        <Label>Email / Nomor Telpon</Label>
        <Input
          name="email"
          value={form.email}
          className="rounded-none"
          placeholder="Contoh: admin@gmail.com"
          onChange={onChange}
        />
      </ContainerInput>
      <ContainerInput className="mb-8">
        <Label>Password</Label>
        <Input
          type="password"
          name="password"
          value={form.password}
          className="rounded-none"
          placeholder="Masukkan password"
          onChange={onChange}
        />
      </ContainerInput>

      <Button type="submit" className="w-full rounded-none">
        MASUK
      </Button>
    </form>
  );
}