import React from "react";
import { useState } from "react";
import { IoEyeSharp, IoFilterOutline } from "react-icons/io5";
import { FaColumns, FaSearch } from "react-icons/fa";
import SearchExportForm from "../Components/SearchExportForm";
import withAuth from "../HOC/withAuth";
import { IoMdPrint } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { MdExpandMore } from "react-icons/md";
import { AiOutlineDownload, AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
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
function Scheduled() {
  const navigate=useNavigate()
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
    <div className=" border-gray-300 max-w-screen m-2">
      <h1 className="page-header-title capitalize m-0 flex text-2xl gap-3 font-extrabold">
        <span className="page-header-icon">
          <img
            src="https://6ammart-admin.6amtech.com/public/assets/admin/img/order.png"
            className="w-26"
            alt=""
          />
        </span>
        <span>
          Scheduled Orders
          <span className="badge badge-soft-dark ml-2 text-sm bg-gray-300 p-1">
            0
          </span>
        </span>
      </h1>
      <div className="md:flex  items-center justify-between md:gap-3 mt-4 border  ">
            <form className="search-form  sm:min-w-0" onSubmit={handleSubmit}>
              <div className="relative flex items-center gap-0  "></div>
            </form>

            <div class="card-header  border-b-0 md:flex md:flex-wrap md:items-center md:justify-between">
              <form class="flex items-center">
                <div class="relative border rounded-md w-full mx-1 my-3 rounded-r-lg">
                  <input
                    id="datatableSearch_"
                    type="search"
                    name="search"
                    class="form-control py-2  px-8     rounded-lg   flex items-center   focus:outline-none focus:ring-2 border-[#24bac3] focus:ring-primary"
                    placeholder="Ex:Search store name"
                    aria-label="Search"
                  />
                  <button
                    type="submit"
                    class="absolute right-0 top-0 bottom-0 flex items-center justify-center  text-white  bg-[#24bac3] h-10 w-10 rounded-r-lg"
                  >
                    <AiOutlineSearch size={20} />
                  </button>
                </div>
              </form>

              <div class="flex items-center ml-4  ">
                <div className="relative ">
                  <button
                    className="btn  flex items-center mx-7  border border-[#24bac3]"
                    onClick={toggleDropdown}
                  >
                    <AiOutlineDownload size={20} className="flex  " /> Export
                   
                  </button>

                  <div
                    className={`dropdown-unfold dropdown-menu dropdown-menu-right ${
                      isDropdownOpen ? "" : "hidden"
                    } mt-1 absolute z-10  bg-white rounded-lg shadow-md`}
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
         <div className="flex gap-1 m-2 ">
          <div className='flex  btn items-center border border-[#24bac3]  '>
              <i><IoFilterOutline /> </i>
                <span> Filter</span>
                </div>

           </div>
              
              </div>
            </div>
          </div>
      <div className="overflow-x-auto max-w-[330px] md:max-w-full">
        <table className="table-auto min-w-full border-collapse border text-sm font-light border-gray-200">
          <thead className="bg-gray-100  ">
            <tr>
              <th className="px-4 py-2 text-left">SL</th>
              <th className="px-4 py-2 text-left">Order ID</th>
              <th className="px-4 py-2 text-left">Order Date</th>
              <th className="px-4 py-2 text-left">Scheduled At</th>
              <th className="px-4 py-2 text-left">Customer Information</th>
              <th className="px-4 py-2 text-left">Store</th>
              <th className="px-4 py-2 text-left">Item Quantity</th>
              <th className="px-4 py-2 text-left">Total Amount</th>
              <th className="px-4 py-2 text-left">Order Status</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data) => (
              <tr>
                <td className="px-4 py-2">{data.sl}</td>
                <td className="px-4 py-2">
                  <a
                    href=""
                    className="text-blue-500 hover:text-blue-700"
                  >
                    {data.orderId}
                  </a>
                </td>
                <td className="px-2 py-2">
                  <div className="text-nowrap">{data.deliveryDate}</div>
                  <div>{data.deliveryTime}</div>
                </td>
                <td className="px-2 py-2">
                  <h6 className="text-capitalize mb-1">
                    <a
                      href=""
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Sir Moba
                    </a>
                  </h6>
                  <a
                    href="tel:+8801112223336"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    {data.customerInfo}
                  </a>
                </td>
                <td className="px-4 py-2">
                  <span className="inline-block bg-blue-200 text-blue-800 px-2 py-1 rounded">
                    {data.branch}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <div>{data.totalAmount}</div>
                  <span className="text-green-600"> $58.00</span>
                  <p className="text-red-600"> Unpaid</p>
                </td>
                <td className="px-4 py-2 text-capitalize">
                  <span className="inline-block bg-red-200 text-red-800 px-2 py-1 rounded">
                    {data?.orderStatus}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span className="inline-block bg-green-200 text-green-800 px-2 py-1 rounded">
                    {data?.orderType}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span className="inline-block bg-green-200 text-green-800 px-2 py-1 rounded">
                    {data?.orderType}
                  </span>
                </td>
                <td className="px-4 py-2 text-center">
                  <div className="flex justify-center items-center gap-2">
                  <button onClick={()=>{navigate("/order/View/details")}} className="ml-2 btn btn-sm btn-outline btn-error bg-white text-white">
                    <IoEyeSharp/>

                  </button>
                  <button onClick={()=>{navigate("/order/generate-invoice/")}} className="ml-2 btn btn-sm btn-outline btn-error bg-white text-white">
                  <IoMdPrint/>
                  </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      
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
  );
}
export default withAuth(Scheduled);
