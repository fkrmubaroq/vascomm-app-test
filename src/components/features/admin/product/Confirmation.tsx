import { TDataProduct } from "@/api-collection/product.d";
import { Button } from "@/components/button";
import { DialogFooter } from "@/components/modal";
import Confirmation from "@/components/modal/Confirmation";
import { useModalStore } from "@/hooks/hookStore";

export default function ConfirmationProduct({
  onConfirm,
  data,
}: {
  data: TDataProduct;
  onConfirm: (id: number) => void;
}) {
  const hideConfirmation = useModalStore((state) => state.hideConfirmation);
  return (
    <Confirmation>
      <div className="flex flex-col gap-y-4 font-poppins pt-[150px] items-center">
        <div className="text-2xl font-semibold leading-[26px]">
          Konfirmasi Hapus
        </div>
        <div className="text-[#A4A4A4] leading-6">
          Apakah kamu yakin menghapus {data?.product_name}?
        </div>
      </div>
      <DialogFooter className="border-t border px-10">
        <div className="pt-8 pb-7 flex gap-x-5">
          <Button
            variant="outline"
            className="!text-[#BDBDBD] font-poppins !border-[#EBEDF1] w-20 h-[36px]"
            onClick={() => hideConfirmation()}
          >
            Batal
          </Button>
          <Button
            className="w-20 font-poppins font-semibold h-[36px]"
            onClick={() => onConfirm(data.id)}
          >
            Hapus
          </Button>
        </div>
      </DialogFooter>
    </Confirmation>
  );
}
