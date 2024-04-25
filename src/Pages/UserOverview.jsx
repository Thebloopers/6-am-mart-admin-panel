import React from "react";
import Useroverviewdashbordcard from "../Components/Useroverviewdashbordcard";
import CustomerStatistics from "../Components/CustomerStatistics";
import DeliveryManStatisticsCard from "../Components/DeliveryManStatisticsCard";
import TopDeliveryman from "../Components/TopDeliveryman";
import withAuth from "../HOC/withAuth";

const deliveryManStats = [
  {
    imageUrl:
      "https://6ammart-admin.6amtech.com/public/assets/admin/img/new-img/deliveryman/active.svg",
    altText: "Active delivery man",
    value: "5",
    label: "Active Delivery Man",
  },
  {
    imageUrl:
      "https://6ammart-admin.6amtech.com/public/assets/admin/img/new-img/deliveryman/newly.svg",
    altText: "Newly joined delivery man",
    value: "0",
    label: "Newly Joined Delivery Man",
  },
  {
    imageUrl:
      "https://6ammart-admin.6amtech.com/public/assets/admin/img/new-img/deliveryman/in-active.svg",
    altText: "Newly joined delivery man",
    value: "0",
    label: "Newly Joined Delivery Man",
  },
  {
    imageUrl:
      "https://6ammart-admin.6amtech.com/public/assets/admin/img/new-img/customer/blocked.svg",
    altText: "Newly joined delivery man",
    value: "0",
    label: "Newly Joined Delivery Man",
  },

  // Add more delivery man statistics objects as needed
];

const cardsData2 = [
  {
    imageUrl:
      "https://6ammart-admin.6amtech.com/storage/app/public/delivery-man/2022-09-29-63351bf73345f.png",
    name: "Jhon",
    phoneNumber: "+8**********",
    orders: 15,
    link: "",
  },
  {
    imageUrl:
      "https://6ammart-admin.6amtech.com/storage/app/public/delivery-man/2022-09-29-63351bf73345f.png",
    name: "Jhon",
    phoneNumber: "+8**********",
    orders: 15,
    link: "",
  },
  {
    imageUrl:
      "https://6ammart-admin.6amtech.com/storage/app/public/delivery-man/2022-09-29-63351bf73345f.png",
    name: "Jhon",
    phoneNumber: "+8**********",
    orders: 15,
    link: "",
  },
  {
    imageUrl:
      "https://6ammart-admin.6amtech.com/storage/app/public/delivery-man/2022-09-29-63351bf73345f.png",
    name: "Jhon",
    phoneNumber: "+8**********",
    orders: 15,
    link: "",
  },
  {
    imageUrl:
      "https://6ammart-admin.6amtech.com/storage/app/public/delivery-man/2022-09-29-63351bf73345f.png",
    name: "Jhon",
    phoneNumber: "+8**********",
    orders: 15,
    link: "",
  },
  {
    imageUrl:
      "https://6ammart-admin.6amtech.com/storage/app/public/delivery-man/2022-09-29-63351bf73345f.png",
    name: "Jhon",
    phoneNumber: "+8**********",
    orders: 15,
    link: "",
  },
];

function UserOverview() {
  return (
    <div className="py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* User Information */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <img
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/new-img/users.svg"
              alt="User Icon"
              className="w-12 h-12 rounded-full bg-white p-1"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-800">User Overview</h1>
              <p className="text-sm text-gray-600">
                Hello, here you can manage your users by zone.
              </p>
            </div>
          </div>

          {/* Zone Selector */}
          <div className="relative w-full md:w-auto">
            <select
              name="zone_id"
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-800 py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline"
              data-url="https://6ammart-admin.6amtech.com/admin/users"
              data-filter="zone_id"
            >
              <option value="all">All Zones</option>
              <option value="1">Main Demo Zone</option>
              <option value="2">سوبر ماركت</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M11.293 14.707a1 1 0 0 0 1.414-1.414l-4-4a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414L10 11.414l1.293 1.293z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Cards */}
      <div className="container mx-auto px-4 mt-4">
        <div className="flex flex-wrap gap-4">
          {/* Render UserOverviewDashboardCard components */}
          <Useroverviewdashbordcard textColor={"text-[#107980]"} />
          <Useroverviewdashbordcard textColor={"text-[#006AB4]"} />
          <Useroverviewdashbordcard textColor={"text-[#FFA800]"} />
        </div>
      </div>

      <h4 className="mb-3 md:mb-6 text-xl font-bold px-4 ">
        Customer Statistics
      </h4>
      <div>
        {" "}
        <CustomerStatistics />
      </div>

      <h4 className="mb-3 md:mb-6 text-xl font-bold px-4 ">
        Deliveryman Statistics
      </h4>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="col-span-1">
          <DeliveryManStatisticsCard statistics={deliveryManStats} />
          <div className="col-md-12 mt-4 rounded-md">
            <iframe
              title="maps"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="100%"
              height="300px"
            >
              <a href="https://www.gps.ie/">gps devices</a>
            </iframe>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <div className="col-lg-4 col-md-6 md:w-[80%] w-full  ">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-200">
                <h5 className="text-lg font-semibold text-gray-800">
                  Top Deliveryman
                </h5>
              </div>
              {cardsData2.map((card, index) => (
                <TopDeliveryman
                  key={index}
                  imageUrl={card.imageUrl}
                  name={card.name}
                  phoneNumber={card.phoneNumber}
                  orders={card.orders}
                  link={card.link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(UserOverview);
