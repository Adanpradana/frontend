import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/comps/ui/table";
import { Button } from "../ui/button";
import { RotatingLines } from "react-loader-spinner";

export default function ListTables({ columns, label, rows, loading }) {
  return (
    <div>
      <Button
        className="bg-yellow-600 text-white border-black"
        variant="outline"
      >
        Add New {label}
      </Button>
      <Table>
        <TableCaption>A list of your recent {label}</TableCaption>
        <TableHeader>
          <TableRow>
            {columns.map((col) => (
              <>
                <TableHead>{col}</TableHead>
              </>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={columns.length} className=" bg-red-50  ">
                <div className="w-full  justify-center flex">
                  <RotatingLines
                    visible={true}
                    height="36"
                    width="36"
                    color="blue"
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                  />
                </div>
              </TableCell>
            </TableRow>
          ) : rows?.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className=" bg-red-50 text-center col-span-2"
              >
                no data found
              </TableCell>
            </TableRow>
          ) : (
            rows?.map((row) => (
              <TableRow key={row.id}>
                {Object.entries(row.dynamicRows).map(([key, value]) => (
                  <TableCell key={key} className="font-medium">
                    {value}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
