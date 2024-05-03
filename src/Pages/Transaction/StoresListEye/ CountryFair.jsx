
import { BsShopWindow } from "react-icons/bs";
import { FaCity, FaPhoneVolume, FaUser } from 'react-icons/fa';
import { IoMdMap, IoMdPrint } from 'react-icons/io';
import { MdOutlineEmail } from 'react-icons/md';
import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineDownload } from 'react-icons/ai';
import { MdExpandMore } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { IoEyeSharp } from "react-icons/io5";

const tableData = [
  {
    id: "1",
    Order: "100080",
    Customer: "Mr. Jhon parker",
    contact:"8**********",
    date: "27 Nov 2023 01:50:pm",
    PaymentStatus: "Unpaid",
    Total: "$433.64",
    OrderStatus: "Pending",
    action: "",
  },
]
const tableDataIteam = [
  {
    id: "1",
    Name: "Mr. Jhon parker",
    Type: "Dairy Needs",
    Price:"$ 100.00",

    action: "",
  },
]

function  CountryFair() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleExport = (format) => {
    // Handle export logic
    console.log(`Exporting as ${format}`);
  }
  return (
    <div>
      <div>
        <h1 className="font-bold text-2xl flex items-center mb-4">
          <span className="inline-block mr-2">
            <img
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/report/new/disburstment.png"
              className="w-22"
              alt=""
            />
          </span>
          <span className="align-middle">Country Fair</span>
        </h1>
        <div>
          <div className="text-base mt-5">
            <div className=" border-none">
              <div className="md:flex md:justify-between">
                <div className="">
                  <ul className="md:flex flex-wrap md:space-x-4  md:m-2 text-md font-light  ">
                    <li
                      className={`md:mr-6 p-2 hover:text-[#24bac3] cursor-pointer ${
                        value === "1" ? "text-[#24bac3] rounded-lg  border-b-[6px] border-[#24bac3] " : ""
                      }`}
                      onClick={() => handleChange(null, "1")}
                    >
                     Overview
                    </li>
                    <li
                      className={`md:mr-6 p-2 focus:text- hover:text-[#24bac3] cursor-pointer ${
                        value === "2" ? "text-[#24bac3] rounded-lg  border-b-[6px] border-[#24bac3] " : ""
                      }`}
                      onClick={() => handleChange(null, "2")}
                    >
                      Orders
                    </li>
                    <li
                      className={`md:mr-6 p-2 hover:text-[#24bac3] cursor-pointer ${
                        value === "3" ? "text-[#24bac3] rounded-lg  border-b-[6px] border-[#24bac3] " : ""
                      }`}
                      onClick={() => handleChange(null, "3")}
                    >
                     Items
                    </li>
                    <li
                      className={`md:mr-6 p-2 hover:text-[#24bac3] cursor-pointer ${
                        value === "4" ? "text-[#24bac3] rounded-lg  border-b-[6px] border-[#24bac3] " : ""
                      }`}
                      onClick={() => handleChange(null, "4")}
                    >
                    Reviews
                    </li>
                    <li
                      className={`md:mr-6 p-2 hover:text-[#24bac3] cursor-pointer ${
                        value === "5" ? "text-[#24bac3] rounded-lg  border-b-[6px] border-[#24bac3] " : ""
                      }`}
                      onClick={() => handleChange(null, "5")}
                    >
                    Discounts
                    </li>
                    <li
                      className={`md:mr-6 p-2 hover:text-[#24bac3] cursor-pointer ${
                        value === "6" ? "text-[#24bac3] rounded-lg  border-b-[6px] border-[#24bac3] " : ""
                      }`}
                      onClick={() => handleChange(null, "6")}
                    >
                     Transactions
                    </li>
                    <li
                      className={`md:mr-6 p-2 hover:text-[#24bac3] cursor-pointer ${
                        value === "7" ? "text-[#24bac3]  rounded-lg  border-b-[6px] border-[#24bac3] " : ""
                      }`}
                      onClick={() => handleChange(null, "7")}
                    >
                     Settings
                    </li>
                    <li
                      className={`md:mr-6 p-2 hover:text-[#24bac3] cursor-pointer ${
                        value === "8" ? "text-[#24bac3]  rounded-lg  border-b-[6px] border-[#24bac3] " : ""
                      }`}
                      onClick={() => handleChange(null, "8")}
                    >
                     Conversations

                    </li>
                    <li
                      className={`md:mr-6 p-2 hover:text-[#24bac3] cursor-pointer ${
                        value === "9" ? "text-[#24bac3] rounded-lg  border-b-[6px] border-[#24bac3] " : ""
                      }`}
                      onClick={() => handleChange(null, "9")}
                    >
                     Meta data
                    </li>
                    <li
                      className={`md:mr-6 p-2 hover:text-[#24bac3] cursor-pointer  ${
                        value === "10" ? "text-[#24bac3] rounded-lg  border-b-[6px] border-[#24bac3] " : ""
                      }`}
                      onClick={() => handleChange(null, "10")}
                    >
                   Disbursements
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              {value === "1" && (
                <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-capitalize mt-3">

<div className="col-md-3 ">
  <div className="card h-full bg-[#eafbff] border border-gray-200 hover:border-gray-300 transition duration-300">
    <div className="card-body text-center flex flex-col justify-center items-center">
      <h5 className=" font-semibold">
        Collected cash by store
      </h5>
      <div className="flex items-center justify-center mt-3">
        <div className="cash-icon mr-3">
          <img src="https://6ammart-admin.6amtech.com/public/assets/admin/img/cash.png" alt="img" className="w-10" />
        </div>
        <h2 className="text-4xl font-bold">$ 0.00</h2>
      </div>
    </div>
    <div className="card-footer bg-[#334257] pt-0  border-0">
      <button className="text-xl font-bold text-white hover:bg-gray-500  capitalize bg-title h-12 w-full" id="collect_cash" type="button" data-toggle="modal" data-target="#collect-cash" title="Collect Cash">
        Collect cash from store
      </button>
    </div>
  </div>
</div>

<div className="col-md-9 mt-3 ">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
    <div className="col-sm-6 ">
      <div className="resturant-card pl-5 rounded-md p-2  bg-[#fff7e7] border border-gray-300 hover:border-gray-200 transition duration-300">
        <h4 className="font-semibold text-[#feb019] text-xl ">$ 0.00</h4>
        <p className="font-semibold">Pending withdraw</p>
        <img className="resturant-icon w-10" src="https://6ammart-admin.6amtech.com/public/assets/admin/img/transactions/pending.png" alt="transaction" />
      </div>
    </div>

    <div className="col-sm-6">
      <div className="resturant-card bg--title pl-5 bg-[#eafdf6]  rounded-md p-2 border border-gray-300 hover:border-gray-200 transition duration-300">
        <h4 className="font-semibold text-[#00aa6d] text-xl ">$ 0.00</h4>
        <div className="subtitle font-semibold">Total withdrawal amount</div>
        <img className="resturant-icon w-10" src="https://6ammart-admin.6amtech.com/public/assets/admin/img/transactions/withdraw-amount.png" alt="transaction" />
      </div>
    </div>

    <div className="col-sm-6">
      <div className="resturant-card bg--title pl-5 rounded-md p-2 bg-[#fff2f2] border border-gray-200 hover:border-gray-500 transition duration-300">
        <h4 className="font-semibold text-[#ff6d6d] text-xl">$ 0.00</h4>
        <div className="subtitle font-semibold">Withdraw able balance</div>
        <img className="resturant-icon w-10" src="https://6ammart-admin.6amtech.com/public/assets/admin/img/transactions/withdraw-balance.png" alt="transaction" />
      </div>
    </div>

    <div className="col-sm-6">
      <div className="resturant-card  border pl-5 rounded-md bg-[#eafbff] p-2 border-gray-200 hover:border-gray-300 transition duration-300">
        <h4 className="font-semibold text-[#16abcb] text-xl">$ 0.00</h4>
        <div className="subtitle font-semibold">Total earning</div>
        <img className="resturant-icon w-10" src="https://6ammart-admin.6amtech.com/public/assets/admin/img/transactions/earning.png" alt="transaction" />
      </div>
    </div>
    
  </div>
</div>

               </div>
               
                 <div className="bg-white border border-gray-200 mt-3 rounded p-4">
                   <h5 className="text-xl font-bold flex items-center">
                  <span className="mr-2">
                  <i className="tio-shop-outlined"><BsShopWindow /></i>
                </span>
                <span className='text-gray-500'>Store info</span>
             </h5>
                 </div>


                 <div className="card border border-gray-200 shadow-md rounded-md">
                 
               <h5 className="text-xl font-bold text-center pt-1">Country Fair</h5>
               <p className="text-sm text-gray-600 text-center">Main Demo Zone</p>
                

               <div className="p-4 mt-4">
    
             <div className="md:flex md:justify-between ">
             <div className='flex'>
           <div className="logo mr-4">
            <img
              className="object-cover  h-[100px] rounded border border-gray-300"
              src="https://6ammart-admin.6amtech.com/storage/app/public/store/2022-03-23-623aa192a4278.png"
              alt="Country Fair Logo"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://6ammart-admin.6amtech.com/public/assets/admin/img/100x100/1.png'; }}
            />
          </div>
          <div className="address-info">
          <ul className="list-none py-3 text-dark">
            <li className="flex  mb-2">
              <i className="tio-city nav-icon mr-2"> <FaCity /></i>
              <span className='font-semibold' >Address</span>: House: 00, Road: 00, City-000, Country
            </li>
            <li className="flex items-center mb-2">
              <i className="tio-call-talking nav-icon mr-2"><MdOutlineEmail /></i>
              <span className='font-semibold'>Email</span>: <a href="">g**********@demo.com</a>
            </li>
            <li className="flex items-center mb-2">
              <i className="tio-email nav-icon mr-2"><FaPhoneVolume /> </i>
              <span className='font-semibold'>Phone</span>: <a href="tel:020000000015">0**********</a>
            </li>
            <li className="flex items-center mb-2">
              <i className=" nav-icon mr-2"><IoMdMap /> </i>
              <span className='font-semibold'>Zone</span>:<a>Main Demo Zone</a>
            </li>
          </ul>
        </div>
             </div>
             <div className="">
                <iframe
                  title="maps"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  width="100%"  >
                  <a href="https://www.gps.ie/">gps devices</a>
                </iframe>
              </div>
            </div>
            
               </div>
                 </div>
                 
                 <div className="bg-white border border-gray-200 mt-2  rounded p-4">
                   <h5 className="text-xl font-bold flex items-center">
                  <span className="mr-2">
                  <i className="tio-shop-outlined"><FaUser /></i>
                </span>
                <span className='text-gray-500' >Owner Info</span>
             </h5>
                 </div>
                 <div className='flex bg-white border border-gray-200 pl-2'>
           <div className="logo mr-4">
            <img
              className="object-cover  h-[100px] rounded-full mt-5 border border-gray-300"
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/160x160/img1.jpg"
              alt="Country Fair Logo"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://6ammart-admin.6amtech.com/public/assets/admin/img/100x100/1.png'; }}
            />
          </div>
          <div className="address-info">
          <ul className="list-none py-3 text-dark">
            <li className="flex  mb-2">
              <span className='font-bold text-xl' >John Doe G</span>
            </li>
            <li className="flex items-center mb-2">
              <i className="tio-call-talking nav-icon mr-2"><MdOutlineEmail /></i>
              <span className='font-semibold'>Email</span>: <a href="">g**********@demo.com</a>
            </li>
            <li className="flex items-center mb-2">
              <i className="tio-email nav-icon mr-2"><FaPhoneVolume /> </i>
              <span className='font-semibold'>Phone</span>: <a href="tel:020000000015">0**********</a>
            </li>
           
          </ul>
        </div>
             </div>

                </div>
              )}
              {value === "2" && (
               <div>
               
      <div className="resturant-card-navbar md:flex md:justify-between  items-center border border-gray-100 rounded-md p-4">
        <div className="order-info-item flex items-center mr-3 m-2 border-r-2  pr-6 ">
          <div className="order-info-icon mr-2  ">
            <img src="https://6ammart-admin.6amtech.com/public/assets/admin/img/navbar/all.png" alt="All Orders" />
          </div>
          <h6 className="card-subtitle mb-0 font-bold">All<span className="amount  text-[#3182ce] ml-1">1</span></h6>
        </div>
        <div className="order-info-item flex m-3 border-r-2  pr-6">
          <div className="order-info-icon mr-2">
            <img src="https://6ammart-admin.6amtech.com/public/assets/admin/img/navbar/schedule.png" alt="Scheduled Orders" />
          </div>
          <h6 className="card-subtitle mb-0 font-bold">Scheduled<span className="amount  text-[#FFA500] ml-1">0</span></h6>
        </div>
        <div className="order-info-item flex items-center m-3 border-r-2  pr-6   mr-4">
          <div className="order-info-icon mr-2">
            <img src="https://6ammart-admin.6amtech.com/public/assets/admin/img/navbar/pending.png" alt="Pending Orders" />
          </div>
          <h6 className="card-subtitle mb-0 font-bold">Pending<span className="amount text-[#3498db] ml-1">1</span></h6>
        </div>
        <div className="order-info-item flex items-center m-3 mr-4 border-r-2  pr-6">
          <div className="order-info-icon mr-2">
            <img src="https://6ammart-admin.6amtech.com/public/assets/admin/img/navbar/delivered.png" alt="Delivered Orders" />
          </div>
          <h6 className="card-subtitle mb-0 font-bold">Delivered<span className="amount text-[#28a745] ml-1">0</span></h6>

        </div>
        <div className="order-info-item flex items-center m-3">
          <div className="order-info-icon mr-2">
            <img src="https://6ammart-admin.6amtech.com/public/assets/admin/img/navbar/cancel.png" alt="Canceled Orders" />
          </div>
          <h6 className="card-subtitle mb-0 font-bold">Canceled<span className="amount text-[#28a745] ml-1">0</span></h6>
        </div>
      </div>
      <div className="card-header py-4 border md:flex md:flex-wrap md:items-center md:justify-end">
      <form className="flex items-center">
        <div className="relative border rounded-md rounded-r-lg w-full mx-2">
          <input
            id="datatableSearch_"
            type="search"
            name="search"
            className="form-control py-3 w-full px-10 rounded-lg relative border-[#24bac3]"
            placeholder="Ex:Search store name"
            aria-label="Search"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 bottom-0 flex items-center justify-center text-white bg-[#24bac3] px-3 rounded-r-lg"
          >
            <AiOutlineSearch size={20} />
          </button>
        </div>
      </form>

      <div className="flex items-center space-x-4 ml-5 mt-2 mr-2">
        <div className="relative">
          <button
            className="btn py-3 px-4 flex items-center  border-[#24bac3]"
            onClick={toggleDropdown}
          >
            <AiOutlineDownload size={20} className="mr-1" /> Export
            <span className="ml-2">
              {/* <MdExpandMore /> */}
            </span>
          </button>

          <div
            className={`dropdown-unfold dropdown-menu dropdown-menu-right ${
              isDropdownOpen ? '' : 'hidden'
            } mt-1 absolute z-10 w-40 bg-white rounded-lg shadow-md`}
          >
            <span className="dropdown-header bg-gray-200 text-gray-700 py-2 px-3 rounded-t-lg">
              Download options
            </span>
            <Link
              className="dropdown-item flex items-center py-2 px-3 hover:bg-gray-100"
              onClick={() => handleExport('Excel')}
            >
              <img
                className="w-2 h-2 mr-2"
                src="https://6ammart-admin.6amtech.com/public/assets/admin/svg/components/excel.svg"
                alt="Excel"
              />
              Excel
            </Link>
            <Link
              className="dropdown-item flex items-center py-2 px-3 hover:bg-gray-100"
              onClick={() => handleExport('CSV')}
            >
              <img
                className="avatar w-2 h-2 mr-2"
                src="https://6ammart-admin.6amtech.com/public/assets/admin/svg/components/placeholder-csv-format.svg"
                alt="CSV"
              />
              .CSV
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="overflow-x-auto max-w-[353px] md:max-w-full mt-4 shadow-sm ">
        <table className="table-auto min-w-full border-collapse  border border-gray-200">
          <thead className="bg-gray-100">
            <tr className=" text-sm ">
              <th className=" px-4 py-2 ">Sl</th>
              <th className=" px-4 py-2 ">Order</th>
              <th className=" px-4 py-2 ">Date</th>
              <th className=" px-4 py-2 text-center">	Customer</th>
              <th className=" px-4 py-2 text-center">	Payment Status</th>
              <th className=" px-4 py-2 text-center">	Total</th>
              <th className=" px-4 py-2 text-center">	Order Status</th>
              <th className=" px-4 py-2  text-center">Action</th>
            </tr>
          </thead>
          <tbody id="set-rows  ">
            {tableData?.map((item) => (
              <tr key={item.id}>
                <td>
                  <span className="ml-7">{item.id}</span>
                </td>
                <td className="text-sm text-center ">{item.Order}</td>

                <td className="text-center text-sm"> {item.date}</td>
                <td className=" text-center text-sm">{item.Customer}
                <p>{item.contact}</p>
                </td>
                <td className="text-center text-sm "> 
                <button className="text-[#ed4c78] border border-[#ed437899] hover:text-[#ff7500] bg-[#ed43781a] text-center font-semibold py-1 px-3 rounded-md md:mr-2">
                {item.PaymentStatus}
                    
                  </button>
                </td>
                <td className="text-center text-sm"> {item.Total}</td>

                <td className="text-center text-sm  "> 
                <button className="bg-[#00c9db1a] border border-[#00c9db99] hover:text-[#00c9db99] text-[#00c9db] text-center font-semibold py-1 px-3 rounded md:mr-2">
                {item.OrderStatus}
                  </button>
                </td>

                <td className="py-3 px-2  text-center   ">
                  <button className="bg-[#ff7500] hover:bg-orange-300 hover:text-[#ff7500] text-white text-center font-semibold py-1 px-3 rounded md:mr-2">
                    {item.action}
                    <IoEyeSharp />
                  </button>
                  <button className="bg-[#00c9db1a] border border-[#00c9db99] hover:text-[#00c9db99] text-[#00c9db] text-center font-semibold py-1 px-3 rounded md:mr-2">
                    {item.action}
                    <IoMdPrint />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
              )}
              {value === "3" && (
                <div>
               
               <div className="resturant-card-navbar md:flex md:justify-between   md:items-center   rounded-md mt-5 pb-3">
               
                 <div className="order-info-item flex items-center justify-between rounded bg-gray-100 w-full  border px-2 py-3">
                   <div className="order-info-icon  flex gap-2  ">
                     <img src="https://6ammart-admin.6amtech.com/public/assets/admin/img/store_items/fi_9752284.png" alt="All Orders" />
                     <h6 className=" font-bold">All Items </h6>
                   </div>
                   <div>
                   <span className="amount  text-[#3182ce] font-bold text-xl ml-1">1</span>
                   </div>
                   
                 </div>

                 <div className="order-info-item flex items-center justify-between rounded bg-gray-100 w-full m-2  border px-2 py-3 ">
                   <div className="order-info-icon  flex gap-2  ">
                     <img src="https://6ammart-admin.6amtech.com/public/assets/admin/img/store_items/fi_10608883.png"  alt="All Orders" />
                     <h6 className=" font-bold">Active Items </h6>
                   </div>
                   <div>
                   <span className="amount  text-[#3182ce] font-bold text-xl ml-1">1</span>
                   </div>
                   
                 </div>

                 <div className="order-info-item flex items-center justify-between rounded bg-gray-100 w-full px-2 border py-3    ">
                   <div className="order-info-icon  flex gap-2  ">
                     <img src="https://6ammart-admin.6amtech.com/public/assets/admin/img/store_items/fi_10186054.png" alt="All Orders" />
                     <h6 className="card-subtitle mb-0 font-bold">Inactive Items  </h6>
                   </div>
                   <div>
                   <span className="amount  text-[#3182ce] font-bold text-xl ml-1">0</span>
                   </div>
                   
                 </div>

                 <div className="order-info-item flex items-center justify-between rounded bg-gray-100 w-full m-2 px-2  border py-3    ">
                   <div className="order-info-icon mr-2 flex gap-2  ">
                     <img src="https://6ammart-admin.6amtech.com/public/assets/admin/img/store_items/fi_5106700.png" alt="All Orders" />
                     <h6 className="card-subtitle mb-0 font-bold">Pending Approval </h6>
                   </div>
                   <div>
                   <span className="amount  text-[#3182ce] font-bold text-xl ml-1">0</span>
                   </div>
                 </div>

                 <div className="order-info-item flex items-center justify-between rounded bg-gray-100 w-full  px-2  border py-3   ">
                   <div className="order-info-icon mr-1 flex gap-2  ">
                     <img src="https://6ammart-admin.6amtech.com/public/assets/admin/img/store_items/image 89.png"  alt="All Orders" />
                     <h6 className="font-bold">Rejected Items</h6>
                   </div>
                   <div>
                   <span className="amount  text-[#3182ce] font-bold text-xl ml-1">0</span>
                   </div>
                 </div>
               </div>
               <div className="card-header py-4 border md:flex md:flex-wrap md:items-center md:justify-end">
               <form className="flex items-center">
                 <div className="relative border rounded-md rounded-r-lg w-full mx-2">
                   <input
                     id="datatableSearch_"
                     type="search"
                     name="search"
                     className="form-control py-3 w-full px-10 rounded-lg relative border-[#24bac3]"
                     placeholder="Ex:Search store name"
                     aria-label="Search"
                   />
                   <button
                     type="submit"
                     className="absolute right-0 top-0 bottom-0 flex items-center justify-center text-white bg-[#24bac3] px-3 rounded-r-lg"
                   >
                     <AiOutlineSearch size={20} />
                   </button>
                 </div>
               </form>
         
               <div className="flex items-center space-x-4 ml-5 mt-2 mr-2">
                 <div className="relative">
                   <button
                     className="btn py-3 px-4 flex items-center  border-[#24bac3]"
                     onClick={toggleDropdown}
                   >
                     <AiOutlineDownload size={20} className="mr-1" /> Export
                     <span className="ml-2">
                       {/* <MdExpandMore /> */}
                     </span>
                   </button>
         
                   <div
                     className={`dropdown-unfold dropdown-menu dropdown-menu-right ${
                       isDropdownOpen ? '' : 'hidden'
                     } mt-1 absolute z-10 w-40 bg-white rounded-lg shadow-md`}
                   >
                     <span className="dropdown-header bg-gray-200 text-gray-700 py-2 px-3 rounded-t-lg">
                       Download options
                     </span>
                     <Link
                       className="dropdown-item flex items-center py-2 px-3 hover:bg-gray-100"
                       onClick={() => handleExport('Excel')}
                     >
                       <img
                         className="w-2 h-2 mr-2"
                         src="https://6ammart-admin.6amtech.com/public/assets/admin/svg/components/excel.svg"
                         alt="Excel"
                       />
                       Excel
                     </Link>
                     <Link
                       className="dropdown-item flex items-center py-2 px-3 hover:bg-gray-100"
                       onClick={() => handleExport('CSV')}
                     >
                       <img
                         className="avatar w-2 h-2 mr-2"
                         src="https://6ammart-admin.6amtech.com/public/assets/admin/svg/components/placeholder-csv-format.svg"
                         alt="CSV"
                       />
                       .CSV
                     </Link>
                   </div>
                 </div>
               </div>
             </div>
             <div className="overflow-x-auto max-w-[353px] md:max-w-full mt-4 shadow-sm ">
                 <table className="table-auto min-w-full border-collapse  border border-gray-200">
                   <thead className="bg-gray-100">
                     <tr className=" text-sm ">
                       <th className=" px-4 py-2 ">Sl</th>
                       <th className=" px-4 py-2 ">Name</th>
                       <th className=" px-4 py-2 ">Type</th>
                       <th className=" px-4 py-2 text-center">Price</th>
                       <th className=" px-4 py-2 text-center"> Status</th>
                       <th className=" px-4 py-2  text-center">Action</th>
                     </tr>
                   </thead>
                   <tbody id="set-rows  ">
                     {tableDataIteam?.map((item) => (
                       <tr key={item.id}>
                         <td>
                           <span className="ml-7">{item.id}</span>
                         </td>
                         <td className="text-sm text-center ">{item.Name}</td>
         
                         <td className="text-center text-sm"> {item.Type}</td>
                         <td className=" text-center text-sm">{item.Price}
                          </td>
                  
                         <td className="text-center text-sm  "> 
                         <button className="bg-[#00c9db1a] border border-[#00c9db99] hover:text-[#00c9db99] text-[#00c9db] text-center font-semibold py-1 px-3 rounded md:mr-2">
                         {item.Status}
                           </button>
                         </td>
         
                         <td className="py-3 px-2  text-center   ">
                           <button className="bg-[#ff7500] hover:bg-orange-300 hover:text-[#ff7500] text-white text-center font-semibold py-1 px-3 rounded md:mr-2">
                             {item.action}
                             <IoEyeSharp />
                           </button>
                           <button className="bg-[#00c9db1a] border border-[#00c9db99] hover:text-[#00c9db99] text-[#00c9db] text-center font-semibold py-1 px-3 rounded md:mr-2">
                             {item.action}
                             <IoMdPrint />
                           </button>
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
               </div>
                
              )}
              {value === "4" && (
                <div>
                  <div className="flex flex-col items-center justify-center gap-4">
                    <div className="bg-white  rounded-lg p-8 text-center">
                      <img
                        src="https://6ammart-admin.6amtech.com/public/assets/admin/svg/illustrations/sorry.svg"
                        alt="public"
                        className="w-22 mx-auto mb-4"
                      />
                      <h5 className="text-lg font-semibold text-gray-800 mb-4">
                        No data found
                      </h5>
                    </div>
                  </div>
                </div>
              )}
              {value === "5" && (
                <div>
                  <div className="flex flex-col items-center justify-center gap-4">
                    <div className="bg-white  rounded-lg p-8 text-center">
                      <img
                        src="https://6ammart-admin.6amtech.com/public/assets/admin/svg/illustrations/sorry.svg"
                        alt="public"
                        className="w-22 mx-auto mb-4"
                      />
                      <h5 className="text-lg font-semibold text-gray-800 mb-4">
                        No data found
                      </h5>
                    </div>
                  </div>
                </div>
              )}
              {value === "6" && (
                <div>
                  <div className="flex flex-col items-center justify-center gap-4">
                    <div className="bg-white  rounded-lg p-8 text-center">
                      <img
                        src="https://6ammart-admin.6amtech.com/public/assets/admin/svg/illustrations/sorry.svg"
                        alt="public"
                        className="w-22 mx-auto mb-4"
                      />
                      <h5 className="text-lg font-semibold text-gray-800 mb-4">
                        No data found
                      </h5>
                    </div>
                  </div>
                </div>
              )}
              {value === "7" && (
                <div>
                  <div className="flex flex-col items-center justify-center gap-4">
                    <div className="bg-white  rounded-lg p-8 text-center">
                      <img
                        src="https://6ammart-admin.6amtech.com/public/assets/admin/svg/illustrations/sorry.svg"
                        alt="public"
                        className="w-22 mx-auto mb-4"
                      />
                      <h5 className="text-lg font-semibold text-gray-800 mb-4">
                        No data found
                      </h5>
                    </div>
                  </div>
                </div>
              )}
              {value === "8" && (
                <div>
                  <div className="flex flex-col items-center justify-center gap-4">
                    <div className="bg-white  rounded-lg p-8 text-center">
                      <img
                        src="https://6ammart-admin.6amtech.com/public/assets/admin/svg/illustrations/sorry.svg"
                        alt="public"
                        className="w-22 mx-auto mb-4"
                      />
                      <h5 className="text-lg font-semibold text-gray-800 mb-4">
                        No data found
                      </h5>
                    </div>
                  </div>
                </div>
              )}
              {value === "9" && (
                <div>
                  <div className="flex flex-col items-center justify-center gap-4">
                    <div className="bg-white  rounded-lg p-8 text-center">
                      <img
                        src="https://6ammart-admin.6amtech.com/public/assets/admin/svg/illustrations/sorry.svg"
                        alt="public"
                        className="w-22 mx-auto mb-4"
                      />
                      <h5 className="text-lg font-semibold text-gray-800 mb-4">
                        No data found
                      </h5>
                    </div>
                  </div>
                </div>
              )}
              {value === "10" && (
                <div>
                  <div className="flex flex-col items-center justify-center gap-4">
                    <div className="bg-white  rounded-lg p-8 text-center">
                      <img
                        src="https://6ammart-admin.6amtech.com/public/assets/admin/svg/illustrations/sorry.svg"
                        alt="public"
                        className="w-22 mx-auto mb-4"
                      />
                      <h5 className="text-lg font-semibold text-gray-800 mb-4">
                        No data found
                      </h5>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default  CountryFair
