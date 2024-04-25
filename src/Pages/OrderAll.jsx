import React from 'react'
// import SelectDateRange from '../Components/Sandeep/SelectDateRange'
import SearchExportForm from '../Components/SearchExportForm'
import OrderTable from '../Components/OrderTable'
// import Pagination from '../Components/Sandeep/Pagination'
import { useState } from 'react';
import { IoFilterOutline } from "react-icons/io5";
import { FaSearch } from 'react-icons/fa';
import withAuth from '../HOC/withAuth';



function OrderAll() {
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your search logic here
  };
  return (
    <div>
       <h1 className="page-header-title capitalize m-0 flex text-2xl gap-3 font-extrabold ">
      <span className="page-header-icon">
        <img src="https://6ammart-admin.6amtech.com/public/assets/admin/img/order.png" className="w-26" alt="" />
      </span>
      <span>
        All Orders
        <span className="badge badge-soft-dark ml-2 text-sm">30</span>
      </span>
      </h1>
   <SearchExportForm/>

      {/* <div className=' flex justify-end gap-4 mt-9 border p-4'>
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="relative flex justify-end ">
        <input
          id="datatableSearch_"
          type="search"
          name="search"
          className=" h-10 pl-10 pr-4 placeholder-gray-400 border   border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Ex: 10010"
          value={searchInput}
          onChange={handleInputChange}
          aria-label="Search"
        />
        <button type="submit" className="absolute inset-y-0  px-4 py-1 bg-slate-400 text-gray-600 rounded-lg" >
      <FaSearch />
    </button> 
 </div>
 <div>
 
 </div> 
    </form>

    <div className="relative ">
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
  <div className='flex text-2xl'>
  <i><IoFilterOutline /> </i>
  <span> Filter</span>
  </div>
     </div> */}
      <OrderTable/>
    
      {/* <Pagination/> */}
    </div>
  )
}

export default withAuth(OrderAll)
