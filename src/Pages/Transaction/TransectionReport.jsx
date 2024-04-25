import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useState, useEffect } from "react";
import {
  AiOutlineSearch,
  AiOutlineDownload,
  AiOutlineFilter,
  AiOutlineTable,
} from "react-icons/ai";

import { Link } from "react-router-dom";
import { MdExpandMore } from "react-icons/md";
import withAuth from "../../HOC/withAuth";

const columns = [
  { label: "Sl", id: 1 },
  { label: "Order id", id: 2 },
  { label: "Store", className: "border-0" },
  { label: "Customer name", className: "border-0 whit" },
  { label: "Total item amount", className: "border-0 min-w-120" },
  { label: "Item discount", className: "border-0" },
  { label: "Coupon discount", className: "border-0" },
  { label: "Discounted amount", className: "border-0" },
  { label: "Vat/tax", className: "border-0" },
  { label: "Delivery charge", className: "border-0" },
  { label: "Order amount", className: "border-0" },
  { label: "Admin discount", className: "border-0" },
  { label: "Store discount", className: "border-0" },
  { label: "Admin commission", className: "border-0" },
  { label: "Additional Charge", className: "border-0" },
  {
    label: "Commision on delivery charge",
    className: "min-w-140 text-capitalize",
  },
  { label: "Admin net income", className: "min-w-140 text-capitalize" },
  { label: "Store net income", className: "min-w-140 text-capitalize" },
  { label: "Amount received by", className: "border-0 min-w-120" },
  {
    label: "Payment method",
    className: "border-top border-bottom text-capitalize",
  },
  { label: "Payment status", className: "border-0" },
  { label: "Action", className: "border-0" },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  {
    sl: 1,
    "Order id": "100100",
    deliveryManInfo: "Health Life",
    createdBy: "Marjahan Sultana",
    disburseAmount: "$ 4,141.32",
    col5: "$ 0.00",
    col6: "$ 0.00",
    col7: "$ 100.00",
    col8: "$ 404.13",
    col9: "$ 0.00",
    col10: "$ 4,455.45",
    col11: "$ 510.00",
    col12: "$ 90.00",
    col13: "$ 414.13",
    col14: "$ 10.00",
    col15: "$ 25.00",
    col16: "$ -60.87",
    col17: "$ 3,637.19",
    createdByLink:
      "https://6ammart-admin.6amtech.com/admin/users/customer/view/8",
    paymentMethod: "Cash on delivery",
    status: "Completed",
    actionLink:
      "https://6ammart-admin.6amtech.com/admin/report/generate-statement/33",
  },
];

