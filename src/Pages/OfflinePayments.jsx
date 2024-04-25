import React from "react";
import SearchExportForm from "../Components/SearchExportForm";
import { Link } from "react-router-dom";
import withAuth from "../HOC/withAuth";

function OfflinePayments() {
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
  return (
    <div className="">
      <h1 className="text-2xl font-semibold text-gray-800 leading-tight">
        <span className="inline-block mr-2">
          <img
            src="https://6ammart-admin.6amtech.com/public/assets/admin/img/fi_273177.svg"
            alt=""
            className="h-6 w-6"
          />
        </span>
        <span className="inline-block">Verify Offline Payments</span>
        <span className="inline-block ml-2">
          <span className="bg-gray-200 px-2 py-1 rounded text-sm">0</span>
        </span>
      </h1>
      <div className=" border-2 p-1 border-red-400 pt-0 bg-red-100 my-5">
        <p className="font-bold text-center text-sm text-red-500  ">
          For Offline Payments Please Verify If The Payments Are Safely Received
          To Your Account. Customer Id Not Liable If You Confirm And Deliver The
          Orders Without Checking Payments Transactions
        </p>
      </div>

      <nav className="flex space-x-1 border-b-0 mb-3 font-bold">
        <Link
          to="/admin/order/offline/payment/list/all"
          className="nav-link text-gray-600 hover:text-gray-900 inline-block py-2 px-4 rounded"
        >
          All
        </Link>
        <Link
          to="/admin/order/offline/payment/list/pending"
          className="nav-link text-gray-600 hover:text-gray-900 inline-block py-2 px-4 rounded"
        >
          Pending
        </Link>
        <Link
          to="/admin/order/offline/payment/list/verified"
          className="nav-link text-gray-800 inline-block py-2 px-4 rounded"
        >
          Verified
        </Link>
        <Link
          to="/admin/order/offline/payment/list/denied"
          className="nav-link text-gray-600 hover:text-gray-900 inline-block py-2 px-4 rounded"
        >
          Denied
        </Link>
      </nav>

      <SearchExportForm />
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
      

      
    </div>
  );
}

export default withAuth(OfflinePayments);
