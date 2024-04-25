import React, { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineDownload,
  AiOutlineFilter,
  AiOutlineTable,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdExpandMore } from "react-icons/md";
import withAuth from "../HOC/withAuth";

function OrderRefunds() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleExport = (type) => {
    console.log("Exporting as", type);
    setIsDropdownOpen(false);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 ">
      <div className="page-header flex items-center">
        <img
          src="https://6ammart-admin.6amtech.com/public/assets/admin/img/order.png"
          className="w-8"
          alt=""
        />
        <h1 className="page-header-title text-capitalize ml-4 flex items-center">
          Refund Requested
          <span className="badge badge-soft-dark ml-2 bg-slate-500 p-1 rounded-md">
            55
          </span>
        </h1>
      </div>

      <div className="card-header py-4 border-b-0 flex items-center justify-between flex-wrap">
        <form className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
          <div className="relative border rounded-md rounded-r-lg flex-1 mr-2">
            <input
              id="datatableSearch_"
              type="search"
              name="search"
              className="form-control h-10 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full"
              placeholder="Ex:101100"
              aria-label="Search"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 bottom-0 flex items-center justify-center text-white bg-[#99A7BA] h-10 w-10 rounded-r-lg"
            >
              <AiOutlineSearch size={20} />
            </button>
          </div>
        </form>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              className="btn btn-secondary h-10 px-4 flex items-center border"
              onClick={toggleDropdown}
            >
              <AiOutlineDownload size={20} className="mr-1" /> Export
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
                to="#"
                className="dropdown-item flex items-center py-2 px-3 hover:bg-gray-100"
                onClick={() => handleExport("Excel")}
              >
                Excel
              </Link>
              <Link
                to="#"
                className="dropdown-item flex items-center py-2 px-3 hover:bg-gray-100"
                onClick={() => handleExport("CSV")}
              >
                .CSV
              </Link>
            </div>
          </div>

          <div className="relative inline-block">
            <select
              name="slist"
              className="form-select border py-2 px-4 pr-12 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option selected>Refund Requests</option>
              <option value="">Refund</option>
              <option value="">Rejected</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              {/* <MdExpandMore /> */}
            </div>
          </div>

          <button className="btn btn-white h-10 flex items-center border rounded-lg px-3 transition duration-300 ease-in-out hover:shadow-md">
            <AiOutlineFilter size={20} className="mr-1" /> Filter
            <span className="badge badge-success badge-pill ml-1">0</span>
          </button>

          <button className="btn btn-white h-10 flex items-center border rounded-lg px-3 transition duration-300 ease-in-out hover:shadow-md">
            <AiOutlineTable size={20} className="mr-1" /> Columns
          </button>
        </div>
      </div>
    </div>
  );
}

export default withAuth(OrderRefunds);
