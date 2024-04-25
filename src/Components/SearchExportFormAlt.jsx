import React from "react";
import { useState } from "react";
import { IoFilterOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { MdOutlineTableChart } from "react-icons/md";

const tableData = [
  {
    sl: 1,
    orderId: 100089,
    deliveryDate: "09 Mar 2023",
    deliveryTime: "01:21 PM",
    customerInfo: "+8**********",
    branch: "Branch 2",
    totalAmount: "299.87$",
    orderStatus: "done",
    orderType: "Delivery",
  },
  {
    sl: 2,
    orderId: 100089,
    deliveryDate: "09 Mar 2023",
    deliveryTime: "01:21 PM",
    customerInfo: "+8**********",
    branch: "Branch 2",
    totalAmount: "299.87$",
    orderStatus: "done",
    orderType: "Delivery",
  },
];

function SearchExportForm() {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your search logic here
  };

  return (
    <>
      <div className=" border-gray-300   ">
        <div className="md:flex  items-center justify-end md:gap-4 mt-5 border  ">
          <form className="search-form  sm:min-w-0" onSubmit={handleSubmit}>
            <div className="relative md:flex gap-5 justify-end">
              <input
                id="datatableSearch_"
                type="search"
                name="search"
                className="h-10 pl-5  pr-4  placeholder-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Ex: 10010"
                value={searchInput}
                onChange={handleInputChange}
                aria-label="Search"
              />
              <button
                type="submit"
                className="absolute inset-y-0 px-4 py-1 bg-slate-400 text-gray-600 rounded-lg"
              >
                <FaSearch />
              </button>
            </div>
          </form>

          <div className="flex gap-2 mt-4 m-1">
            <div className="mb-2">
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white transition duration-300 ease-in-out"
              >
                <i className="tio-download-to mr-2"></i>
                Export
                <i className="tio-chevron-down ml-2"></i>
              </button>
              <ul className="dropdown-menu dropdown-menu-right absolute right-0 hidden bg-white border border-gray-200 rounded-lg shadow-md py-2">
                <li>
                  <a
                    type="submit"
                    className="dropdown-item flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                    href="https://efood-admin.6amtech.com/admin/orders/export-excel?status=all"
                  >
                    <img
                      width="14"
                      src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/excel.png"
                      alt=""
                    />
                    <i class="tio-download-to mr-1"></i>
                    Excel
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex text-sm h-10 mb-2 gap-2 items-center px-2 rounded border">
              <i>
                <IoFilterOutline />
              </i>
              <span> Filter</span>
            </div>
            <div className="gap-2  bg-white h-10 flex items-center px-2 rounded border">
              <i>
                {" "}
                <MdOutlineTableChart />
              </i>{" "}
              Columns
            </div>
          </div>
        </div>

        {/* <div className="empty-data flex flex-col items-center justify-center border p-6">
<img src="https://6ammart-admin.6amtech.com/public/assets/admin/svg/illustrations/sorry.svg" alt="public" className="w-48 h-48 mb-4" />
<h5 className="text-center font-bold text-gray-600">No data found</h5>
</div> */}

        {/* 
<div className='overflow-x-auto '>
 <div className="max-w-screen">
    <table className="table-auto border-collapse border min-w-[500px] w-full border-gray-200">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 text-left">SL</th>
          <th className="px-4 py-2 text-left">Order ID</th>
          <th className="px-4 py-2 text-left">Order Date</th>
          <th className="px-4 py-2 text-left">Customer Information</th>
          <th className="px-4 py-2 text-left">Store</th>
          <th className="px-4 py-2 text-left">Item Quantity</th>
          <th className="px-4 py-2 text-left">Total Amount</th>
          <th className="px-4 py-2 text-left">Order Status</th>
          <th className="px-4 py-2 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => (
          <tr key={index}>
            <td className="px-4 py-2">{data.sl}</td>
            <td className="px-4 py-2">
              <a href={data.link} className="text-blue-500 hover:text-blue-700">
                {data.orderId}
              </a>
            </td>
            <td className="px-4 py-2">
              <div>{data.deliveryDate}</div>
              <div>{data.deliveryTime}</div>
            </td>
            <td className="px-4 py-2">
              <h6 className="text-capitalize mb-1">
                <a href={data.customerLink} className="text-blue-500 hover:text-blue-700">
                  {data.customerName}
                </a>
              </h6>
              <a href={data.customerPhoneLink} className="text-blue-500 hover:text-blue-700">
                {data.customerInfo}
              </a>
            </td>
            <td className="px-4 py-2">
              <span className="inline-block bg-blue-200 text-blue-800 px-2 py-1 rounded">{data.branch}</span>
            </td>
            <td className="px-4 py-2">
              <div>{data.totalAmount}</div>
              <span className="text-green-600">Paid</span>
            </td>
            <td className="px-4 py-2 text-capitalize">
              <span className="inline-block bg-red-200 text-red-800 px-2 py-1 rounded">{data.orderStatus}</span>
            </td>
            <td className="px-4 py-2">
              <span className="inline-block bg-green-200 text-green-800 px-2 py-1 rounded">{data.orderType}</span>
            </td>
            <td className="px-4 py-2 text-center">
              <div className="flex justify-center items-center gap-2">
                <a className="btn btn-sm btn-outline-primary rounded-full p-2 hover:bg-blue-500 hover:text-white transition duration-300">
                  <i className="fa-solid fa-eye"></i>
                </a>
                <a href={data.invoiceLink} className="btn btn-sm btn-outline-success rounded-full p-2 hover:bg-green-500 hover:text-white transition duration-300" target="_blank">
                  <i className="fa-solid fa-floppy-disk"></i>
                </a>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
 </div>
 */}
      </div>
    </>
  );
}

export default SearchExportForm;
