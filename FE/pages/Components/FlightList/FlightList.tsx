import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface FlightListProps {
  rows: Row[];
}

export interface Row {
  id: number;
  name: string;
  date: string;
  tachoStart: string;
  tachoEnd: string;
  total: string;
  comments: string;
}

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", width: 130 },
  { field: "date", headerName: "Date", width: 100 },
  { field: "tachoStart", headerName: "Tacho Start", width: 100 },
  { field: "tachoEnd", headerName: "Tacho end", width: 100 },
  {
    field: "total",
    headerName: "Total",
    width: 90,
  },
  {
    field: "comments",
    headerName: "Comments",
    width: 160,
  },
];

const FlightList: React.FC<FlightListProps> = ({ rows }: FlightListProps) => {
  return (
    <div
      style={{
        height: 450,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DataGrid rows={rows} columns={columns} checkboxSelection />
    </div>
  );
};

export default FlightList;
