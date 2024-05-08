import React from "react";
import { DashboardCard } from "../Components/DashboardCard";
import { OrderCard } from "../Components/OrderCard";
import { Link } from "react-router-dom";
import { StoreCard } from "../Components/StoreCard";
import { StoreListItem } from "../Components/StoreListItem";
import TopRatedItems from "../Components/TopRatedItems";
import TopDeliveryman from "../Components/TopDeliveryman";
import { LineChart } from "@mui/x-charts/LineChart";
import Cart from "../Components/Cart";
import UserStatistics from "../Components/UserStatistics";
import { Card } from "@mui/material";
import withAuth from "../HOC/withAuth";

import { GoDotFill } from "react-icons/go";


import  PiChart  from "../Components/PiChart";
import Chart from "../Components/Chart";

const Dashboard = () => {
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
    // Add more card data objects as needed
  ];
  const cardsData3 = [
    {
      imageUrl:
        "https://6ammart-admin.6amtech.com/storage/app/public/delivery-man/2022-09-29-63351bf73345f.png",
      name: "Sandeep",
      phoneNumber: "+8**********",
      orders: 2,
      link: "",
    },
    {
      imageUrl:
        "https://6ammart-admin.6amtech.com/storage/app/public/delivery-man/2022-09-29-63351bf73345f.png",
      name: "Sandeep",
      phoneNumber: "+8**********",
      orders: 2,
      link: "",
    },
    {
      imageUrl:
        "https://6ammart-admin.6amtech.com/storage/app/public/delivery-man/2022-09-29-63351bf73345f.png",
      name: "Sandeep",
      phoneNumber: "+8**********",
      orders: 2,
      link: "",
    },
    // Add more card data objects as needed
  ];

  const products = [
    {
      imageUrl:
        "https://6ammart-admin.6amtech.com/storage/app/public/product/2022-03-22-623992773ee73.png",

      alt: "Orange Imported (± 50 gm)",
      title: "Orange Imported (± 50 gm)",
      likes: 0,
    },
    {
      href: "",
      imageUrl:
        "https://6ammart-admin.6amtech.com/storage/app/public/product/2022-03-22-6239941e7f360.png",
      alt: "Cabbage",
      title: "Cabbage",
      likes: 0,
    },
    {
      href: "",
      imageUrl:
        "https://6ammart-admin.6amtech.com/storage/app/public/product/2022-03-22-6239965e312ab.png",
      alt: "Mango (± 50 gm)",
      title: "Mango (± 50 gm)",
      likes: 0,
    },
    // Add more products as needed
  ];
  const gridItems = [
    {
      href: "",
      imgSrc:
        "https://6ammart-admin.6amtech.com/storage/app/public/product/2022-03-22-6239a7117c441.png",
      alt: "Suruchi Premium Green Chili Pickle image",
      title: "Suruchi Premium Green Chili Pickle",
      sold: 2,
    },
    {
      href: "",
      imgSrc:
        "https://6ammart-admin.6amtech.com/storage/app/public/product/2022-03-22-6239a7117c441.png",
      alt: "Suruchi Premium Green Chili Pickle image",
      title: "Suruchi Premium Green Chili Pickle",
      sold: 2,
    },
    {
      href: "",
      imgSrc:
        "https://6ammart-admin.6amtech.com/storage/app/public/product/2022-03-22-6239a7117c441.png",
      alt: "Suruchi Premium Green Chili Pickle image",
      title: "Suruchi Premium Green Chili Pickle",
      sold: 2,
    },
  ];
  const stores = [
    {
      imageUrl:
        "https://6ammart-admin.6amtech.com/storage/app/public/store/2022-03-22-6239604ade310.png",
      title: "Online Market",
      orderCount: 3,
      storeUrl: "",
    },
    {
      imageUrl:
        "https://6ammart-admin.6amtech.com/storage/app/public/store/2022-03-22-6239604ade310.png",
      title: "D mart",
      orderCount: 10,
      storeUrl: "",
    },
    // Add more store objects as needed
  ];

  const stores2 = [
    {
      imageUrl:
        "https://6ammart-admin.6amtech.com/storage/app/public/store/2022-03-22-623961d98ca1e.png",
      storeName: "Smart Shopping",
      storeUrl: "",
      rating: 3,
    },
    {
      imageUrl:
        "https://6ammart-admin.6amtech.com/storage/app/public/store/2022-03-22-62395f9a68837.png",
      storeName: "Fresh supermarket",
      storeUrl: "",
      rating: 1,
    },
    // Add more store objects as needed
  ];

  const cardsData = [
    {
      imgSrc:
        "https://6ammart-admin.6amtech.com/public/assets/admin/img/dashboard/grocery/items.svg",
      name: "Items",
      count: "54",
      subtxt: "0 Newly added",
      link: "",
    },
    {
      imgSrc:
        "https://6ammart-admin.6amtech.com/public/assets/admin/img/dashboard/grocery/orders.svg",
      name: "Orders",
      count: "30",
      subtxt: "0 Newly added",
      link: "",
    },
    {
      imgSrc:
        "https://6ammart-admin.6amtech.com/public/assets/admin/img/dashboard/grocery/stores.svg",
      name: "Grocery Stores",
      count: "15",
      subtxt: "0 Newly added",
      link: "",
    },
    {
      imgSrc:
        "https://6ammart-admin.6amtech.com/public/assets/admin/img/dashboard/grocery/customers.svg",
      name: "Customers",
      count: "26",
      subtxt: "2 Newly added",
      link: "",
    },
  ];

  return (
    <>
      <div className="bg-gray-100 py-4 rounded-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <img
                className="onerror-image h-10 w-auto"
                data-onerror-image="https://6ammart-admin.6amtech.com/public/assets/admin/img/grocery.svg"
                src="https://6ammart-admin.6amtech.com/storage/app/public/module/2022-04-24-6264c13107e3f.png"
                alt="img"
              />
              <div className="ml-4">
                <h1 className="text-xl font-bold text-gray-800">
                  Grocery Dashboard
                </h1>
                <p className="text-gray-600">
                  Hello, here you can manage your grocery orders by zone.
                </p>
              </div>
            </div>
            <div className="relative w-full md:w-auto">
              <select
                name="zone_id"
                className="form-select py-2 pl-4 pr-10 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-full md:w-auto"
              >
                <option value="all">All Zones</option>
                <option value="1">Main Demo Zone</option>
                <option value="2">سوبر ماركت</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                {/* <svg
                className="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* dashboard card */}
      <div className="container my-8 border p-5 rounded-md shadow-xl ">
        <div className="card mb-3 ">
          <div className="">
            <div className="flex flex-wrap justify-end">
              <div className="statistics-btn-grp">
                <label className="mr-4">
                  <input
                    type="radio"
                    name="statistics"
                    value="this_year"
                    className="order_stats_update hidden"
                  />
                  <button className="btn text-gray-600 border   cursor-pointer transition duration-300 hover:text-blue-500">
                     Year
                  </button>
                </label>
                <label className="mr-4">
                  <input
                    type="radio"
                    name="statistics"
                    value="this_month"
                    className="order_stats_update hidden"
                  />
                  <button className=" btn text-gray-600 cursor-pointer transition duration-300 hover:text-blue-500">
                     Month
                  </button>
                </label>
                <label>
                  <input
                    type="radio"
                    name="statistics"
                    value="this_week"
                    className="order_stats_update hidden"
                  />
                  <button className="btn text-gray-600 cursor-pointer transition duration-300 hover:text-blue-500">
                     Week
                  </button>
                </label>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
              {cardsData.map((card, index) => (
                <DashboardCard
                  key={index} // Ensure each child component has a unique key
                  imgSrc={card.imgSrc}
                  name={card.name}
                  count={card.count}
                  subtxt={card.subtxt}
                  link={card.link}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Dashboard card end */}

        {/* order card */}
        <div className=" mx-auto py-8">
          <div className="flex flex-wrap -mx-2">
            <OrderCard
              iconSrc="https://6ammart-admin.6amtech.com/public/assets/admin/img/dashboard/grocery/unassigned.svg"
              title="Unassigned orders"
              count="16"
              link=""
            />
            <OrderCard
              iconSrc="https://6ammart-admin.6amtech.com/public/assets/admin/img/dashboard/grocery/accepted.svg"
              title="Accepted by Delivery Man"
              count="1"
              link="/Accepted"
            />
            <OrderCard
              iconSrc="https://6ammart-admin.6amtech.com/public/assets/admin/img/dashboard/grocery/packaging.svg"
              title="Packaging"
              count="5"
              link="/order/processing"
            />
            <OrderCard
              iconSrc="https://6ammart-admin.6amtech.com/public/assets/admin/img/dashboard/grocery/out-for.svg"
              title="Out for Delivery"
              count="0"
              link="order/list/item_on_the_way"
            />
            <OrderCard
              iconSrc="https://6ammart-admin.6amtech.com/public/assets/admin/img/dashboard/grocery/delivered.svg"
              title="Delivered"
              count="9"
              link="/Delivered"
            />
            <OrderCard
              iconSrc="https://6ammart-admin.6amtech.com/public/assets/admin/img/order-status/canceled.svg"
              title="Canceled"
              count="1"
              link="/Canceled"
            />
            <OrderCard
              iconSrc="https://6ammart-admin.6amtech.com/public/assets/admin/img/order-status/refunded.svg"
              title="Refunded"
              count="0"
              link="/Refunded"
            />
            <OrderCard
              iconSrc="https://6ammart-admin.6amtech.com/public/assets/admin/img/order-status/payment-failed.svg"
              title="Payment failed"
              count="1"
              link="admin/order/list/failed"
            />
          </div>
        </div>
        {/* order card end */}
      </div>

    {/* <Card className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className="md:col-span-1 bg-[#FFFFFF] p-2 shadow-md">
          <Cart />
        </div>
        <div className="md:col-span-1 bg-[#FFFFFF] shadow-md flex flex-wrap justify-center items-center">
          <div>
            <div>User Statistics</div>
            <div></div>
          </div>
          <UserStatistics />
        </div>
      </Card>  */}
      
       <div className="flex flex-col md:flex-row justify-between items-start my-5 gap-x-3 w-full gap-y-5">
          <div className="max-w-[400px] overflow-x-auto p-4 md:max-w-full shadow-lg rounded-lg">
            <div className="flex justify-around items-center mt-3">
              <div>
                <h1 className="text-gray-700 text-xl ">$ 858.40</h1>
                <p className="text-gray-500 text-xl ">Gross Sale</p>
              </div>
              <h1>
                <GoDotFill className="text-xl w-full text-[#00AA96] inline-block mx-2" />
                Sale (2024)
              </h1>
              <select className="select w-full max-w-[250px] focus:outline-none border border-gray-300">
                <option disabled selected>
                  This Year
                </option>
                <option> This Year</option>
                <option> This Month</option>
                <option> This Week</option>
              </select>
            </div>
            <Chart/>
          </div>
          <div className="shadow-lg rounded-lg flex flex-col  justify-center items-start w-full  md:w-1/3">
            <div className="flex justify-between items-center mt-4 px-3 w-full">
              <h1 className="text-gray-600 font-bold">User Statistics</h1>
              <select className="select w-full max-w-[200px] focus:outline-none border border-gray-300">
                <option disabled selected>
                  This Year
                </option>
                <option> This Year</option>
                <option> This Month</option>
                <option> This Week</option>
              </select>
            </div>
            <PiChart/>
            <div className="flex justify-evenly items-center mb-5 gap-x-5">
              <h1>
                {" "}
                <GoDotFill className="inline-block text-2xl text-[#005555]" />{" "}
                Customer 24
              </h1>
              <h1>
                {" "}
                <GoDotFill className="inline-block text-2xl text-[#00AA96]" />{" "}
                Store 15
              </h1>
              <h1>
                {" "}
                <GoDotFill className="inline-block text-2xl text-[#B9E0E0]" />{" "}
                Delivery man 6
              </h1>
            </div>
          </div>
        </div> 
        

         



      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        <div className="col-span-1 md:col-span-2 lg:col-span-1 my-4">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-4 py-3">
              <div className="flex justify-between items-center mb-2">
                <h5 className="text-lg font-semibold text-gray-800">
                  Top Selling Stores
                </h5>
                <Link to={"/StoreList"} className="text-blue-600 text-sm font-medium">
                  View all
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {stores.map((store, index) => (
                  <StoreCard
                    key={index} // It's important to provide a unique key for each iterated element
                    imageUrl={store.imageUrl}
                    title={store.title}
                    orderCount={store.orderCount}
                    storeUrl={store.storeUrl}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-200">
              <h5 className="text-lg font-semibold text-gray-800">
                Most Rated Stores
              </h5>
            </div>
            <div className="px-4 py-3">
              <ul className="divide-y divide-gray-200">
                {stores2.map((store, index) => (
                  <StoreListItem
                    key={index} // It's important to provide a unique key for each iterated element
                    imageUrl={store.imageUrl}
                    storeName={store.storeName}
                    storeUrl={store.storeUrl}
                    rating={store.rating}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-4 py-3">
              <div className="flex justify-between items-center mb-2">
                <h5 className="text-lg font-semibold text-gray-800">
                  Top Selling Items
                </h5>
                <Link to={"/List"} className="text-blue-600 text-sm font-medium">View all</Link>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {gridItems.map((item, index) => (
                  <Link
                    key={index}
                    className="grid-card flex justify-between items-center rounded-lg overflow-hidden border-b border-gray-200 hover:shadow-lg transition duration-300"
                  >
                    <img
                      src={item.imgSrc}
                      alt={item.alt}
                      className="w-8"
                    />
                    <div className="p-4 flex items-center">
                      <div className="truncate..." title={item.title}>
                        <span className="text-base font-medium text-gray-800">
                          {item.title}
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-2 ">
                      <div>   Sold:</div>
                   
                        <div className=" text-gray-600  ">
                         {item.sold}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        <div className="col-span-1 md:col-span-2 lg:col-span-1 my-4">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-4 ">
              <div className="flex justify-between items-center mb-2">
                <h5 className="text-lg font-semibold text-gray-800">
                  Top Rated Items
                </h5>
                <Link to={"/List"} className="text-blue-600 text-sm font-medium">
                  View all
                </Link>
              </div>

              {products.map((product) => (
                <TopRatedItems 
                  key={product.id}
                  imageUrl={product?.imageUrl}
                  productName={product?.title}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-4 py-3">
              <div className="flex justify-between items-center mb-2">
                <h5 className="text-lg font-semibold text-gray-800">
                  Top Customers
                </h5>
                <Link to="Users/Customers" className="text-blue-600 text-sm font-medium">
                  View all
                </Link>
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

        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-4 py-3">
              <div className="flex justify-between items-center mb-2">
                <h5 className="text-lg font-semibold text-gray-800">
                   Top Deliveryman
                </h5>
                <Link to="" className="text-blue-600 text-sm font-medium">
                  View all
                </Link>
              </div>
              {cardsData3.map((card, index) => (
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
    </>
  );
}

export default withAuth(Dashboard);
