import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import ToggleButton from "./ToggleButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";

function CategoryListTable(data) {
  const [rows, setRows] = useState(() => {
    // Return an empty array if data is undefined, null, or empty
    if (!data?.data || !Array.isArray(data?.data) || data?.data.length === 0) {
      console.log("here");
      return [];
    }

    // Otherwise, map the data to the expected format
    return data?.data?.map((doc, index) => ({
      SL: index + 1, // Sequential numbering
      id: doc.id, // Use unique IDs for each row
      Name: doc.name || "N/A", // Default to 'N/A' if name is absent
      Status: doc.status ?? false, // Default to false if undefined
      Featured: doc.featured ?? false, // Default value for Featured
      Priority: doc.priority ?? 0, // Default value for Priority
      Action: true, // If Action is required, keep it true
    }));
  });

  const [columns, setColumns] = useState([
    { field: "SL", headerName: "SL", width: 70 },
    { field: "id", headerName: "ID", width: 70 },
    { field: "Name", headerName: "Name", width: 130 },
    {
      field: "Status",
      headerName: "Status",
      width: 130,
      renderCell: (parms) => (
        <div className="mt-3">
          <ToggleButton />
        </div>
      ),
    },
    {
      field: "Featured",
      headerName: "Featured",
      width: 130,
      renderCell: (parms) => (
        <div className="mt-3">
          <ToggleButton />
        </div>
      ),
    },
    { field: "Priority", headerName: "Priority", width: 130 },
    {
      field: "Action",
      headerName: "Action",
      width: 170,
      renderCell: (parms) => (
        <div className="flex gap-2 mt-2">
          <button className="btn btn-sm btn-outline hover:bg-[#24bac3]  text-[#24bac3]   mr-2">
            {" "}
            <EditIcon />
          </button>
          <button className="btn btn-sm  btn-outline btn-error ">
            <DeleteIcon />
          </button>
        </div>
      ),
    },
  ]);

  return (
    <div
      className="max-w-[400px] md:max-w-full overflow-auto"
      style={{ height: 400, width: "100%" }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

export default CategoryListTable;
