import React from "react";
import SearchExportForm from "../Components/SearchExportForm";
import withAuth from "../HOC/withAuth";

const tableData = [
  {
    sl: 1,
    orderId: 100089,
    deliveryDate: "09 Mar 2023",
    deliveryTime: "01:21 PM",
    customerInfo: "+8**********",
    Store: "Family supermarket",
    IteamQuanaty: "1",
    orderStatus: " Canceled",
    orderType: " Home Delivery",
  },
];

function Canceled() {
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
      <SearchExportForm />

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
                    href="https://efood-admin.6amtech.com/admin/orders/details/100089"
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
                      href="https://efood-admin.6amtech.com/admin/customer/view/191"
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
                <td className="px-4 py-2 text-center">
                  <div className="flex justify-center items-center gap-2">
                    <a
                      href="https://efood-admin.6amtech.com/admin/orders/details/100089"
                      className="btn btn-sm btn-outline-primary rounded-full p-2 hover:bg-blue-500 hover:text-white transition duration-300"
                    >
                      <i className="fa-solid fa-eye"></i>
                    </a>
                    <a
                      href="https://efood-admin.6amtech.com/admin/orders/generate-invoice/100089"
                      className="btn btn-sm btn-outline-success rounded-full p-2 hover:bg-green-500 hover:text-white transition duration-300"
                      target="_blank"
                    >
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
  );
}

export default withAuth(Canceled);
