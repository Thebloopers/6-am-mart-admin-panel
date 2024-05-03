import React from "react";
import SearchExport from "../Components/SearchExportForm";
import withAuth from "../HOC/withAuth";
import { IoEyeSharp } from "react-icons/io5";
import { IoMdPrint } from "react-icons/io";
import { useNavigate } from "react-router-dom";

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
function Accepted() {
  const navigate=useNavigate()
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
          Accepted Orders
          <span className="badge badge-soft-dark ml-2 text-sm">1</span>
        </span>
      </h1>
      <SearchExport />
      <div className="overflow-x-auto max-w-[340px] md:max-w-full">
        <table className="table-auto min-w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
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
                    href="https:-admin.6amtech.com/admin/orders/det"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    {data.orderId}
                  </a>
                </td>
                <td className="px-2 py-2">
                  <div>{data.deliveryDate}</div>
                  <div>{data.deliveryTime}</div>
                </td>
                <td className="px-2 py-2">
                  <h6 className="text-capitalize mb-1">
                    <a
                      href="h/efood-admin.6amtech.com/admin/customer/vie"
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
                  <p className=" text-red-400">$558.00</p>
                  <span className="text-green-600">paid</span>
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

export default withAuth(Accepted);
