import React from "react";
import ComboBox from "../Components/ComboBox";
import { ChartLabel, ReportCard } from "../Components/ReportCard";
import { DataGrid } from "@mui/x-data-grid";
import SearchBox from "../Components/SearchBox";
import ExportButton from "../Components/ExportButton";
import PieChartWithCenterLabel from "../Components/PieChartWithCenterLabel";
import withAuth from "../HOC/withAuth";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "SL", headerName: "Sl", width: 130 },
  { field: "TransactionId", headerName: "Transaction Id", width: 130 },
  { field: "CustomerInfo", headerName: "Customer Info", width: 130 },
  { field: "Credit", headerName: "Credit", width: 130 },
  { field: "Debit", headerName: "Debit", width: 130 },
  { field: "Bonus", headerName: "Bonus", width: 130 },
  { field: "Balance", headerName: "Balance", width: 130 },
  { field: "TransactionType", headerName: "Transaction Type", width: 130 },
  { field: "Reference", headerName: "Reference", width: 130 },
  { field: "CreatedAt", headerName: "Created At", width: 130 },
];

const rows = [
  {
    id: 1,
    SL: 1,
    TransactionId: "451c323d-c3c7-4b67-9f14-bf4e2163a252",
    CustomerInfo: "	Marjahan Sultana",
    Credit: 0.0,
    Debit: 858.4,
    Bonus: 0.0,
    Balance: 4441.6,
    TransactionType: "Order Place",
    Reference: 100099,
    CreatedAt: "02 Jan 202404:54:pm",
  },
];

function Report() {
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
      <div className="container mx-auto px-4 py-6">
        <div className="page-header">
          <h1 className="page-header-title flex items-center mr-3">
            <span className="page-header-icon">
              <img
                src="https://6ammart-admin.6amtech.com/public/assets/admin/img/icons/wallet.png"
                className="w-6 h-6 mr-2"
                alt="Wallet Icon"
              />
            </span>
            <span className="font-bold text-lg">Customer wallet report</span>
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
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="card mt-3">
          <div className="card-body">
            <div className="row">
              <div className="col-lg  -8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <ReportCard
                    iconUrl="https://6ammart-admin.6amtech.com/public/assets/admin/img/customer-loyality/1.png"
                    amount="$ 9,395.05"
                    TextColor={"text-[#006FBD]"}
                    bg={"bg-[#E5FCFF]"}
                  />
                  <ReportCard
                    iconUrl="https://6ammart-admin.6amtech.com/public/assets/admin/img/customer-loyality/2.png"
                    amount="$ 32,492.00"
                    TextColor={"text-[#E27E26]"}
                    bg={"bg-[#FFF2E6]"}
                  />
                  <div className="col-lg-4 shadow-md">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="text-lg font-bold mb-4">
                          Fund Statistics
                        </h5>
                        {/* Chart Component Goes Here */}
                        <PieChartWithCenterLabel />
                        {/* <div className="total-orders">
                          <h4 className="text-2xl font-bold text-gray-800 mb-2">
                            $ 36.05K
                          </h4>
                          <p className="text-sm text-gray-600">Total</p>
                        </div>
                        <div className="mt-4">
                          <ChartLabel
                            colorClass="bg-blue-400"
                            info="Fund added by Admin ($ 22,750.00)"
                          />
                          <ChartLabel
                            colorClass="bg-yellow-400"
                            info="Order Refund ($ 3,882.00)"
                          />
                          <ChartLabel
                            colorClass="bg-blue-400"
                            info="Loyalty Point ($ 18.00)"
                          />
                          <ChartLabel
                            colorClass="bg-yellow-400"
                            info="Order place ($ 9,395.05)"
                          />
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-header flex  gap-3 border p-2">
        <div className="search--button-wrapper flex flex-wrap justify-between md:w-full max-w-[] mb-4">
          <h5 className="card-title">
            <span className="card-header-icon">
              <i className="tio-dollar-outlined"></i>
            </span>
            Transactions &nbsp;
            <span className="badge badge-soft-secondary">24</span>
          </h5>
          <div className="flex flex-wrap items-center gap-3">
            <div className="">
              <SearchBox placeholder={"Ex:Search by Customer Number"} />
            </div>
            <form className="search-form theme-style"></form>
            <div>
              <ExportButton />
            </div>
          </div>
        </div>
      </div>
      <div
        className="max-w-[400px] overflow-auto md:max-w-full"
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
    </>
  );
}

export default withAuth(Report);
