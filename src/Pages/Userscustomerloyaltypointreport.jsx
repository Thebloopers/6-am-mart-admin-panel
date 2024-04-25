import React from "react";
import ComboBox from "../Components/ComboBox";
import CustomerLoyaltyCard from "../Components/CustomerLoyaltyCard";
import { DataGrid } from "@mui/x-data-grid";
import SearchBox from "../Components/SearchBox";
import ExportButton from "../Components/ExportButton";
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

const Userscustomerloyaltypointreport = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted!");
  };

  const handleReset = () => {
    // Handle form reset logic here
    console.log("Form reset!");
  };
  return (
    <>
      <div className="page-header">
        <h1 className="page-header-title flex items-center mr-3">
          <span className="page-header-icon">
            <img
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/customer-loyalty.png"
              className="w-26"
              alt=""
            />
          </span>
          <span className="ml-2 text-xl font-semibold">
            Customer loyalty point report
          </span>
        </h1>
      </div>

      <div className="card shadow-md mt-4">
        <div className="card-body">
          <h4 className="card-title mb-4">
            <span>Filter options</span>
          </h4>
          <form onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="_token"
              value="7PsLrQSIrcOH0cYd45TfvkCmF6bs9nb5VlqoEv05"
              autoComplete="off"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
              <div className="col-span-1">
                <ComboBox width={200} placeholder="Add Fund Type" />
              </div>
              <div className="col-span-1">
                <ComboBox width={200} placeholder="Customer" />
              </div>
              <div className="col-span-1">
                <ComboBox width={200} placeholder="Duration" />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="reset"
                className="btn btn--reset location-reload-to-base"
                onClick={handleReset}
              >
                Reset
              </button>
              <button
                type="submit"
                className="btn bg-[#24bac3] text-white hover:bg-[#20A7AF] ml-2"
              >
                Filter
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-8">
        <CustomerLoyaltyCard />
      </div>

      <div className="card-header flex  gap-3 border p-2 mt-8">
        <div className="search--button-wrapper flex flex-wrap justify-between md:w-full max-w-[] mb-4">
          <h5 className="card-title">
            <span className="card-header-icon">
              <i className="tio-dollar-outlined"></i>
            </span>
            Transactions &nbsp;
            <span className="badge badge-soft-secondary bg-[#F1F3F5]">2</span>
          </h5>
          <div className="flex flex-wrap items-center gap-3">
            <div className=""></div>
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

export default withAuth(Userscustomerloyaltypointreport);
