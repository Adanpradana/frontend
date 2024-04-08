import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import ListTables from "@/components/ListTables";
import useGetDataApi from "@/hooks/useGetDataApi";
import dayjs from "dayjs";

export default function Book() {
  const label = "transaction";
  const URL_API = `${process.env.NEXT_PUBLIC_API_HOST}/${label}`;
  const { data } = useGetDataApi(URL_API);
  const columns = [
    "No",
    "Student Name",
    "Nim",
    "Tanggal Pinjam",
    "Tanggal Kembali",
    "status peminjaman",
    "Buku yang dipinjam",
  ];
  const rows = data.map((item, index) => ({
    id: item.id,
    dynamicRows: {
      no: index + 1,
      name: item.student.name,
      nim: item.student.nim,
      pinjam: dayjs(item.createdAt).format("DD-MM-YYYY"),
      kembali: dayjs(item.enndAt).format("DD-MM-YYYY"),
      status: !item.is_return_book ? (
        <div className="bg-red-200 rounded-2xl w-20">
          <div className="text-center p-2 text-red-600">Belum kembali</div>
        </div>
      ) : (
        <div className="bg-green-200 rounded-2xl w-20">
          <div className="text-center p-2 text-green-600">Sudah Kembali</div>
        </div>
      ),
      buku: (
        <div className="flex space-x-1">
          {item?.books.map((book) => (
            <>
              <Button>
                {book.title} {book.year}
              </Button>
            </>
          ))}
        </div>
      ),
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
