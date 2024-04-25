import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import { IoMdStar } from "react-icons/io";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ToggleButton from "../Components/ToggleButton";
import SearchBox from "../Components/SearchBox";
import withAuth from "../HOC/withAuth";

const tableData = [
  {
    id: 1,
    storeName: "Organic Shop",
    imageUrl:
      "https://6ammart-admin.6amtech.com/storage/app/public/store/2022-03-22-62395ac6e1750.png",
    ratings: 0,
    totalProducts: 4,
    totalOrders: 2,
    statusChecked: true,
    actionUrl:
      "https://6ammart-admin.6amtech.com/admin/store/recommended-store-remove/1",
  },
  {
    id: 2,
    storeName: "Family supermarket",
    imageUrl:
      "https://6ammart-admin.6amtech.com/storage/app/public/store/2022-03-22-62395d37212ce.png",
    ratings: 0,
    totalProducts: 4,
    totalOrders: 2,
    statusChecked: true,
    actionUrl:
      "https://6ammart-admin.6amtech.com/admin/store/recommended-store-remove/5",
  },
  {
    id: 3,
    storeName: "Eorange",
    imageUrl:
      "https://6ammart-admin.6amtech.com/storage/app/public/store/2022-03-22-62395c60e17e4.png",
    ratings: 0,
    totalProducts: 9,
    totalOrders: 4,
    statusChecked: true,
    actionUrl:
      "https://6ammart-admin.6amtech.com/admin/store/recommended-store-remove/3",
  },
  {
    id: 4,
    storeName: "Fresh local",
    imageUrl:
      "https://6ammart-admin.6amtech.com/storage/app/public/store/2022-03-22-62395e74d3a56.png",
    ratings: 0,
    totalProducts: 2,
    totalOrders: 2,
    statusChecked: true,
    actionUrl:
      "https://6ammart-admin.6amtech.com/admin/store/recommended-store-remove/7",
  },
  {
    id: 5,
    storeName: "Fresh supermarket",
    imageUrl:
      "https://6ammart-admin.6amtech.com/storage/app/public/store/2022-03-22-62395f9a68837.png",
    ratings: 0,
    totalProducts: 1,
    totalOrders: 1,
    statusChecked: true,
    actionUrl:
      "https://6ammart-admin.6amtech.com/admin/store/recommended-store-remove/9",
  },
  {
    id: 6,
    storeName: "Online market",
    imageUrl:
      "https://6ammart-admin.6amtech.com/storage/app/public/store/2022-03-22-6239604ade310.png",
    ratings: 0,
    totalProducts: 5,
    totalOrders: 7,
    statusChecked: true,
    actionUrl:
      "https://6ammart-admin.6amtech.com/admin/store/recommended-store-remove/11",
  },
  {
    id: 7,
    storeName: "Eco Market",
    imageUrl:
      "https://6ammart-admin.6amtech.com/storage/app/public/store/2022-03-23-623a9cf1ef100.png",
    ratings: 0,
    totalProducts: 2,
    totalOrders: 0,
    statusChecked: true,
    actionUrl:
      "https://6ammart-admin.6amtech.com/admin/store/recommended-store-remove/30",
  },
];

function Recommended({ data }) {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Add your search logic here
  // };

  const handleClick = () => {
    alert("Checkbox clicked!");
  };
  return (
    <div>
      <div className="py-3">
        <h1 className="page-header-title capitalize m-0 flex text-2xl gap-3 font-extrabold">
          <span className="page-header-icon">
            <img
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/condition.png"
              className="w-6 h-auto"
              alt=""
            ></img>
          </span>
          <span>Recommended Stores</span>
        </h1>
      </div>

      <div className="border-2 px-6 rounded mt-3  shadow-md ">
        <h3 className="text-xl font-semibold pt-5  pl-2">Stores</h3>

        <div className="form-group">
          <input
            name="type"
            id="type"
            type="Search"
            className=" block   w-[100%] p-3  mt-10  border border-[#24bac3] rounded-md shadow-sm focus:border-[#24bac3] focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            placeholder="Search Stores.... "
          />
        </div>

        <div className="flex justify-end mt-2">
          <button
            id="reset_btn"
            type="reset"
            className="px-4 py-2 mr-3 border rounded text-gray-700 hover:bg-gray-100 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
          >
            Reset
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-[#24bac3] text-white border rounded hover:bg-[#3d9fa4] focus:outline-none focus:border-[#24bac3]focus:ring focus:ring-blue-200"
          >
            Sumit
          </button>
        </div>

        <div className=" rounded-md shadow-md p-2 mt-5">
          <div className="flex flex-col md:flex-row items-center justify-between ">
            <div className="py-1 ">
              <h1 className="page-header-title capitalize m-0 text-[18px] flex   font-extrabold">
                <span>
                  Recommended Stores List
                  <span className="badge badge-soft-dark ml-2 text-sm bg-slate-300 p-1">
                    7
                  </span>
                </span>
              </h1>
            </div>

            <div className="relative md:flex md:items-center md:justify-end gap-7 mb-3 mx-1 ">
              <div className="md:flex md:items-center py-3">
                <input type="checkbox" onClick={handleClick} />
                <label className="pl-2">Shuffle store when page reload</label>
              </div>

              <div className="md:flex md:items-center my-3  ">
                <SearchBox placeholder={"Store Name"} />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto max-w-[300px] md:max-w-full">
            <table className="table-auto min-w-full border-collapse  border border-gray-200">
              <thead className="bg-gray-100">
                <tr className="">
                  <th className=" px-4 py-2">Sl</th>
                  <th className=" px-4 py-2">Store Name</th>
                  <th className=" px-4 py-2">Ratings</th>
                  <th className=" px-4 py-2">Total Products</th>
                  <th className=" px-4 py-2">Total Orders</th>
                  <th className=" px-4 py-2 text-center">Status</th>
                  <th className=" px-4 py-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody id="set-rows  ">
                {tableData?.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <span className="ml-5">{item.id}</span>
                    </td>
                    <td>
                      <div className="flex items-center gap-3 ml-5">
                        <div>
                          <img
                            className=" circle w-10"
                            data-onerror-image="https://6ammart-admin.6amtech.com/public/assets/admin/img/160x160/img1.jpg"
                            src={item.imageUrl}
                          />
                        </div>

                        <div className="   ">
                          <div className="text-sm text-center ">
                            {item.storeName}
                          </div>
                          <div className="font-light text-sm">
                            Id: {item.id}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="flex text-center gap-1 items-center ml-5 p-3">
                      <i className="  ">
                        <IoMdStar />
                      </i>
                      {item.ratings}
                    </td>
                    <td className=" text-center">{item.totalProducts}</td>
                    <td className="text-center"> {item.totalOrders}</td>
                    <td className="">
                      <label
                        className="toggle-switch flex justify-center items-center toggle-switch-sm  "
                        htmlFor={`publishCheckbox${item.id}`}
                      >
                        <ToggleButton
                          id={`publishCheckbox${item.id}`}
                          checked={item.statusChecked}
                        />
                      </label>
                    </td>

                    <td className="py-3 px-2 m-2   flex items-center justify-center ">
                      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded md:mr-2">
                        <EditIcon />
                      </button>
                      <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3  rounded">
                        <DeleteIcon />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Recommended);
