import React from "react";
import { useState, useEffect } from "react";
import {
  AiOutlineSearch,
  AiOutlineDownload,
  AiOutlineFilter,
  AiOutlineTable,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdExpandMore } from "react-icons/md";
// import OrderTable from "../Components/OrderTable";

import { FaSearch } from "react-icons/fa";
import { LuListFilter } from "react-icons/lu";

import { IoMdStar } from "react-icons/io";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
// import ToggleButton from '../Components/ToggleButton';
import { IoEyeSharp } from "react-icons/io5";
import withAuth from "../../HOC/withAuth";

const tableData = [
  {
    id: "1",
    amount: "$ 736.36",
    Store: "Click & Collect",
    date: "27 Nov 2023 01:46:pm",
    status: "Approved",
    // "action": "1"
  },
  {
    id: "2",
    amount: "$ 3,500.00",
    Store: "Eorange",
    date: "29 Sep 2022 03:14:pm",
    status: "Approved",
    // "action": "1"
  },
];

function WithdrawRequest() {
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
        <div>
          <h1 className="page-header-title capitalize m-0 flex text-2xl gap-3 font-extrabold">
            <span className="page-header-icon">
              <i className="w-26">
                <LuListFilter />
              </i>
            </span>
            <span> Store Withdraw Transaction </span>
          </h1>
        </div>
        <div>
          <div className="md:flex  items-center justify-between md:gap-4 mt-5 border  ">
            <h1 className="page-header-title capitalize m-0 flex text-lx ml-2 gap-3 font-extrabold">
              <span>
                Transaction History
                <span className="badge badge-soft-dark ml-2 text-sm bg-gray-300 p-1">
                  6
                </span>
              </span>
            </h1>

            <form className="search-form  sm:min-w-0" onSubmit={handleSubmit}>
              <div className="relative flex items-center gap-0 ml-2 "></div>
            </form>

            <div class="card-header py-4 border-b-0 md:flex md:flex-wrap md:items-center md:justify-between">
              <form class="flex items-center">
                <div class="relative border rounded-md rounded-r-lg">
                  <input
                    id="datatableSearch_"
                    type="search"
                    name="search"
                    class="form-control h-10 px-6 mr-3  rounded-lg w-full focus:outline-none focus:ring-2 border-[#24bac3] focus:ring-primary"
                    placeholder="Ex:Search store name"
                    aria-label="Search"
                  />
                  <button
                    type="submit"
                    class="absolute right-0 top-0 bottom-0 flex items-center justify-center  text-white b bg-[#24bac3] h-10 w-10 rounded-r-lg"
                  >
                    <AiOutlineSearch size={20} />
                  </button>
                </div>
              </form>

              <div class="flex items-center space-x-4 ml-5">
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

                <div className="relative inline-block">
                  <select
                    name="slist"
                    className="form-select border py-3 px-4  mr-5 border-[#24bac3] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option selected>All</option>
                    <option value="">Approved</option>
                    <option value="">Denird</option>
                    <option value="">Pending</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="overflow-x-auto max-w-[350px] md:max-w-full mt-4 shadow-sm ">
            <table className="table-auto min-w-full border-collapse  border border-gray-200">
              <thead className="bg-gray-100">
                <tr className=" text-sm ">
                  <th className=" px-4 py-2 ">Sl</th>
                  <th className=" px-4 py-2 ">Amount</th>
                  <th className=" px-4 py-2 ">Store</th>
                  <th className=" px-4 py-2 text-center">Request Time</th>
                  <th className=" px-4 py-2 text-center">Status</th>
                  <th className=" px-4 py-2  text-center">Action</th>
                </tr>
              </thead>
              <tbody id="set-rows  ">
                {tableData?.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <span className="ml-7">{item.id}</span>
                    </td>
                    <td className="text-sm text-center ">{item.amount}</td>

                    <td className=" text-center text-sm">{item.Store}</td>
                    <td className="text-center text-sm"> {item.date}</td>

                    <td className="text-center ">
                      <button className="bg-[#00c9a71a] hover:bg-[#00c9a799]] text-[#00c9a7;] border-[#00c9a799] font-semibold py-1 px-3 rounded md:mr-2">
                        {item.status}
                      </button>
                    </td>

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
      </div>
    </div>
  );
}

export default withAuth(WithdrawRequest);
