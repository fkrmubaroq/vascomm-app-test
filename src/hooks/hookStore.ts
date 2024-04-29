import { create } from "zustand";
export type TypeModal = "add" | "edit" | "detail" | "";
type TModalStore = {
  isOpen: boolean;
  confirmation: boolean;
  data?: unknown;
  showModal: (data?: unknown, type?: TypeModal) => void;
  hideModal: () => void;
  showConfirmation: (data?:unknown) => void;
  hideConfirmation: () => void;
  type: TypeModal
};
export const useModalStore = create<TModalStore>((set) => ({
  isOpen: false,
  confirmation: false,
  data: undefined,
  type: "",
  showModal: (data: unknown, type?: TypeModal) =>
    set({ isOpen: true, data, type }),
  hideModal: () => set({ isOpen: false, type: "" }),
  showConfirmation: (data?: unknown) => set({ confirmation: true, data }),
  hideConfirmation: () => set({ confirmation: false }),
}));
