import Image from "next/image";
import { Inter } from "next/font/google";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import ListTables from "@/components/ListTables";
import useGetDataApi from "@/hooks/useGetDataApi";
import { useRouter } from "next/router";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Category() {
  const label = "category";
  const router = useRouter();
  const { id } = router.query;
  const URL_API = `${process.env.NEXT_PUBLIC_API_HOST}/${label}`;
  const { data, loading } = useGetDataApi(URL_API);
  const columns = ["No", "Category", "Actions"];
  const rows = data.map((item, index) => ({
    id: item.id,
    dynamicRows: {
      no: index + 1,
      category: item?.category_name,
      actions: (
        <Link href={`/category/${item.id}`}>
          <Button>view books</Button>
        </Link>
      ),
    },
  }));
  return (
    <MainLayout>
      <div className="container p-4 h-full">
        <ListTables
          url={URL_API}
          columns={columns}
          label={label}
          rows={rows}
          loading={loading}
        />
      </div>
    </MainLayout>
  );
}
