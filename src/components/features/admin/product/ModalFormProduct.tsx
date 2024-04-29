import { TDataProduct, TPayloadProduct } from "@/api-collection/product.d";
import { Button } from "@/components/button";
import ContainerInput from "@/components/form/ContainerInput";
import { Input } from "@/components/form/Input";
import ImageUploadIcon from "@/components/icons/ImageUpload";
import { Label } from "@/components/label";
import { SpinnerIcon } from "@/components/loader/Spinner";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/modal";
import { TypeModal, useModalStore } from "@/hooks/hookStore";
import { storage } from "@/lib/utils";
import { TFormCreateProduct } from "@/types/form";
import { ChangeEvent, useMemo, useRef, useState } from "react";

const initForm = Object.freeze({
  product_name: "",
  image: "",
  price: 0,
});
export default function ModalFormProduct({
  data,
  show,
  isLoading,
  type,
  onSave,
}: {
  data?: TDataProduct;
  show: boolean;
  isLoading: boolean;
  type: TypeModal;
  onSave: (data: TPayloadProduct) => void;
  }) {
  const isDetail = type === "detail";
  const isEdit = type === "edit";

  const hideModal = useModalStore((state) => state.hideModal);
  const editData = useMemo(
    () => ({
      id: data?.id || 0,
      product_name: data?.product_name || "",
      image: data?.image || "",
      price: data?.price || "",
    }),
    []
  ) as TPayloadProduct;
  const uploadRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState<TFormCreateProduct>(
    type !== "add" ? editData : initForm
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
  };

  const onChangeUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) {
      setForm((state) => ({ ...state, image: "" }));
      return;
    }

    setForm((state) => ({ ...state, image: e.target.files?.[0] || "" }));
  };

  const selectedImage = form?.image as File;

  const getTitle = useMemo(() => {
    if (isDetail) return "Detail Produk";
    if (isEdit) return "Ubah Produk";
    return "Tambah Produk";
  }, []);
  return (
    <Dialog open={show}>
      <DialogContent
        onHide={hideModal}
        className="max-w-[500px] bg-white !border-none !rounded-none"
      >
        <form onSubmit={onSubmit}>
          <DialogHeader className="pt-8">
            <DialogTitle className="text-center text-[#3E3E3E] font-poppins text-lg !font-normal">
              {getTitle}
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-y-4 px-8 mt-10">
            <ContainerInput>
              <Label>Nama Produk</Label>
              <Input
                disabled={isDetail}
                name="product_name"
                value={form.product_name}
                onChange={onChange}
                placeholder="Masukkan Nama Produk"
                className="rounded-none h-11 text-sm"
                required
              />
            </ContainerInput>
            <ContainerInput>
              <Label>Harga</Label>
              <Input
                disabled={isDetail}
                min={1}
                name="price"
                type="number"
                value={form.price > 0 ? form.price : ""}
                onChange={onChange}
                placeholder="Masukkan Harga"
                className="rounded-none h-11 text-sm"
                required
              />
            </ContainerInput>

            <ContainerInput>
              <Label>Upload Gambar</Label>
              <div
                onClick={() => !isDetail && uploadRef.current?.click()}
                className="flex flex-col gap-y-2 bg-white border items-center hover:bg-gray-100 cursor-pointer pt-9 pb-6 justify-center"
              >
                <input
                  type="file"
                  accept="image/*"
                  id="upload"
                  className="hidden"
                  ref={uploadRef}
                  onChange={onChangeUpload}
                />
                {form.image ? (
                  <SelectedImage
                    src={
                      (isEdit || isDetail) && typeof form.image === "string"
                        ? storage(form.image as string)
                        : URL.createObjectURL(selectedImage)
                    }
                    fileName={
                      (isEdit || isDetail) && typeof form.image === "string"
                        ? (form.image as string)
                        : selectedImage.name
                    }
                  />
                ) : (
                  <>
                    <ImageUploadIcon />
                    <div className="text-[#9B9B9B] text-sm font-poppins">
                      Pilih gambar dengan ratio 9:16
                    </div>
                  </>
                )}
              </div>
            </ContainerInput>

            <DialogFooter className="pb-9 mt-4">
              {!isDetail && (
                <Button
                  disabled={isLoading}
                  type="submit"
                  className="w-full h-11 rounded-none"
                >
                  {isLoading ? <SpinnerIcon /> : "SIMPAN"}
                </Button>
              )}
            </DialogFooter>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function SelectedImage({ src, fileName }: { src: string; fileName: string }) {
  return (
    <div className="flex items-center justify-center flex-col gap-y-2">
      <img src={src} width={75} height={75} alt="" />
      <span className="text-[#9B9B9B] text-sm font-poppins">{fileName}</span>
    </div>
  );
}
