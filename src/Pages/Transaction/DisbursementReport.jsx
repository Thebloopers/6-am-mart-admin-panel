import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { useState, useEffect } from "react";
import {
  AiOutlineSearch,
  AiOutlineDownload,
  AiOutlineFilter,
  AiOutlineTable,
} from "react-icons/ai";

import { Link } from "react-router-dom";
import { MdExpandMore } from "react-icons/md";

import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import withAuth from "../../HOC/withAuth";

const tableData = [
  {
    sl: 1,
    id: "#1002",
    deliveryManLink:
      "https://6ammart-admin.6amtech.com/admin/users/delivery-man/preview/1",
    deliveryManName: "John Doe",
    createdAt: "27 Nov 2023 12:44:pm",
    disburseAmount: "$ 8,308.86",
    paymentMethod: "6cash",
    status: "Pending",
  },
];

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function DisbursementReport() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleExport = (type) => {
    // Implement export functionality here based on the selected type (e.g., Excel or CSV)
    console.log("Exporting as", type);
    // Close the dropdown after exporting
    setIsDropdownOpen(false);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div>
        <h1 className="font-bold text-2xl flex items-center mb-4">
          <span className="inline-block mr-2">
            <img
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/report/new/disburstment.png"
              className="w-[25px] "
              alt=""
            />{" "}
          </span>
          <span className="align-middle">Disbursement Report</span>
        </h1>
      </div>
      <div>
        <Box>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label=" Store Disbursements" {...a11yProps(0)} />
              <Tab label=" Delivery Man Disbursements" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div className="mt-5">
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-3">
                <div className="lg:col-span-1">
                  <div className="grid grid-cols-1 sm:grid-cols-3 items-center  gap-2">
                    <div className="sm:col-span-1 ">
                      <a
                        href="#"
                        className="block bg-gray-100 border rounded-sm shadow-sm py-10 p-4 "
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
                          $ 940.91
                        </h3>
                        <h6 className="subtitle  text-center">
                          Pending <span>Disbursementsn</span>
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
                            src="https://6ammart-admin.6amtech.com/public/assets/admin/img/report/new/trx5.png"
                            className=" w-24 "
                            alt="report/new"
                          />
                        </div>

                        <h3 className="title text-2xl py-6 text-center  font-extrabold">
                          $ 000.00
                        </h3>
                        <h6 className="subtitle  text-center ">
                          Completed Disbursements
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
                          $ 000.91
                        </h3>
                        <h6 className="subtitle  text-center ">
                          Canceled Transactions
                        </h6>
                      </a>
                    </div>
                  </div>
                </div>
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
                        <AiOutlineDownload size={20} className="mr-1  " />{" "}
                        Export
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
              <table className="table-auto min-w-full border-collapse  border border-gray- table ta">
                <thead className="bg-gray-100">
                  <tr className=" text-sm ">
                    <th className="px-4 py-2">Sl</th>
                    <th className="px-4 py-2">Id</th>
                    <th className="px-4 py-2">Delivery Man Info</th>
                    <th className="px-4 py-2">Created at</th>
                    <th className="px-4 py-2">Disburse Amount</th>
                    <th className="px-4 py-2">Payment method</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">
                      <div className="text-center">Action</div>
                    </th>
                  </tr>
                </thead>
                <tbody id="set-rows  ">
                  {tableData?.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <span className="ml-7">{item.sl}</span>
                      </td>
                      <td className="text-sm text-center ">{item.id}</td>

                      <td className=" text-center text-sm">
                        {item.deliveryManName}
                      </td>
                      <td className="text-center text-sm"> {item.createdAt}</td>
                      <td className="text-center text-sm">
                        {" "}
                        {item.disburseAmount}
                      </td>

                      <td className="text-center  "> {item.paymentMethod}</td>
                      <td className="text-center  ">
                        <button className="border border-[#24bac3] hover:bg-[#24bac3] hover:text-[#24bac3] text-[#24bac3] text-center font-semibold py-1 px-3 rounded md:mr-2">
                          {item.status}
                        </button>{" "}
                      </td>
                      <td className="py-3 px-2  text-center   ">
                        <button className="border border-[#24bac3] hover:bg-[#24bac3] hover:text-[#24bac3] text-[#24bac3] text-center font-semibold py-1 px-3 rounded md:mr-2">
                          {item.action}
                          <FaPen className="text-[#24bac3] hover:text-white" />
                        </button>
                        <button className="border border-[#ff7500] hover:bg-[#ff7500] hover:text-[#ff7500] text-white text-center font-semibold py-1 px-3 rounded md:mr-2">
                          {item.action}
                          <MdDelete className="text-[#ff7500] hover:text-white" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div className="mt-5">
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-3">
                <div className="lg:col-span-1">
                  <div className="grid grid-cols-1 sm:grid-cols-3 items-center  gap-2">
                    <div className="sm:col-span-1 ">
                      <a
                        href="#"
                        className="block bg-gray-100 border rounded-sm shadow-sm py-10 p-4 "
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
                          $ 940.91
                        </h3>
                        <h6 className="subtitle  text-center">
                          Pending <span>Disbursementsn</span>
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
                            src="https://6ammart-admin.6amtech.com/public/assets/admin/img/report/new/trx5.png"
                            className=" w-24 "
                            alt="report/new"
                          />
                        </div>

                        <h3 className="title text-2xl py-6 text-center  font-extrabold">
                          $ 000.00
                        </h3>
                        <h6 className="subtitle  text-center ">
                          Completed Disbursements
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
                          $ 000.91
                        </h3>
                        <h6 className="subtitle  text-center ">
                          Canceled Transactions
                        </h6>
                      </a>
                    </div>
                  </div>
                </div>
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
                        <AiOutlineDownload size={20} className="mr-1  " />{" "}
                        Export
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
                    <th className="px-4 py-2">Sl</th>
                    <th className="px-4 py-2">Id</th>
                    <th className="px-4 py-2">Delivery Man Info</th>
                    <th className="px-4 py-2">Created at</th>
                    <th className="px-4 py-2">Disburse Amount</th>
                    <th className="px-4 py-2">Payment method</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">
                      <div className="text-center">Action</div>
                    </th>
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
                      <td className="text-center text-sm">
                        {" "}
                        {item.ExpenseType}
                      </td>
                      <td className="text-center text-sm">
                        {" "}
                        {item.CustomerName}
                      </td>

                      <td className="text-center  "> {item.ExpenseAmount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CustomTabPanel>
        </Box>
      </div>
    </div>
  );
}

export default withAuth(DisbursementReport);
