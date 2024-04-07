import Image from "next/image";
import { Inter } from "next/font/google";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import ListTables from "@/components/ListTables";
import useGetDataApi from "@/hooks/useGetDataApi";
import Link from "next/link";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function CategoryBooks() {
  const label = "category";
  const router = useRouter();
  const { id } = router.query;
  const URL_API = `${process.env.NEXT_PUBLIC_API_HOST}/${label}/${id}`;
  const { data } = useGetDataApi(URL_API);
  const columns = ["No", "Book Title", "Author", "Year", "Quantity"];
  const rows = data?.books?.map((item, index) => ({
    id: item.id,
    dynamicRows: {
      no: index + 1,
      name: item.title,
      author: item.author,
      year: item.year,
      quantity: item.quantity,
    },
  }));

  return (
    <MainLayout>
      <div className="container p-4 h-full">
        <ListTables url={URL_API} columns={columns} label={label} rows={rows} />
      </div>
    </MainLayout>
  );
}
