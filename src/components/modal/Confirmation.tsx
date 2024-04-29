import { Dialog, DialogContent } from "@/components/modal";
import { useModalStore } from "@/hooks/hookStore";
import EllipseIcon from "../icons/Ellips";
import ToggleIcon from "../icons/ToggleIcon";

export default function Confirmation({
  children,
}: {
  children: React.ReactNode;
}) {
  const [confirmation, hideConfirmation] = useModalStore((state) => [
    state.confirmation,
    state.hideConfirmation,
  ]);

  return (
    <Dialog open={confirmation}>
      <DialogContent
        showClose={false}
        className="w-[496px] !pr-0 min-h-[250px] overflow-hidden bg-white !border-none rounded-t-lg !rounded-b-none"
        onHide={hideConfirmation}
      >
        <HeaderConfirmation />
        {children}
      </DialogContent>
    </Dialog>
  );
}

function HeaderConfirmation() {
  return (
    <>
      <div className="absolute top-0">
        <EllipseIcon />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-11 w-[75px] h-[75px] bg-[#D83A56] rounded-full flex justify-center items-center">
        <ToggleIcon />
      </div>
    </>
  );
}
