import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "@/api-collection/product";
import { TDataProduct, TPayloadProduct } from "@/api-collection/product.d";
import { Button } from "@/components/button";
import ConfirmationProduct from "@/components/features/admin/product/Confirmation";
import ModalFormProduct from "@/components/features/admin/product/ModalFormProduct";
import TableProduct from "@/components/features/admin/product/TableProduct";
import Layout from "@/components/layouts/admin/Layout";
import TitleAdmin from "@/components/title/TitleAdmin";
import { useModalStore } from "@/hooks/hookStore";
import useMutation from "@/hooks/mutation";
import { useRouter } from "next/router";

export const getServerSideProps = async () => {
  const res = await getProducts();
  if (res.status !== 200 || res.data.code !== 200) {
    throw new Error("Network response was not ok");
  }
  return { props: { data: res.data?.data || null } };
};

export default function Product({ data }: { data: TDataProduct[] }) {
  const {
    data: dataModal,
    isOpen,
    type,
    showModal,
    showConfirmation,
    hideModal,
    hideConfirmation,
  } = useModalStore((state) => ({
    data: state.data,
    isOpen: state.isOpen,
    type: state.type,
    showModal: state.showModal,
    showConfirmation: state.showConfirmation,
    hideModal: state.hideModal,
    hideConfirmation: state.hideConfirmation,
  }));

  const dataModalAlias = dataModal as TDataProduct;
  const router = useRouter();
  const onConfirmDelete = async (id: number) => {
    try {
      const response = await deleteProduct(id);
      if (response.status !== 200 && response.data.code !== 200) {
        throw new Error(response.data.message);
      }

      alert(response.data.message);
      router.replace(router.asPath);
    } catch (e: any) {
      alert(e.message);
    } finally {
      hideConfirmation();
    }
  };

  const { mutate: onSave, isLoading } = useMutation<TPayloadProduct>({
    mutateFn: async (payload: TPayloadProduct) => {
      const { id, ...restPayload } = payload;
      if (type !== "add" && !id) {
        throw new Error("Unknown ID");
      }
      if (typeof payload.image === "string") {
        delete restPayload.image;
      }
      const response = await(
        !payload.id ? createProduct(payload) : updateProduct(id || 0, restPayload)
      );
      return response.data;
    },
    onSuccess: (response) => {
      router.replace(router.asPath);
      alert(response.message);
      hideModal();
    },
    onError: (message) => {
      alert(message);
    },
  });

  return (
    <Layout>
      {isOpen && (
        <ModalFormProduct
          data={dataModalAlias}
          type={type}
          show={isOpen}
          isLoading={isLoading}
          onSave={onSave}
        />
      )}
      <ConfirmationProduct data={dataModalAlias} onConfirm={onConfirmDelete} />
      <div className="flex justify-between mb-6 items-center">
        <TitleAdmin text="Manajemen Produk" />
        <Button
          className="w-[160px] rounded-none h-10"
          onClick={() => showModal(undefined, "add")}
        >
          TAMBAH PRODUK
        </Button>
      </div>
      <TableProduct
        data={data}
        onDelete={showConfirmation}
        onEdit={(data) => showModal(data, "edit")}
        onDetail={(data) => showModal(data, "detail")}
      />
    </Layout>
  );
}
