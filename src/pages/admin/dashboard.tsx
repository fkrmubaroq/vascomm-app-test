import { getProducts } from "@/api-collection/product";
import { TDataProduct } from "@/api-collection/product.d";
import { getUser } from "@/api-collection/user";
import { TDataUser } from "@/api-collection/user.d";
import DashboardCard from "@/components/features/admin/dashboard/DashboardCard";
import TableNewestProduct from "@/components/features/admin/dashboard/TableNewestProduct";
import Layout from "@/components/layouts/admin/Layout";
import { useMemo } from "react";

export const getServerSideProps = (async () => {
  const res = await getProducts();
  const resUser = await getUser();
  return {
    props: {
      dataProduct: res.data?.data || null,
      dataUser: resUser.data?.data || null,
   } };
});

export default function Dashboard({
  dataProduct,
  dataUser,
}: {
  dataProduct: TDataProduct[] | null;
  dataUser: TDataUser[] | null
}) {
  const dataNewestProduct =
    useMemo(() => dataProduct?.filter((_, key) => key < 10), []) || [];
  const totalProductActive =
    useMemo(() =>  dataProduct?.filter((item) => +item.is_active).length, []) || [];
  const totalUser = useMemo(() => dataUser?.length, []) || [];
  const totalUserActive = useMemo(() => dataUser?.filter((item) => +item.is_active).length, []) || [];
  return (
    <Layout title="Dashboard">
      <div className="grid grid-cols-4 mb-[34px]">
        <DashboardCard title="Jumlah User" text={`${totalUser} User`} />
        <DashboardCard title="Jumlah User Aktif" text={`${totalUserActive} User`} />
        <DashboardCard
          title="Jumlah Produk"
          text={`${dataProduct?.length || 0} Produk`}
        />
        <DashboardCard
          title="Jumlah Produk Aktif"
          text={`${totalProductActive} Produk`}
        />
      </div>

      <TableNewestProduct data={dataNewestProduct} />
    </Layout>
  );
}