function TransectionReport() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleExport = (type) => {
    // Implement export functionality here based on the selected type (e.g., Excel or CSV)
    console.log("Exporting as", type);
    // Close the dropdown after exporting
    setIsDropdownOpen(false);
  };

  return (
    <div>
      <h1 className="font-bold text-2xl flex items-center mb-4">
        <span className="inline-block mr-2">
          <img
            src="https://6ammart-admin.6amtech.com/public/assets/admin/img/report.png"
            className="w-[25px] "
            alt=""
          />{" "}
        </span>
        <span className="align-middle">Transaction Report</span>
      </h1>

      <div className="border shadow-md rounded p-4">
        <h1 className="font-bold text-md  items-center mb-4">
          <span className="align-middle">Search Data</span>
        </h1>

        <div className="md:flex  md:gap-4 ">
          <div className="w-full md:w-1/4 my-2  ">
            <select
              name="module_id"
              className=" set-filter border p-2 py-3  w-full  px-10  rounded"
            >
              <option value="" selected>
                All modules
              </option>
              <option value="1">Grocery</option>
              <option value="2">Pharmacy</option>
              <option value="3">Shop</option>
              <option value="4">Food</option>
            </select>
          </div>

          {/* Zone select */}
          <div className=" w-full md:w-1/4 mt-2   ">
            <select
              name="zone_id"
              className="form-select border p-2 py-3  px-10  w-full rounded"
              id="zone"
            >
              <option value="all">All Zones</option>
              <option value="1">Main Demo Zone</option>
            </select>
          </div>

          {/* Store select */}
          <div className=" w-full md:w-1/4 mt-2  ">
            <select
              name="store_id"
              className=" set-filter border p-2 py-3  w-full  px-10  rounded"
            >
              <option value="all" selected>
                All stores
              </option>
            </select>
          </div>

          {/* Filter select */}
          <div className=" w-full md:w-1/4 mt-2  ">
            <select
              name="filter"
              className=" border py-3  p-2 px-10  w-full rounded"
            >
              <option value="all_time" selected>
                All Time
              </option>
              <option value="this_year">This Year</option>
              <option value="previous_year">Previous Year</option>
              <option value="this_month">This Month</option>
              <option value="this_week">This Week</option>
              <option value="custom">Custom</option>
            </select>
          </div>

          <div className="w-full sm:w-auto md:hidden border text-center border-[#24bac3] bg-[#006161] text-white mt-3 rounded-md">
            <button type="submit" className="  h-10 ">
              Filter
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="lg:col-span-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center  gap-2">
              <div className="sm:col-span-1 ">
                <a
                  href="#"
                  className="block bg-gray-100 border-2 rounded-md shadow-md py-10 p-4 "
                >
                  <div
                    className="info-icon flex justify-end  "
                    data-toggle="tooltip"
                    data-placement="top"
                    title="When the order is successfully delivered full order amount goes to this section."
                  >
                    <img
                      src="https://6ammart-admin.6amtech.com/public/assets/admin/img/report/new/info1.png"
                      alt="report/new"
                    />
                  </div>

                  <div className="flex justify-center items-center">
                    <img
                      src="https://6ammart-admin.6amtech.com/public/assets/admin/img/report/new/trx1.png"
                      className="icon "
                      alt="report/new"
                    />
                  </div>

                  <h3 className="title text-green-600 text-2xl py-6 text-center font-extrabold  ">
                    $ 201.24K
                  </h3>
                  <h6 className="subtitle font-bold text-center">
                    Completed Transaction
                  </h6>
                </a>
              </div>
              <div className="sm:col-span-1">
                <a
                  href="#"
                  className="block bg-gray-100 rounded-md shadow-md py-10 p-4  "
                >
                  <div
                    className="info-icon flex justify-end "
                    data-toggle="tooltip"
                    data-placement="top"
                    title="If the order is successfully refunded  the full order amount goes to this section without the delivery fee and delivery tips."
                  >
                    <img
                      src="https://6ammart-admin.6amtech.com/public/assets/admin/img/report/new/info3.png"
                      alt="report/new"
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="https://6ammart-admin.6amtech.com/public/assets/admin/img/report/new/trx3.png"
                      className="icon "
                      alt="report/new"
                    />
                  </div>

                  <h3 className="title text-2xl py-6 text-center text-red-600 font-extrabold">
                    $ 187.00
                  </h3>
                  <h6 className="subtitle font-bold text-center ">
                    Refunded Transaction
                  </h6>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="grid grid-cols-1 gap-2">
              <div>
                <div className="bg-gray-100 rounded-md shadow-md p-2 ">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="img"
                        src="https://6ammart-admin.6amtech.com/public/assets/admin/img/report/new/admin-earning.png"
                        alt=""
                      />
                      <h4 className="name font-bold">Admin Earning</h4>
                    </div>
                    <div
                      className="info-icon"
                      data-toggle="tooltip"
                      data-placement="right"
                      title="Deducting the admin discount from the admin net income amount goes to this section."
                    >
                      <img
                        src="https://6ammart-admin.6amtech.com/public/assets/admin/img/report/new/info1.png"
                        alt="report/new"
                      />
                    </div>
                  </div>
                  <h4 className="earning text-blue-600 font-extrabold ">
                    $ 6.65K
                  </h4>
                </div>
              </div>
              <div>
                <div className="bg-gray-100 rounded-md shadow-md p-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="img"
                        src="https://6ammart-admin.6amtech.com/public/assets/admin/img/report/new/store-earning.png"
                        alt=""
                      />
                      <h4 className="name font-bold">Store Earning</h4>
                    </div>
                    <div
                      className="info-icon"
                      data-toggle="tooltip"
                      data-placement="right"
                      title="If self-delivery is off  deducting delivery man earnings & admin commission order amount goes to store earnings otherwise deducting admin commission all order amount goes to this section."
                    >
                      <img
                        src="https://6ammart-admin.6amtech.com/public/assets/admin/img/report/new/info2.png"
                        alt="report/new"
                      />
                    </div>
                  </div>
                  <h4 className="earning text-green-600 font-extrabold ">
                    $ 34.45K
                  </h4>
                </div>
              </div>
              <div>
                <div className="bg-gray-100 rounded-md shadow-md p-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="img"
                        src="https://6ammart-admin.6amtech.com/public/assets/admin/img/report/new/deliveryman-earning.png"
                        alt=""
                      />
                      <h4 className="name font-bold">Deliveryman Earning</h4>
                    </div>
                    <div
                      className="info-icon"
                      data-toggle="tooltip"
                      data-placement="right"
                      title="Deducting the admin commission on the delivery fee  the delivery fee & tips amount goes to earning section."
                    >
                      <img
                        src="https://6ammart-admin.6amtech.com/public/assets/admin/img/report/new/info3.png"
                        alt="report/new"
                      />
                    </div>
                  </div>
                  <h4 className="earning  text-orange-600 font-extrabold ">
                    $ 195.30K
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="md:flex  items-center justify-between md:gap-4 mt-5 border  ">
          <h1 className="page-header-title capitalize m-0 flex text-lx ml-2 gap-3 font-extrabold">
            <span>
              Order Transactions
              <span className="badge badge-soft-dark ml-2 text-sm bg-gray-300 p-1">
                34
              </span>
            </span>
          </h1>

          <div class="card-header py-4 border-b-0 md:flex md:flex-wrap md:items-center md:justify-between ">
            <form class="flex items-center">
              <div class="relative border  rounded-md rounded-r-lg w-full mx-2">
                <input
                  id="datatableSearch_"
                  type="search"
                  name="search"
                  class="form-control py-3 w-full px-10  rounded-lg relative  border-[#24bac3] "
                  placeholder="Ex:Search store name"
                  aria-label="Search"
                />
                <button
                  type="submit"
                  class="absolute right-0 top-0 bottom-0 flex items-center justify-center  text-white  bg-[#24bac3] px-3  rounded-r-lg"
                >
                  <AiOutlineSearch size={20} />
                </button>
              </div>
            </form>

            <div class="flex items-center space-x-4 ml-5 mt-2 mr-3 py-1">
              <div className="relative ">
                <button
                  className="btn btn-secondary py-3 px-4 flex items-center border border-[#24bac3]"
                  onClick={toggleDropdown}
                >
                  <AiOutlineDownload size={20} className="mr-1  " /> Export
                  <span className="ml-2">
                    <MdExpandMore />
                  </span>
                </button>

                <div
                  className={`dropdown-unfold dropdown-menu dropdown-menu-right ${
                    isDropdownOpen ? "" : "hidden"
                  } mt-1 absolute z-10 w-40 bg-white rounded-lg shadow-md`}
                >
                  <span className="dropdown-header bg-gray-200 text-gray-700 py-2 px-3 rounded-t-lg">
                    Download options
                  </span>
                  <Link
                    className="dropdown-item flex items-center py-2 px-3 hover:bg-gray-100"
                    onClick={() => handleExport("Excel")}
                  >
                    <img
                      className=" w-2 h-2 mr-2"
                      src="https://6ammart-admin.6amtech.com/public/assets/admin/svg/components/excel.svg"
                      alt="Excel"
                    />
                    Excel
                  </Link>
                  <Link
                    className="dropdown-item flex items-center py-2 px-3 hover:bg-gray-100"
                    onClick={() => handleExport("CSV")}
                  >
                    <img
                      className="avatar w-2 h-2  mr-2"
                      src="https://6ammart-admin.6amtech.com/public/assets/admin/svg/components/placeholder-csv-format.svg"
                      alt="CSV"
                    />
                    .CSV
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 overflow-x-auto max-w-[330px] md:max-w-full shadow-sm">
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column, index) => (
                    <TableCell
                      key={index}
                      align="left"
                      className={column.className}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, rowIndex) => (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={rowIndex}
                    >
                      {columns.map((column, colIndex) => (
                        <TableCell
                          key={colIndex}
                          align="left"
                          className={column.className}
                        >
                          {row[column.id]}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  );
}

export default withAuth(TransectionReport);
