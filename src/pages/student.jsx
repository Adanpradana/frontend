import Image from "next/image";
import { Inter } from "next/font/google";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import ListTables from "@/components/ListTables";
import useGetDataApi from "@/hooks/useGetDataApi";

const inter = Inter({ subsets: ["latin"] });

export default function Student() {
  const label = "student";
  const URL_API = `${process.env.NEXT_PUBLIC_API_HOST}/${label}`;
  const { data } = useGetDataApi(URL_API);
  const columns = ["No", "Name", "Nim", "Email", "Status", "Actions"];
  const rows = data.map((item, index) => ({
    id: item.id,
    dynamicRows: {
      no: index + 1,
      name: item.name,
      nim: item.nim,
      email: item.email,
      status: !item.is_active ? (
        <div className="bg-red-200 rounded-2xl w-20">
          <div className="text-center p-2 text-red-600">In Active</div>
        </div>
      ) : (
        <div className="bg-green-200 rounded-2xl w-20">
          <div className="text-center p-2 text-green-600">Active</div>
        </div>
      ),
      actions: (
        <div className="flex space-x-1">
          <Button>edit</Button>
          <Button>delete</Button>
        </div>
      ),
    },
  }));
  console.log(data);
  return (
    <MainLayout>
      <div className="container p-4 h-full">
        <ListTables url={URL_API} columns={columns} label={label} rows={rows} />
      </div>
    </MainLayout>
  );
}
