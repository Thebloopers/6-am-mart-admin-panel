import React from "react";
import DispatchOrderStatisticsCard from "../Components/DispatchOrderStatisticsCard";
import withAuth from "../HOC/withAuth";

const DispatchOverview = () => {
  return (
    <>
      <div className="page-header">
        <div className="py-2">
          <div className="flex items-center">
            <img
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/new-img/users.svg"
              alt="img"
              className="w-12 h-12 mr-3"
            />
            <div className="flex-grow">
              <h1 className="page-header-title mb-1 text-xl font-medium">
                Dispatch Overview
              </h1>
              <p className="page-header-text text-dark m-0">
                Monitor your{" "}
                <span className="font-semibold">Dispatch Management</span>{" "}
                Statistics by zone
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-center md:justify-between mt-8">
        {/* Statistics Section */}
        <div className="w-full md:w-[60%] max-w-[800px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Active Delivery Man */}
            <div className="p-4 bg-white rounded-lg shadow-md flex items-center">
              <img
                src="https://6ammart-admin.6amtech.com/public/assets/admin/img/new-img/deliveryman/active.svg"
                alt="Active delivery man"
                className="w-12 h-12 mr-4"
              />
              <div>
                <h3 className="text-xl font-bold">5</h3>
                <p className="text-gray-600">Active Delivery Men</p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md flex items-center">
              <img
                src="https://6ammart-admin.6amtech.com/public/assets/admin/img/new-img/deliveryman/newly.svg"
                alt="Inactive and Suspended"
                className="w-16 h-16 mr-4"
              />
              <div>
                <h3 className="text-xl font-bold">1</h3>
                <p className="text-gray-600">Inactive</p>
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold">0</h3>
                <p className="text-gray-600">Suspended</p>
              </div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md flex items-center">
              <img
                src="https://6ammart-admin.6amtech.com/public/assets/admin/img/new-img/deliveryman/active.svg"
                alt="Fully Booked Delivery Man"
                className="w-16 h-16 mr-4"
              />
              <div>
                <h3 className="text-xl font-bold">0</h3>
                <p className="text-gray-600">Fully Booked Delivery Men</p>
              </div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md flex items-center">
              <img
                src="https://6ammart-admin.6amtech.com/public/assets/admin/img/new-img/deliveryman/in-active.svg"
                alt="Available to Assign Orders"
                className="w-16 h-16 mr-4"
              />
              <div>
                <h3 className="text-xl font-bold">5</h3>
                <p className="text-gray-600">Available to Assign Orders</p>
              </div>
            </div>

            {/* Other Statistics Cards */}
            {/* Include other statistic cards similarly */}
          </div>
        </div>

        {/* Order Status Section */}
        <div className="w-full md:w-[30%] max-w-[400px]">
          <div className="shadow--order-card bg-white rounded-lg overflow-hidden p-4 space-y-4">
            <DispatchOrderStatisticsCard
              iconSrc="https://6ammart-admin.6amtech.com/public/assets/admin/img/dashboard/food/unassigned.svg"
              title="Unassigned orders"
              count="41"
              color="text-blue-500"
            />
            <DispatchOrderStatisticsCard
              iconSrc="https://6ammart-admin.6amtech.com/public/assets/admin/img/dashboard/food/accepted.svg"
              title="Accepted by Delivery Man"
              count="2"
              color="text-green-500"
            />
            <DispatchOrderStatisticsCard
              iconSrc="https://6ammart-admin.6amtech.com/public/assets/admin/img/dashboard/food/out-for.svg"
              title="Out for Delivery"
              count="4"
              color="text-green-500"
            />
          </div>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <iframe
          width="100%"
          height="600"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=23.282237154516917,77.44332197116657+(Boostup%20Digital)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps systems</a>
        </iframe>
      </div>
    </>
  );
};

export default withAuth(DispatchOverview);
