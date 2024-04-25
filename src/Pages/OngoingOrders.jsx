import React from "react";

import ExportButton from "../Components/ExportButton";
import SearchBox from "../Components/SearchBox";
import { DataGrid } from "@mui/x-data-grid";
import withAuth from "../HOC/withAuth";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "OrderId", headerName: "Order Id", width: 130 },
  { field: "OrderDate", headerName: "Order Date", width: 130 },
  {
    field: "CustomerInformation",
    headerName: "Customer Information",
    width: 300,
  },
  { field: "Store", headerName: "Store", width: 130 },
  { field: "TotalAmount", headerName: "Total Amount", width: 130 },
  { field: "OrderStatus", headerName: "Order Status", width: 130 },
  { field: "Actions", headerName: "Actions", width: 130 },
];

const rows = [
  {
    id: 1,
    OrderId: "56554sdhgdgtftf",
    OrderDate: "12/06/2024",
    CustomerInformation: "Akram Khan +8**********",
    Store: "Eorange",
    TotalAmount: "112",
    OrderStatus: "pending",
    Actions: "",
  },
];
function OngoingOrders() {
  return (
    <>
      <div className="page-header bg-white py-4 px-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex items-center">
            <h1 className="page-header-title text-xl text-capitalize flex items-center">
              <span className="page-header-icon mr-2">
                <img
                  src="https://6ammart-admin.6amtech.com/public/assets/admin/img/items.png"
                  alt="Items Icon"
                  className="w-6"
                />
              </span>
              On Going Orders
              <span className="badge badge-soft-dark ml-2">6</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="card-header flex  gap-3 border p-2 mt-8">
        <div className="search--button-wrapper flex flex-wrap justify-end md:w-full max-w-[] mb-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="">
              <SearchBox placeholder={"Ex:Search Email"} />
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
          className="max-w-[400px] overflow-auto md:max-w-full"
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
}

export default withAuth(OngoingOrders);
