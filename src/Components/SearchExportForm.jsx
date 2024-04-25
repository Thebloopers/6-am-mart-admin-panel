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
              
            </div>
          </form>

          
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
