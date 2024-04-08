import { Inter } from "next/font/google";
import MainLayout from "@/components/layout/MainLayout";
import ListTables from "@/components/ListTables";
import useGetDataApi from "@/hooks/useGetDataApi";

const inter = Inter({ subsets: ["latin"] });

export default function Book() {
  const label = "book";
  const URL_API = `${process.env.NEXT_PUBLIC_API_HOST}/${label}`;
  const { data, loading } = useGetDataApi(URL_API);
  const columns = [
    "No",
    "Book Title",
    "Author",
    "Year",
    "Quantity",
    "Category",
  ];
  const rows = data.map((item, index) => ({
    id: item.id,
    dynamicRows: {
      no: index + 1,
      name: item.title,
      author: item.author,
      year: item.year,
      quantity: item.quantity,
      category: item?.category?.category_name,
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
