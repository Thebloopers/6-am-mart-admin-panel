import { MdExpandMore } from "react-icons/md";
import { LuListFilter } from "react-icons/lu";
import { IoDocumentText } from "react-icons/io5";
import { IoSearch, IoDownload } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import {
  AiOutlineSearch,
  AiOutlineDownload,
  AiOutlineFilter,
  AiOutlineTable,
} from "react-icons/ai";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { IoMdStar } from "react-icons/io";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ToggleButton from "../Components/ToggleButton";
import Switch from "@mui/material/Switch";
import SearchBox from "../Components/SearchBox";
import withAuth from "../HOC/withAuth";
import { useMutation, useQueries, useQuery } from "react-query";
import { getAdminStores, handleVisibilityChange } from "../helpers/store";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
import { signout } from "../helpers/auth";

const top100Films = [
  { label: "All Zones", year: 1994 },
  { label: "man demo zone", year: 1994 },
];

const Card = ({ bgColor, title, subtitle, iconSrc, alt }) => {
  return (
    <div
      className={`col-xl-3 mt-2 col-sm-6 border flex justify-between shadow-md py-6 px-8 rounded-md ${bgColor}`}
    >
      <div className={`resturant-card ${bgColor} `}>
        <h4 className="title text-3xl text-center font-bold ">{title}</h4>
        <span className="subtitle font-bold text-black">{subtitle}</span>
      </div>
      <div>
        {" "}
        <img className="resturant-icon w-26 h-12 " src={iconSrc} alt={alt} />
      </div>
    </div>
  );
};

const TransactionItem = ({ iconClass, textClass, icon, title, amount }) => {
  return (
    <>
      <li className={`flex items-center border-r-2 pr-8 ${textClass}`}>
        <i className={`${iconClass} mr-2`}></i>
        <div>
          <span>{title}</span> <strong>{amount}</strong>
        </div>
      </li>
      <li className="border-b"></li>
    </>
  );
};

