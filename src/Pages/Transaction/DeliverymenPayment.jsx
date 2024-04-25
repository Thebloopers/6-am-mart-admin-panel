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

import { FaSearch } from "react-icons/fa";
import { LuListFilter } from "react-icons/lu";

import { IoMdStar } from "react-icons/io";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { IoEyeSharp } from "react-icons/io5";
import withAuth from "../../HOC/withAuth";

const tableData = [
  {
    id: "1",
    name: "Lily Michelle",
    type: "Store",
    date: "27 Nov 2023 01:50:pm",
    amount: "$ 433.64",
    description: "Store collect cash payments",
    action: "",
  },
];

function DeliverymenPayment() {
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
      <div className="flex items-center justify-between">
        <h1 className="page-header-title flex items-center">
          <span className="page-header-icon mr-2">
            <img
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/report.png"
              className="w-[30px] "
              alt=""
            />
          </span>
          <span className="font-bold text-2xl">
            Provide Deliverymen Earning
          </span>
        </h1>
      </div>

      <div className=" mt-6">
        <div className="bg-white shadow-md rounded border border-gray-200 px-8 pt-6 pb-8 mb-4">
          <form method="post" id="add_transaction">
            <input
              type="hidden"
              name="_token"
              value="VnxlaMa6123NLqwP1UuFryMihM6bSg4fLdbtIrtD"
              autoComplete="off"
              className=""
            />
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
              <div>
                <div className="mb-4">
                  <label
                    htmlFor="type"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Deliveryman
                  </label>
                  <select
                    name="type"
                    id="type"
                    className="form-select border w-full border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#24bac3]"
                  >
                    <option value="deliveryman">Deliveryman</option>
                    <option value="store">Store</option>
                    <option value="deliveryman">Deliveryman</option>
                    <option value="store">Store</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="deliveryman"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Method
                  </label>
                  <input
                    className="form-input border border-gray-300 rounded px-4 w-full py-2 focus:outline-none focus:border-[#24bac3]"
                    type="text"
                    name="method"
                    id="method"
                    required
                    maxLength="191"
                    placeholder="Ex: cash "
                  />
                </div>
              </div>

              <div>
                <div className="mb-4">
                  <label
                    htmlFor="ref"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Amount $
                  </label>
                  <input
                    className="form-input border w-full border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#24bac3]"
                    type="text"
                    name="ref"
                    id="ref"
                    maxLength="191"
                    placeholder="Ex:100 "
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="amount"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Reference{" "}
                  </label>
                  <input
                    className="form-input border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-[#24bac3]"
                    type="text"
                    min=".01"
                    step="0.01"
                    name="amount"
                    id="amount"
                    max="999999999999.99"
                    placeholder="Ex collect cash"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button
                className="bg-gray-400 hover:bg-[#24bac3] text-white font-bold py-2 px-4 rounded mr-2"
                type="reset"
                id="reset_btn"
              >
                Reset
              </button>
              <button
                className="bg-[#24bac3] hover:bg-[#56dce3] text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Collect cash
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="md:flex  items-center justify-between md:gap-4 mt-5 border  ">
        <h1 className="page-header-title capitalize m-0 flex text-lx ml-2 gap-3 font-extrabold">
          <span>
            Deliverymen Earning Provide Table
            <span className="badge badge-soft-dark ml-2 text-sm bg-gray-300 p-1">
              3
            </span>
          </span>
        </h1>

        <div class="card-header py-4 border-b-0 md:flex md:flex-wrap md:items-center md:justify-between mx-2">
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

          <div class="flex items-center space-x-4 ml-5  mt-3">
            <div className="relative ">
              <button
                className="btn btn-secondary py-1 px-4 flex rounded-sm items-center border border-[#24bac3]"
                onClick={toggleDropdown}
              >
                <AiOutlineDownload size={20} className="mb-1   " /> Export
                <span className="ml-2 mr-2 py-2  ">
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
      <div className="overflow-x-auto max-w-[348px] md:max-w-full mt-4 shadow-sm ">
        <table className="table-auto min-w-full border-collapse  border border-gray-200">
          <thead className="bg-gray-100">
            <tr className=" text-sm ">
              <th className=" px-4 py-2 ">Sl</th>
              <th className=" px-4 py-2 ">Name</th>
              <th className=" px-4 py-2 ">Type</th>
              <th className=" px-4 py-2 text-center">Received At</th>
              <th className=" px-4 py-2 text-center">Amount</th>
              <th className=" px-4 py-2 text-center">Reference</th>
              <th className=" px-4 py-2  text-center">Action</th>
            </tr>
          </thead>
          <tbody id="set-rows  ">
            {tableData?.map((item) => (
              <tr key={item.id}>
                <td>
                  <span className="ml-7">{item.id}</span>
                </td>
                <td className="text-sm text-center ">{item.name}</td>

                <td className=" text-center text-sm">{item.type}</td>
                <td className="text-center text-sm"> {item.date}</td>
                <td className="text-center text-sm"> {item.amount}</td>

                <td className="text-center  "> {item.description}</td>

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

export default withAuth(DeliverymenPayment);
