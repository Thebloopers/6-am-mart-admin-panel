import React from "react";
import PageHeader from "../Components/PageHeader";
import { DataGrid } from "@mui/x-data-grid";
import ComboBox from "../Components/ComboBox";
import SearchBox from "../Components/SearchBox";
import ExportButton from "../Components/ExportButton";
import ColumnsDropdown from "../Components/ColumnsDropdown";
import ToggleButton from "../Components/ToggleButton";
import withAuth from "../HOC/withAuth";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "Sl", headerName: "Sl", width: 200 },
  { field: "Name", headerName: "Name", width: 200 },
  {
    field: "ContactInformation",
    headerName: "Contact Information",
    width: 300,
  },
  { field: "TotalOrder", headerName: "Total Order", width: 200 },
  { field: "TotalOrderAmount", headerName: "Total Order Amount", width: 200 },
  { field: "JoiningDate", headerName: "Joining Date", width: 200 },
  {
    field: "ActiveInactive",
    headerName: "Active/Inactive",
    width: 200,
    renderCell: (params) => (
      <div className="mt-3">
        <ToggleButton />
      </div>
    ),
  },
  { field: "Actions", headerName: "Actions", width: 130 },
];

const rows = [
  {
    id: 1,
    Sl: "1",
    Name: "Zerin 123",
    ContactInformation: "z**********@gmail.com+8********** ",
    TotalOrder: 25,
    TotalOrderAmount: 565,
    JoiningDate: 444,
    ActiveInactive: 155,
    Actions: true,
  },
];

const Customers = () => {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-6 w-full">
        <PageHeader title="Customers" count={24} />
        {/* Other content of your application */}
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[400px] overflow-auto md:max-w-full">
        <div className="mb-4 flex flex-wrap gap-4">
          <ComboBox placeholder={"All Zones"} />
          <ComboBox placeholder={"Total Orders (High to Low)"} />
          <ComboBox placeholder={"All Customers"} />
          <SearchBox className="border" />
          <ExportButton />
          <div className="relative mt-2">
            <button className="hover:shadow-md rounded-md border">
              <ColumnsDropdown />
            </button>
          </div>
        </div>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            pagination
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </div>
    </>
  );
};

export default withAuth(Customers);
