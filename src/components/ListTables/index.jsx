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

export default function ListTables({ columns, label, rows }) {
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
          {rows?.length === 0 ? (
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
