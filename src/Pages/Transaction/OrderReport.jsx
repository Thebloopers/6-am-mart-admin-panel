import React from "react";
import withAuth from "../../HOC/withAuth";

function OrderReport() {
  return (
    <div>
      <div>
        <h1 className="font-bold text-2xl flex items-center mb-4 ">
          <span className="inline-block mr-2">
            <img
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/report/report.png"
              className="w-[25px] "
              alt=""
            />{" "}
          </span>
          <span className="align-middle">Order Report</span>
        </h1>
      </div>

      <div className="shadow-md p-4">
        <div className="md:flex  md:gap-4 ">
          <div className="w-full md:w-1/4 my-2  ">
            <select
              name="module_id"
              className=" set-filter border p-2 py-3  w-full  px-10  rounded"
            >
              <option value="" selected>
                All modules
              </option>
              <option value="1">Grocery</option>
              <option value="2">Pharmacy</option>
              <option value="3">Shop</option>
              <option value="4">Food</option>
            </select>
          </div>

          {/* Zone select */}
          <div className=" w-full md:w-1/4 mt-2   ">
            <select
              name="zone_id"
              className="form-select border p-2 py-3  px-10  w-full rounded"
              id="zone"
            >
              <option value="all">All Zones</option>
              <option value="1">Main Demo Zone</option>
            </select>
          </div>

          {/* Store select */}
          <div className=" w-full md:w-1/4 mt-2  ">
            <select
              name="store_id"
              className=" set-filter border p-2 py-3  w-full  px-10  rounded"
            >
              <option value="all" selected>
                All stores
              </option>
            </select>
          </div>

          <div className=" w-full md:w-1/4 mt-2  ">
            <select
              name="store_id"
              className=" set-filter border p-2 py-3  w-full  px-10  rounded"
            >
              <option value="all" selected>
                All Categories{" "}
              </option>
            </select>
          </div>
        </div>
        {/* Filter select */}
        <div className="flex flex-col sm:flex-row  justify-between">
          <div className=" w-full md:w-1/4 mt-2  ">
            <select
              name="filter"
              className=" border py-3  p-2 px-10  w-full rounded"
            >
              <option value="all_time" selected>
                All Time
              </option>
              <option value="this_year">This Year</option>
              <option value="previous_year">Previous Year</option>
              <option value="this_month">This Month</option>
              <option value="this_week">This Week</option>
              <option value="custom">Custom</option>
            </select>
          </div>

          <div className=" w-full md:w-1/4 sm:w-auto  border text-center border-[#24bac3] bg-[#006161] text-white mt-3 rounded-md">
            <button type="submit" className="  h-10 ">
              Filter
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        <div className="col-span-1 sm:col-span-1 md:col-span-1">
          <a
            className="border border-gray-300 rounded-lg p-4 flex flex-col justify-center items-center bg-blue-200"
            href="#"
          >
            <img
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/report/new/progress-report.png"
              alt="report/new"
              className="card-icon w-16 h-16 mb-2"
            />
            <h4 className="text-xl font-bold mb-1">17</h4>
            <span className="text-sm">In progress orders</span>
            <span
              className="text-xs mt-1"
              data-tip="Including accepted and processing orders"
              data-for="tooltip"
            >
              <img
                src="https://6ammart-admin.6amtech.com/public/assets/admin/img/info-circle.svg"
                alt="In progress orders"
                className="inline-block w-4 h-4 mr-1"
              />
              <span className="tooltip-text">
                Including accepted and processing orders
              </span>
            </span>
          </a>
        </div>
        <div className="col-span-1 sm:col-span-1 md:col-span-1">
          <a
            className="border border-gray-300 rounded-lg p-4 flex flex-col justify-center items-center bg-green-200"
            href="#"
          >
            <img
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/report/new/on-the-way.png"
              alt="report/new"
              className="card-icon w-16 h-16 mb-2"
            />
            <h4 className="text-xl font-bold mb-1">4</h4>
            <span className="text-sm">On the way</span>
          </a>
        </div>
        <div className="col-span-1 sm:col-span-1 md:col-span-1">
          <a
            className="border border-gray-300 rounded-lg p-4 flex flex-col justify-center items-center bg-yellow-200"
            href="#"
          >
            <img
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/report/new/delivered.png"
              alt="report/new"
              className="card-icon w-16 h-16 mb-2"
            />
            <h4 className="text-xl font-bold mb-1">28</h4>
            <span className="text-sm">Delivered orders</span>
          </a>
        </div>
        <div className="col-span-1 sm:col-span-1 md:col-span-1">
          <a
            className="border border-gray-300 rounded-lg p-4 flex flex-col justify-center items-center bg-red-200"
            href="#"
          >
            <img
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/report/new/failed.png"
              alt="report/new"
              className="card-icon w-16 h-16 mb-2"
            />
            <h4 className="text-xl font-bold mb-1">4</h4>
            <span className="text-sm">Failed orders</span>
          </a>
        </div>
        <div className="col-span-1 sm:col-span-1 md:col-span-1">
          <a
            className="border border-gray-300 rounded-lg p-4 flex flex-col justify-center items-center bg-purple-200"
            href="#"
          >
            <img
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/report/new/refunded.png"
              alt="report/new"
              className="card-icon w-16 h-16 mb-2"
            />
            <h4 className="text-xl font-bold mb-1">1</h4>
            <span className="text-sm">Refunded orders</span>
          </a>
        </div>
        <div className="col-span-1 sm:col-span-1 md:col-span-1">
          <a
            className="border border-gray-300 rounded-lg p-4 flex flex-col justify-center items-center bg-pink-200"
            href="#"
          >
            <img
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/report/new/canceled.png"
              alt="report/new"
              className="card-icon w-16 h-16 mb-2"
            />
            <h4 className="text-xl font-bold mb-1">2</h4>
            <span className="text-sm">Canceled orders</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default withAuth(OrderReport);
