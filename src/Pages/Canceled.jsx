import React from "react";
import SearchExport from "../Components/SearchExportForm";
import withAuth from "../HOC/withAuth";
import { IoEyeSharp, IoFilterOutline } from "react-icons/io5";
import { IoMdPrint } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaColumns } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineDownload, AiOutlineSearch } from "react-icons/ai";
import { MdExpandMore } from "react-icons/md";
const tableData = [
  {
    sl: 1,
    orderId: 100089,
    deliveryDate: "09 Mar 2023",
    deliveryTime: "01:21 PM",
    customerInfo: "+8**********",
    Store: "Family supermarket",
    IteamQuanaty: "1",
    orderStatus: "Accepted",
    orderType: " Home Delivery",
  },
];

function Canceled() {
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
    <div>
      <h1 className="page-header-title capitalize m-0 flex text-2xl gap-3 font-extrabold">
        <span className="page-header-icon">
          <img
            src="https://6ammart-admin.6amtech.com/public/assets/admin/img/order.png"
            className="w-26"
            alt=""
          />
        </span>
        <span>
          Canceled Orders
          <span className="badge badge-soft-dark ml-2 text-sm bg-slate-300 p-1">
            1
          </span>
        </span>
      </h1>
      <div>
          <div className="md:flex  items-center justify-between md:gap-3 mt-4 border  ">
            <form className="search-form  sm:min-w-0" onSubmit={handleSubmit}>
              <div className="relative flex items-center gap-0  "></div>
            </form>

            <div class="flex items-center  ml-3 m-1   ">
                <div className="relative ">
                  <button
                    className="btn  flex items-center mr-2  border border-[#24bac3]"
                    onClick={toggleDropdown}
                  >
                    <AiOutlineDownload size={20} className="  " /> Export
                    
                  </button>

                  <div
                    className={`dropdown-unfold dropdown-menu dropdown-menu-right ${
                      isDropdownOpen ? "" : "hidden"
                    } mt-1 absolute z-10  bg-white rounded-lg shadow-md`}
                  >
                    <span className="dropdown-head text-center px-7  bg-gray-200 text-nowrap rounded-t-lg">
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
         <div className="flex gap-1 mr-2  ">
          <div className='flex  btn items-center border border-[#24bac3]  '>
              <i><IoFilterOutline /> </i>
                <span> Filter</span>
                </div>

                <div className='flex  btn items-center border border-[#24bac3]  '>
              <i><FaColumns /> </i>
                <span> Columns</span>
                </div>
           </div>
              
              </div>
          </div>
        </div>  

      <div className="overflow-x-auto max-w-[340px] md:max-w-full">
        <table className="table-auto min-w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100 text-sm">
            <tr>
              <th className="px-4 py-2 text-left">SL</th>
              <th className="px-4 py-2 text-left">Order ID</th>
              <th className="px-4 py-2 text-left">Delivery Date</th>
              <th className="px-4 py-2 text-left">Customer Info</th>
              <th className="px-4 py-2 text-left">Branch</th>
              <th className="px-4 py-2 text-left">Total Amount</th>
              <th className="px-4 py-2 text-left">Order Status</th>
              <th className="px-4 py-2 text-left">Order Type</th>
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
                  <span className="inline-block text-nowrap bg-green-200 text-green-800 px-2 py-1 rounded">
                    {data?.orderType}
                  </span>
                </td>
                <td className="px-4 py-2 text-center">
                  <div className="flex justify-center items-center gap-2">
                  <button onClick={()=>{navigate("/order/View/details")}} className="ml-2 btn btn-sm btn-outline btn-error bg-white text-white">
                    <IoEyeSharp/>

                  </button>
                  <button onClick={()=>{navigate("/order/generate-invoice/")}} className="ml-2 btn btn-sm btn-outline btn-error bg-white text-white">
                  <IoMdPrint />
                  </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default withAuth(Canceled);
