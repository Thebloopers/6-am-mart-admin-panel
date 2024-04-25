import React from "react";
import SearchExportForm from "../Components/SearchExportForm";
import { Link } from "react-router-dom";
import withAuth from "../HOC/withAuth";

function OfflinePayments() {
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

      <div className="empty-data flex flex-col items-center justify-center border shadow-md p-6">
        <img
          src="https://6ammart-admin.6amtech.com/public/assets/admin/svg/illustrations/sorry.svg"
          alt="public"
          className="w-48 h-48 mb-4"
        />
        <h5 className="text-center font-bold text-gray-600">No data found</h5>
      </div>
    </div>
  );
}

export default withAuth(OfflinePayments);
