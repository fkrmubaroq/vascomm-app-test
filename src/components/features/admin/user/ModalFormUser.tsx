import { TDataUser, TPayloadUser } from "@/api-collection/user.d";
import { Button } from "@/components/button";
import ContainerInput from "@/components/form/ContainerInput";
import { Input } from "@/components/form/Input";
import { Label } from "@/components/label";
import { SpinnerIcon } from "@/components/loader/Spinner";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/modal";
import { TypeModal, useModalStore } from "@/hooks/hookStore";
import { TFormCreateUser } from "@/types/form";
import dayjs from "dayjs";
import { useMemo, useState } from "react";

const initForm = Object.freeze({
  full_name: "",
  telp: "",
  email: "",
});
export default function ModalFormUser({
  data,
  onSave,
  isLoading,
  type,
  show,
}: {
  data: TDataUser;
  onSave: (data: TPayloadUser) => void;
  isLoading: boolean;
  type: TypeModal;
  show: boolean;
}) {
  const isDetail = type === "detail";
  const isEdit = type === "edit";

  const editData = useMemo(
    () => ({
      id: data?.id || 0,
      full_name: data?.full_name || "",
      telp: data?.telp || "",
      email: data?.email || "",
      role: data?.role || "USR",
      created_at: data?.created_at || ""
    }),
    []
  ) as TPayloadUser;
  const [form, setForm] = useState<TFormCreateUser>(
    type !== "add" ? editData : initForm
  );
  const hideModal = useModalStore((state) => state.hideModal);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
  };

  const getTitle = useMemo(() => {
    if (isDetail) return "Detail User";
    if (isEdit) return "Ubah User";
    return "Tambah User";
  }, []);
  return (
    <Dialog open={show}>
      <DialogContent
        className="max-w-[500px] bg-white !border-none !rounded-none"
        onHide={hideModal}
      >
        <form onSubmit={onSubmit}>
          <DialogHeader className="pt-8">
            <DialogTitle className="text-center text-[#3E3E3E] font-poppins text-lg !font-normal">
              {getTitle}
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-y-4 px-8 mt-10">
            <ContainerInput>
              <Label>Nama</Label>
              <Input
                name="full_name"
                value={form.full_name}
                onChange={onChange}
                disabled={isDetail}
                placeholder="Masukkan Nama"
                className="rounded-none h-11 text-sm"
                required
              />
            </ContainerInput>
            <ContainerInput>
              <Label>Nomor Telepon </Label>
              <Input
                name="telp"
                value={form.telp}
                onChange={onChange}
                disabled={isDetail}
                placeholder="Masukkan Nomor Telepon "
                className="rounded-none h-11 text-sm"
                required
              />
            </ContainerInput>
            <ContainerInput>
              <Label>Email</Label>
              <Input
                name="email"
                value={form.email}
                onChange={onChange}
                disabled={isDetail}
                placeholder="Masukkan Email "
                className="rounded-none h-11 text-sm"
                required
              />
            </ContainerInput>
            {isDetail && <>
              <ContainerInput>
                <Label>Role</Label>
                <Input
                  value={form.role}
                  disabled
                  className="rounded-none h-11 text-sm"
                />
              </ContainerInput>
              <ContainerInput>
                <Label>Dibuat Pada</Label>
                <Input
                  value={dayjs(form.created_at).format("DD MMMM YYYY")}
                  disabled
                  className="rounded-none h-11 text-sm"
                />
              </ContainerInput>
            </>
            }

            <DialogFooter className="pb-9 mt-4">
              {!isDetail &&
                <Button
                  disabled={isLoading}
                  type="submit"
                  className="w-full h-11 rounded-none"
                >
                  {isLoading ? <SpinnerIcon /> : "SIMPAN"}
                </Button>
              }
            </DialogFooter>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
