"use client";

import { Button } from "@/components/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";
import { Image } from "@radix-ui/react-avatar";
import { Clock, Flag, Trash2 } from "lucide-react";
import { Pagination } from "./pagination";
import { useState } from "react";

interface Column {
  key: string;
  title: string;
}

interface DataItem {
  image?: string;
  [key: string]: string | number | undefined;
}

export function DataTable2({
  columns,
  data,
}: {
  columns: Column[];
  data: DataItem[];
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.key}>{column.title}</TableHead>
            ))}
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((row, i) => (
            <TableRow key={i}>
              {columns.map((column) => (
                <TableCell key={column.key}>
                  {column.key === "name" || column.key === "agencyName" ? (
                    <div className="flex items-center gap-3">
                      <Image
                        src={row.image || "/placeholder.svg"}
                        alt={String(row[column.key])}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <span className="font-medium">{row[column.key]}</span>
                    </div>
                  ) : (
                    row[column.key]
                  )}
                </TableCell>
              ))}
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button size="icon" variant="ghost">
                    <Clock className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="ghost">
                    <Flag className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="ghost">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
