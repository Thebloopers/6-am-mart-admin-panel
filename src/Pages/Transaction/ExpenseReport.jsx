import React from "react";
import { IoEyeSharp } from "react-icons/io5";
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

const tableData = [
  {
    id: "1",
    orderID: "100100",
    date: "27 Nov 2023 01:50:pm",
    ExpenseType: "Free Delivery",
    CustomerName: "Marjahan Sultana",
    ExpenseAmount: "$ 500.00",
  },
];

function ExpenseReport() {
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
          <span className="align-middle">Expense Report</span>
        </h1>
      </div>

      <div>
        <div className="light-card mb-3 flex gap-3 rounded items-center text-[#0477ca] p-3 text-sm bg-[#edf7ff] ">
          <img
            className="w-4 h-4"
            src="https://6ammart-admin.6amtech.com/public/assets/admin/img/icons/intel.png"
            alt=""
          />
          <span className="">
            This report will show all the orders in which the admin discount has
            been used. The admin discount are: Free delivery over store discount
            Coupon discount & item discounts(partial according to order
            commission).
          </span>
        </div>
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
                  All Customers{" "}
                </option>
              </select>
            </div>
          </div>
          {/* Filter select */}
          <div className="flex flex-col sm:flex-row  justify-between">
            <div className="w-full md:w-1/4 my-2  ">
              <select
                name="module_id"
                className=" set-filter border p-2 py-3  w-full  px-10  rounded"
              >
                <option value="" selected>
                  All type
                </option>
                <option value="1">Add fund bonus</option>
                <option value="2">Free delivery</option>
                <option value="3">Coupon discount</option>
                <option value="4">discount on products</option>
                <option value="4">Flash sale discount</option>
              </select>
            </div>

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
              Expense Lists
              <span className="badge badge-soft-dark ml-2 text-sm bg-gray-300 p-1">
                7
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

            <div class="flex items-center space-x-4 ml-5 mt-2 mr-2">
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

      <div className="overflow-x-auto max-w-[348px] md:max-w-full mt-4 shadow-sm ">
        <table className="table-auto min-w-full border-collapse  border border-gray-200">
          <thead className="bg-gray-100">
            <tr className=" text-sm ">
              <th className=" px-4 py-2 ">Sl</th>
              <th className=" px-4 py-2 ">Order Id</th>
              <th className=" px-4 py-2 ">Date & Time</th>
              <th className=" px-4 py-2 text-center">Expense Type</th>
              <th className=" px-4 py-2 text-center">Customer Name</th>
              <th className=" px-4 py-2 text-center">Expense Amount</th>
            </tr>
          </thead>
          <tbody id="set-rows  ">
            {tableData?.map((item) => (
              <tr key={item.id}>
                <td>
                  <span className="ml-7">{item.id}</span>
                </td>
                <td className="text-sm text-center ">{item.orderID}</td>

                <td className=" text-center text-sm">{item.date}</td>
                <td className="text-center text-sm"> {item.ExpenseType}</td>
                <td className="text-center text-sm"> {item.CustomerName}</td>

                <td className="text-center  "> {item.ExpenseAmount}</td>

                <td className="py-3 px-2  text-center   ">
                  <button className="bg-[#ff7500] hover:bg-orange-300 hover:text-[#ff7500] text-white text-center font-semibold py-1 px-3 rounded md:mr-2">
                    {item.action}
                    <IoEyeSharp />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default withAuth(ExpenseReport);
