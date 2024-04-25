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
  { label: "Sl" },
  { label: "Order id" },
  { label: "Store", className: "border-0" },
  { label: "Customer name", className: "border-0" },
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
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

function ItemReport() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your search logic here
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
      <div>
        <h1 className="font-bold text-2xl flex items-center mb-4">
          <span className="inline-block mr-2">
            <img
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/report.png"
              className="w-[25px] "
              alt=""
            />{" "}
          </span>
          <span className="align-middle">Item Report</span>
        </h1>
      </div>

      <div>
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

            <div className=" w-full md:w-1/4 mt-2  ">
              <select
                name="store_id"
                className=" set-filter border p-2 py-3  w-full  px-10  rounded"
              >
                <option value="all" selected>
                  All Categories{" "}
                </option>
              </select>
            </div>
          </div>
          {/* Filter select */}
          <div className="flex flex-col sm:flex-row  justify-between">
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

            <div className=" w-full md:w-1/4 sm:w-auto  border text-center border-[#24bac3] bg-[#006161] text-white mt-3 rounded-md">
              <button type="submit" className="  h-10 ">
                Filter
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="md:flex  items-center justify-between md:gap-4 mt-5 border  ">
          <h1 className="page-header-title capitalize m-0 flex text-lx ml-2 gap-3 font-extrabold">
            <span>
              Item Report Table
              <span className="badge badge-soft-dark ml-2 text-sm bg-gray-300 p-1">
                262
              </span>
            </span>
          </h1>

          <div class="card-header py-4 border-b-0 md:flex md:flex-wrap md:items-center md:justify-between">
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

            <div class="flex items-center space-x-4 ml-5 mt-3">
              <div className="relative ">
                <button
                  className="btn btn-secondary h-10 px-4 flex items-center border border-[#24bac3]"
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
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
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
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
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

export default withAuth(ItemReport);
