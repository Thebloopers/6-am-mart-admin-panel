import React, { useState } from "react";
import TabsComponent from "../Components/TabsComponent";
import SubCategoryTable from "../Components/SubCategoryTable";
import SearchIcon from "@mui/icons-material/Search";
import { Card, Switch } from "@mui/material";
import withAuth from "../HOC/withAuth";
import { useCookies } from "react-cookie";
import {
  createSubCategory,
  getAdminCategories,
  getAdminSubCategories,
  handleSubCategoryVisibilityChange,
} from "../helpers/categories";
import { useMutation, useQuery } from "react-query";
import Swal from "sweetalert2";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function SubCategory() {
  const [loading, setIsLoading] = useState(false);
  const [cookies, setCookie] = useCookies(["admin"]);

  //get All Main Categories
  const {
    isError: isError1,
    isLoading: isLoading1,
    data: data1,
    refetch: refetch1,
  } = useQuery(
    ["categories", { cookies }], // Use a unique key and any relevant parameters
    () => getAdminCategories(cookies) // Pass a function that returns a promise
  );

  //get All Sub Categories
  const {
    isError: isError2,
    isLoading: isLoading2,
    data: data2,
    refetch: refetch2,
  } = useQuery(
    ["subcategories", { cookies }], // Use a unique key and any relevant parameters
    () => getAdminSubCategories(cookies) // Pass a function that returns a promise
  );

  // Add Sub Category
  const addSubCategoryMutation = useMutation(createSubCategory, {
    onSuccess: (data) => {
      setIsLoading(false);
      if (data.success === true) {
        return Swal.fire({
          icon: "success",
          title: "Sub Category Created Successfully",
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
        }).then((result) => {
          if (
            result.isConfirmed ||
            result.dismiss === Swal.DismissReason.timer
          ) {
            refetch2();
          }
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
      setIsLoading(false);
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

  const handleCreateSubCategory = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target);
    addSubCategoryMutation.mutate({ formData: formData, cookies: cookies });

    // Reset the form after submission
    event.target.reset();
  };

  //Status Change
  const statusChangeMutation = useMutation(handleSubCategoryVisibilityChange, {
    onSuccess: (data) => {
      if (data.success === true) {
        refetch2();
        return Swal.fire({
          icon: "success",
          title: "Sub Category Status Updated",
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
    statusChangeMutation.mutate({ subcategoryId: item?._id, cookies: cookies });
  };

  return (
    <>
      <div className=" py-4 px-8 rounded-md">
        <div className="flex items-center">
          <img
            src="https://6ammart-admin.6amtech.com/public/assets/admin/img/edit.png"
            className="w-5 h-5 mr-4"
            alt=""
          />
          <h1 className="text-xl font-bold text-gray-800">
            Add New Subcategory
          </h1>
        </div>
      </div>

      <div className="card-body bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleCreateSubCategory}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="category-name" className="mb-2 text-gray-700">
                Sub Category *
              </label>
              <input
                type="text"
                name="name"
                id="category-name"
                className="form-control bg-white border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                maxLength="100"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="input-label block py-1" htmlFor="mainCategory">
                Parent-Category{" "}
                <span className="input-label-secondary text-red-600">*</span>
              </label>
              <select
                id="mainCategory"
                name="mainCategory"
                className="form-control border border-gray-300 rounded-md py-3 px-3 focus:outline-none focus:border-blue-400"
                required
              >
                <option value="" disabled>
                  Select Main Category
                </option>
                {data1?.category?.map((category, index) => (
                  <option key={index} value={category?._id}>
                    {category?.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-end col-span-2">
              <button
                type="reset"
                id="reset_btn"
                className="btn btn--reset mr-4 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-md focus:outline-none focus:bg-gray-400"
                fdprocessedid="4ipsds"
              >
                Reset
              </button>
              <button
                type="submit"
                className="btn hover:bg-[#20A7AF] bg-[#24bac3] text-white"
                disabled={loading}
              >
                <span
                  className={`${
                    loading ? "block" : "hidden"
                  } loading loading-dots loading-lg`}
                ></span>
                <span className={`${loading ? "hidden" : "block"}`}>Add</span>
              </button>
            </div>
          </div>
        </form>
      </div>

      <div>
        <Card className="p-2 mt-8">
          <div className="flex items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800 mr-4">
              Sub Category List
            </h2>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
              {data2?.category?.length}
            </span>
            <form className="ml-auto flex items-center">
              <input
                id="datatableSearch"
                type="search"
                name="search"
                className="form-input border border-gray-300 rounded-l-lg px-4 py-2"
                placeholder="Search Notification"
                aria-label="Search here"
              />
              <button
                type="submit"
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold px-4 py-2 rounded-r-lg "
              >
                <SearchIcon />
              </button>
            </form>
          </div>
        </Card>

        {/* Remove This Component <SubCategoryTable /> */}

        <div className="overflow-x-auto max-w-[384px] md:max-w-full mt-4 shadow-sm ">
          <table className="table-auto min-w-full border-collapse  border border-gray-200">
            <thead className="bg-gray-100">
              <tr className=" text-sm">
                <th className=" px-4 py-2 ">Sl</th>
                <th className=" px-4 py-2 ">ID</th>
                <th className=" px-4 py-2 ">Category</th>
                <th className=" px-4 py-2 ">Parent-Category</th>
                <th className=" px-4 py-2 ">Status</th>
                <th className=" px-4 py-2  text-center">Priority</th>
                <th className=" px-4 py-2  text-center">Action</th>
              </tr>
            </thead>
            <tbody id="set-rows">
              {isLoading2 || data2?.category?.length == 0 ? (
                <div className="flex items-center justify-center">
                  No Sub categories found
                </div>
              ) : (
                data2?.category?.length > 0 &&
                data2?.category?.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div className="text-center items-center">
                        {index + 1}
                      </div>
                    </td>
                    <td>
                      <div className="text-center items-center">
                        <div className="font-light text-sm">{item?.id}</div>
                      </div>
                    </td>

                    <td className="text-center items-center ml-5 p-3">
                      <div className=" text-center l-5 p-3 ">{item?.name}</div>
                    </td>

                    <td className="text-center items-center ml-5 p-3">
                      <div className=" text-center l-5 p-3 ">
                        {item?.mainCategory?.name}
                      </div>
                    </td>
                    <td className="text-center">
                      <i>
                        {" "}
                        <Switch
                          checked={item?.isVisible ? true : false}
                          onChange={() => handleStatusChange(item)}
                        />
                      </i>{" "}
                    </td>
                    <td className="text-center">
                      <div className="dropdown">
                        <div
                          tabIndex={0}
                          role="button"
                          className="btn btn-sm btn-outline btn-secondary m-1"
                        >
                          {item?.priority}
                        </div>
                        <ul
                          tabIndex={0}
                          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                        >
                          <li>
                            <a>Normal</a>
                          </li>
                          <li>
                            <a>Medium</a>
                          </li>
                          <li>
                            <a>High</a>
                          </li>
                        </ul>
                      </div>
                    </td>

                    <td className="py-3 px-2 m-2  flex items-center justify-center ">
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
    </>
  );
}

export default withAuth(SubCategory);
