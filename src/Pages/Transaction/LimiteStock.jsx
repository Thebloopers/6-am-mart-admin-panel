import React from "react";
import { useState, useEffect } from "react";
import {
  AiOutlineSearch,
  AiOutlineDownload,
  AiOutlineFilter,
  AiOutlineTable,
} from "react-icons/ai";
import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdExpandMore } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import withAuth from "../../HOC/withAuth";
const tableData = [
  {
    id: 1,
    name: "Nivea Refreshing Wash Gel",
    image_url:
      "https://6ammart-admin.6amtech.com/storage/app/public/product/2022-03-23-623aa83cbad9b.png",
    market: "Eco Market",
    demo_zone: "Main Demo Zone",
    quantity: 11,
  },
  {
    id: 2,
    name: "Strawberry",
    image_url:
      "https://6ammart-admin.6amtech.com/storage/app/public/product/2022-03-22-62399aae05abb.png",
    market: "Online market",
    demo_zone: "Main Demo Zone",
    quantity: 10,
  },
];

function LimiteStock() {
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
          <span className="align-middle">Low Stock Report</span>
        </h1>
      </div>
      <div>
        <div>
          <div className="md:flex  items-center justify-between md:gap-4 mt-5 border  ">
            <h1 className="page-header-title capitalize m-0 flex text-lx ml-2 gap-3 font-extrabold">
              <span>
                Order Transactions
                <span className="badge badge-soft-dark ml-2  text-sm bg-gray-300 p-1">
                  34
                </span>
              </span>
            </h1>

            <div class="card-header py-3 border-b-0 md:flex md:flex-wrap md:items-center md:justify-between ">
              <form class="flex items-center">
                <div class="relative border  rounded-md rounded-r-lg w-full mx-2">
                  <input
                    id="datatableSearch_"
                    type="search"
                    name="search"
                    class="form-control py-3 w-full px-10  rounded-lg relative focus:outline-[#24bac3] border-[#24bac3] "
                    placeholder="Ex:Search store name"
                    aria-label="Search"
                  />
                  <button
                    type="submit"
                    class="absolute right-0 top-0 bottom-0 flex items-center justify-center  text-white   bg-[#24bac3] px-3  rounded-r-lg"
                  >
                    <AiOutlineSearch size={20} />
                  </button>
                </div>
              </form>

              {/* Zone select */}
              <div className=" w-full md:w-1/4 mt-2 hover:text-[#24bac3]  ">
                <select
                  name="zone_id"
                  className="form-select border border-[#24bac3] p-2 py-3  px-10  w-full rounded focus:outline-[#24bac3]"
                  id="zone"
                >
                  <option value="all">All Zones</option>
                  <option value="1">Main Demo Zone</option>
                </select>
              </div>

              {/* Zone select */}
              <div className=" w-full md:w-1/4 mt-2  hover:text-[#24bac3]  ">
                <select
                  name="zone_id"
                  className="form-select border-[#24bac3] border p-2 py-3  px-10  w-full rounded focus:outline-[#24bac3] "
                  id="zone"
                >
                  <option value="all">All Zones</option>
                  <option value="1">Main Demo Zone</option>
                </select>
              </div>

              <div class="flex    items-center space-x-4 ml-5 mt-2 mr-3 py-1 ">
                <div className="relative ">
                  <button
                    className="btn btn-secondary   py-3 px-4 flex items-center border border-[#24bac3]"
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
      </div>

      <div className="overflow-x-auto max-w-[338px] md:max-w-full mt-4 shadow-sm ">
        <table className="table-auto min-w-full border-collapse  border border-gray-200">
          <thead className="bg-gray-100">
            <tr className=" text-sm ">
              <th className=" px-4 py-2 ">Sl</th>
              <th className="px-4 py-2  ">Name</th>
              <th className=" px-4 py-2 ">Store</th>
              <th className=" px-4 py-2 text-center"> Zone</th>
              <th className=" px-4 py-2 text-center"> Current Stock</th>
              <th className=" px-4 py-2  text-center">Action</th>
            </tr>
          </thead>
          <tbody id="set-rows  ">
            {tableData?.map((item) => (
              <tr key={item.id}>
                <td>
                  <span className="ml-7">{item.id}</span>
                </td>
                <td>
                  <div className="text-sm md:flex items-center">
                    <img src={item.image_url} className="w-20 " />

                    <h2 className="text-center text-sm">{item.name}</h2>
                  </div>
                </td>
                <td className=" text-center text-sm ">{item.market}</td>
                <td className="text-center text-sm"> {item.demo_zone}</td>
                <td className="text-center text-sm"> {item.quantity}</td>

                <td className="py-3 px-2  text-center   ">
                  <button className="border border-[#24bac3] hover:bg-[#24bac3] hover:text-[#24bac3] text-[#24bac3] text-center font-semibold py-1 px-3 rounded md:mr-2">
                    {item.action}
                    <FaPen className="text-[#24bac3] hover:text-white" />
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

export default withAuth(LimiteStock);