function StoreList() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["admin"]);

  const {
    isError: isError1,
    isLoading: isLoading1,
    data: data1,
    refetch: refetch1,
  } = useQuery(
    ["stores", { cookies }], // Use a unique key and any relevant parameters
    () => getAdminStores(cookies) // Pass a function that returns a promise
  );

  const statusChangeMutation = useMutation(handleVisibilityChange, {
    onSuccess: (data) => {
      if (data.success === true) {
        refetch1();
        return Swal.fire({
          icon: "success",
          title: "Store Status Updated",
          timer: "3000",
          confirmButtonText: "Ok",
          confirmButtonColor: "#33996A",
          showClass: {
            popup: "swal2-show",
            backdrop: "swal2-backdrop-show",
            icon: "swal2-icon-show",
          },
          hideClass: {
            popup: "swal2-hide",
            backdrop: "swal2-backdrop-hide",
            icon: "swal2-icon-hide",
          },
        });
      }
      if (data.success === false) {
        return Swal.fire({
          icon: "error",
          title: data?.error || data?.errors || "something went wrong",
          timer: "2000",
          confirmButtonText: "Ok",
          confirmButtonColor: "#33996A",
          showClass: {
            popup: "swal2-show",
            backdrop: "swal2-backdrop-show",
            icon: "swal2-icon-show",
          },
          hideClass: {
            popup: "swal2-hide",
            backdrop: "swal2-backdrop-hide",
            icon: "swal2-icon-hide",
          },
        });
      }
    },
    onError: (error) => {
      return Swal.fire({
        icon: "error",
        title: error || "something went wrong",
        timer: "2000",
        confirmButtonText: "Ok",
        confirmButtonColor: "#33996A",
        showClass: {
          popup: "swal2-show",
          backdrop: "swal2-backdrop-show",
          icon: "swal2-icon-show",
        },
        hideClass: {
          popup: "swal2-hide",
          backdrop: "swal2-backdrop-hide",
          icon: "swal2-icon-hide",
        },
      });
    },
  });

  const handleStatusChange = (item) => {
    statusChangeMutation.mutate({ storeId: item?._id, cookies: cookies });
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleExport = (type) => {
    // Implement export functionality here based on the selected type (e.g., Excel or CSV)
    console.log("Exporting as", type);
    // Close the dropdown after exporting
    setIsDropdownOpen(false);
  };
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <div>
      <h1 className="page-header-title capitalize m-0 flex text-2xl gap-3 font-extrabold">
        <span className="page-header-icon">
          <i className="w-26">
            <LuListFilter />
          </i>
        </span>
        <span>
          Stores
          <span className="badge badge-soft-dark ml-2 text-sm bg-slate-300">
            {data1?.store?.length}
          </span>
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-3">
        <Card
          bgColor=" bg-[#eafbff] text-[#97d7e5]"
          title={data1?.store?.length}
          subtitle="Total stores"
          iconSrc="https://6ammart-admin.6amtech.com/public/assets/admin/img/total-store.png"
          alt="store"
        />
        <Card
          bgColor="text-[#feb019] bg-[#fff7e7]"
          title={data1?.store?.filter((doc) => doc?.isVisible == true).length}
          subtitle="Active stores"
          iconSrc="https://6ammart-admin.6amtech.com/public/assets/admin/img/active-store.png"
          alt="store"
        />
        <Card
          bgColor="text-[#00aa6d] bg-[#eafdf6]"
          title={data1?.store?.filter((doc) => doc?.isVisible == false).length}
          subtitle="Inactive stores"
          iconSrc="https://6ammart-admin.6amtech.com/public/assets/admin/img/close-store.png"
          alt="store"
        />
        <Card
          bgColor="text-[#ff6d6d] bg-[#fff2f2]"
          title="0"
          subtitle="Newly joined stores"
          iconSrc="https://6ammart-admin.6amtech.com/public/assets/admin/img/add-store.png"
          alt="store"
        />
      </div>

      <div>
        <ul className="transaction--information text-uppercase md:flex border shadow-md justify-evenly font-bold py-5 ">
          <TransactionItem
            icon={IoDocumentText} // Pass the JSX element directly
            textClass="text-blue-500"
            title="Total transactions"
            amount="9"
          />
          <TransactionItem
            iconClass="tio-checkmark-circle-outlined text-green-500"
            textClass="text-green-500"
            icon="checkmark-circle"
            title="Commission earned"
            amount="$ 60,491.19"
          />
          <TransactionItem
            iconClass="tio-atm text-red-500"
            textClass="text-red-500"
            icon="atm"
            title="Total store withdraws"
            amount="$ 4,236.36"
          />
        </ul>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between border mt-6 ">
        <div className="py-1 ">
          <h1 className="page-header-title capitalize m-0 p-3 text-[18px] flex   font-extrabold">
            <span>Stores List</span>
          </h1>
        </div>

        <div className="relative md:flex md:items-center md:justify-end gap-7 mb-3 mx-1 ">
          <div class="flex items-center space-x-4">
            <div className="relative">
              <button
                className="btn btn-secondary h-10 px-4 flex items-center border"
                onClick={toggleDropdown}
              >
                <AiOutlineDownload
                  sx={{
                    width: 230,
                    "& .MuiAutocomplete-inputRoot": {
                      padding: "1.5rem", // Adjust padding here
                      height: "calc(1rem - 10px)", // Adjust height here
                    },
                  }}
                  size={20}
                  className="mr-1"
                />{" "}
                Export
                <span className="ml-2">
                  <MdExpandMore />
                </span>
              </button>

              <div
                className={`dropdown-unfold dropdown-menu dropdown-menu-right ${
                  isDropdownOpen ? "" : "hidden"
                } mt-1 absolute z-10 w-40 bg-white rounded-lg shadow-md`}
              >
                <span className="dropdown-header bg-gray-200 text-gray-700 py-2 px-3 rounded-t-lg">
                  Download options
                </span>
                <Link
                  className="dropdown-item flex items-center py-2 px-3 hover:bg-gray-100"
                  onClick={() => handleExport("Excel")}
                >
                  <img
                    className=" w-2 h-2 mr-2"
                    src="https://6ammart-admin.6amtech.com/public/assets/admin/svg/components/excel.svg"
                    alt="Excel"
                  />
                  Excel
                </Link>
                <Link
                  className="dropdown-item flex items-center py-2 px-3 hover:bg-gray-100"
                  onClick={() => handleExport("CSV")}
                >
                  <img
                    className="avatar w-2 h-2  mr-2"
                    src="https://6ammart-admin.6amtech.com/public/assets/admin/svg/components/placeholder-csv-format.svg"
                    alt="CSV"
                  />
                  .CSV
                </Link>
              </div>
            </div>
            <div>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{
                  width: 230,
                  "& .MuiAutocomplete-inputRoot": {
                    padding: "1.5rem", // Adjust padding here
                    height: "calc(1rem - 10px)", // Adjust height here
                  },
                }}
                renderInput={(params) => (
                  <TextField {...params} label="All Zones" />
                )}
              />
            </div>
          </div>

          <div className="md:flex md:items-center my-3 mx-2 ">
            <SearchBox placeholder={"Search Store Name"} />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto max-w-[384px] md:max-w-full mt-4 shadow-sm ">
        <table className="table-auto min-w-full border-collapse  border border-gray-200">
          <thead className="bg-gray-100">
            <tr className=" text-sm">
              <th className=" px-4 py-2 ">Sl</th>
              <th className=" px-4 py-2 ">Store Information</th>
              <th className=" px-4 py-2 ">Owner Information</th>
              <th className=" px-4 py-2">Zone</th>
              <th className=" px-4 py-2 ">Featured</th>
              <th className=" px-4 py-2  text-center">Status</th>
              <th className=" px-4 py-2  text-center">Action</th>
            </tr>
          </thead>
          <tbody id="set-rows">
            {isLoading1 ? (
              <span className="text-center">No Stores found</span>
            ) : data1?.error === "Token has expired" ||
              data1?.error === "Invalid token" ? (
              signout(removeCookie, () => {
                navigate("/login");
                return null;
              })
            ) : (
              data1?.store?.length > 0 &&
              data1?.store?.map((item, index) => (
                <tr key={index}>
                  <td>
                    <span className="ml-5">{index + 1}</span>
                  </td>
                  <td>
                    <div className="flex items-center gap-3 ml-5">
                      <div>
                        <img
                          className=" circle w-10"
                          data-onerror-image="https://6ammart-admin.6amtech.com/public/assets/admin/img/160x160/img1.jpg"
                          src={`https://rent-karoo.s3.ap-south-1.amazonaws.com/${item.storeLogo[0]}`}
                        />
                      </div>

                      <div className="   ">
                        <div className="text-sm text-center ml-10">
                          {item.storeName}
                        </div>
                        <div className="font-light text-sm ml-10">
                          Id: {index + 1}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="flex text-center gap-1 items-center ml-5 p-3">
                    <div className=" text-center l-5 p-3 ml-10 ">{item.phone}</div>
                    <div>{} </div>
                  </td>
                  <td className=" text-center text-sm font-light">
                    {item.Zone}
                  </td>
                  <td className="text-center">
                    <i>
                      {" "}
                      <Switch {...label} />
                    </i>{" "}
                  </td>
                  <td className="">
                    <i>
                      {" "}
                      <Switch
                      className="ml-12"
                        {...label}
                        checked={item?.isVisible ? true : false}
                        onChange={() => handleStatusChange(item)}
                      />
                    </i>
                  </td>

                  <td className="py-3 px-2 m-2 flex items-center justify-center ">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded md:mr-2">
                      <EditIcon />
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3  rounded">
                      <DeleteIcon />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default withAuth(StoreList);
