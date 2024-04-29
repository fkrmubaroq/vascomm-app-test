import { createUser, deleteUser, getUser, updateUser } from "@/api-collection/user";
import { TDataUser, TPayloadUser } from "@/api-collection/user.d";
import { Button } from "@/components/button";
import ConfirmationUser from "@/components/features/admin/user/Confirmation";
import ModalFormUser from "@/components/features/admin/user/ModalFormUser";
import TableUser from "@/components/features/admin/user/TableUser";
import Layout from "@/components/layouts/admin/Layout";
import TitleAdmin from "@/components/title/TitleAdmin";
import { useModalStore } from "@/hooks/hookStore";
import useMutation from "@/hooks/mutation";
import { useRouter } from "next/router";

export const getServerSideProps = async () => {
  const res = await getUser();
  if (res.status !== 200 || res.data.code !== 200) {
    throw new Error("Network response was not ok");
  }
  return { props: { data: res.data?.data || null } };
};

export default function User({ data }: { data: TDataUser[] }) {
  const [
    isOpen,
    showModal,
    dataModal,
    hideModal,
    type,
    showConfirmation,
    hideConfirmation,
  ] = useModalStore((state) => [
    state.isOpen,
    state.showModal,
    state.data,
    state.hideModal,
    state.type,
    state.showConfirmation,
    state.hideConfirmation,
  ]);
  const dataModalAlias = dataModal as TDataUser;
  const router = useRouter();
  const { mutate: onSave, isLoading } = useMutation<TPayloadUser>({
    mutateFn: async (payload: TPayloadUser) => {
      const { id, created_at, role, is_active, ...restPayload } = payload;
      const response = await(
        !payload.id
          ? createUser(payload)
          : updateUser(id || 0, restPayload)
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

    const onConfirmDelete = async (id: number) => {
      try {
        const response = await deleteUser(id);
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
  return (
    <Layout>
      {isOpen &&
        <ModalFormUser
          show={isOpen}
          data={dataModalAlias}
          onSave={onSave}
          isLoading={isLoading}
          type={type}
        />
      }
      <ConfirmationUser data={dataModalAlias} onConfirm={onConfirmDelete} />
      <div className="flex justify-between mb-6 items-center">
        <TitleAdmin text="Manajemen User" />
        <Button
          className="w-[160px] rounded-none h-10"
          onClick={() => showModal(undefined, "add")}
        >
          TAMBAH USER
        </Button>
      </div>
      <TableUser
        data={data}
        onDelete={showConfirmation}
        onEdit={(data) => showModal(data, "edit")}
        onDetail={(data) => showModal(data, "detail")}
      />
    </Layout>
  );
}
