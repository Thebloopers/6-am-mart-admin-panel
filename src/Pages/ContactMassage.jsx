import React from "react";
import SearchBox from "../Components/SearchBox";
import ExportButton from "../Components/ExportButton";
import { DataGrid } from "@mui/x-data-grid";
import withAuth from "../HOC/withAuth";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const ContactMassage = () => {
  return (
    <>
      <h2 className="text-xl font-bold text-gray-800 mb-0 flex items-center gap-2 capitalize">
        <img
          src="https://6ammart-admin.6amtech.com/public/assets/back-end/img/message.png"
          alt="Message Icon"
          className="w-5 h-5"
        />
        All Message Lists
      </h2>

      <div className="card-header flex  gap-3 border p-2 mt-8">
        <div className="search--button-wrapper flex flex-wrap justify-between md:w-full max-w-[] mb-4">
          <h5 className="card-title">
            <span className="card-header-icon">
              <i className="tio-dollar-outlined"></i>
            </span>
            Message Lists &nbsp;
            <span className="badge badge-soft-secondary">24</span>
          </h5>
          <div className="flex flex-wrap items-center gap-3">
            <div className="">
              <SearchBox placeholder={"Ex:Search by Name, Email or Phone"} />
            </div>
            <form className="search-form theme-style"></form>
            <div>
              <ExportButton />
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: 400, width: "100%" }}>
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
    </>
  );
};

export default withAuth(ContactMassage);
