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
import { IoFilterOutline } from "react-icons/io5";
import { FaColumns } from "react-icons/fa";

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
         <h1 className="page-header-title capitalize m-0 flex text-2xl gap-3 font-extrabold">
        <span className="page-header-icon">
          <img
            src="https://6ammart-admin.6amtech.com/public/assets/admin/img/order.png"
            className="w-26"
            alt=""
          />
        </span>
        <span>
        Refund Requested
          <span className="badge badge-soft-dark ml-2 text-sm bg-slate-300">
            55
          </span>
        </span>
      </h1>

      <div>
          <div className="md:flex  items-center justify-between md:gap-3 mt-4 border  ">
            <form className="search-form  sm:min-w-0" onSubmit={handleSubmit}>
              <div className="relative flex items-center gap-0  "></div>
            </form>

            <div class="card-header  border-b-0 mr-3 mx-2  md:flex md:flex-wrap md:items-center md:justify-between">
              <form class="flex items-center ">
                <div class="relative border rounded-md w-full mx-4 my-3 rounded-r-lg">
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
