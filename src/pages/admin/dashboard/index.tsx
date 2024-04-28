import { getProducts } from "@/api-collection/product";
import { TDataProduct } from "@/api-collection/product.d";
import DashboardCard from "@/components/features/admin/dashboard/DashboardCard";
import TableNewestProduct from "@/components/features/admin/dashboard/TableNewestProduct";
import Layout from "@/components/layouts/admin/Layout";

export const getServerSideProps = (async () => {
  const res = await getProducts();
  if (res.status !== 200 || res.data.code !== 200) {
    throw new Error("Network response was not ok");
  }
  return { props: { dataProduct: res.data?.data || null } };
});

export default function Dashboard({ dataProduct }: { dataProduct: TDataProduct[] | null }) {
  return (
    <Layout title="Dashboard">
      <div className="grid grid-cols-4 mb-[34px]">
        <DashboardCard title="Jumlah User" text="150 User" />
        <DashboardCard title="Jumlah User Aktif" text="150 User" />
        <DashboardCard
          title="Jumlah Produk"
          text={`${dataProduct?.length || 0} Produk`}
        />
        <DashboardCard title="Jumlah Produk Aktif" text="150 Produk" />
      </div>

      <TableNewestProduct data={dataProduct} />
    </Layout>
  );
}
