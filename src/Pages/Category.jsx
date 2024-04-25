import React, { useState } from "react";
import TabsComponent from "../Components/TabsComponent";
import CategoryListTable from "../Components/CategoryListTable";
import SearchIcon from "@mui/icons-material/Search";
import { Card, Switch } from "@mui/material";
import withAuth from "../HOC/withAuth";
import { useCookies } from "react-cookie";
import { useMutation, useQuery } from "react-query";
import {
  createCategory,
  getAdminCategories,
  handleCategoryVisibilityChange,
} from "../helpers/categories";
import Swal from "sweetalert2";
import { DataGrid } from "@mui/x-data-grid";
import ToggleButton from "../Components/ToggleButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function Category() {
  const [loading, setIsLoading] = useState(false);
  const [cookies, setCookie] = useCookies(["admin"]);

  const {
    isError: isError1,
    isLoading: isLoading1,
    data: data1,
    refetch: refetch1,
  } = useQuery(
    ["categories", { cookies }], // Use a unique key and any relevant parameters
    () => getAdminCategories(cookies) // Pass a function that returns a promise
  );

  // Add Category
  const addCategoryMutation = useMutation(createCategory, {
    onSuccess: (data) => {
      setIsLoading(false);
      if (data.success === true) {
        return Swal.fire({
          icon: "success",
          title: "Category Created Successfully",
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
            refetch1();
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

  const handleCreateCategory = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target);
    addCategoryMutation.mutate({ formData: formData, cookies: cookies });

    // Reset the form after submission
    event.target.reset();
  };

  // Change Status
  const statusChangeMutation = useMutation(handleCategoryVisibilityChange, {
    onSuccess: (data) => {
      if (data.success === true) {
        refetch1();
        return Swal.fire({
          icon: "success",
          title: "Category Status Updated",
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
    statusChangeMutation.mutate({ categoryId: item?._id, cookies: cookies });
  };

  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <>
      <div className="page-header  py-4 px-6 mb-6 rounded-lg">
        <h1 className="page-header-title flex items-center">
          <span className="page-header-icon mr-2 w-5 h-5">
            <img
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/category.png"
              className="w-20"
              alt=""
            />
          </span>
          <h1 className="font-semibold">Add new category</h1>
        </h1>
      </div>
      <div className="flex">
        <div className="w-full">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleCreateCategory}>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6 md:w-1/2 w-full ">
                <div className="flex flex-col">
                  <label htmlFor="category-name" className="mb-2 text-gray-700">
                    Category Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="category-name"
                    className="form-control bg-white border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                    maxLength="100"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="custom-file" className="mb-2 text-gray-700">
                    Image <span className="text-red-500">* ( Ratio 1:1)</span>
                  </label>
                  <label
                    htmlFor="custom-file"
                    className="flex flex-col items-center justify-center w-full h-32 border border-dashed border-gray-400 rounded-md cursor-pointer hover:bg-gray-50"
                  >
                    <input
                      type="file"
                      id="custom-file"
                      name="image"
                      className="hidden"
                      accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                    />
                    <span className="text-gray-600">Click to upload</span>
                  </label>
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <button
                  type="reset"
                  id="reset-btn"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-md mr-4"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="bg-[#20A7AF] hover:bg-[#3f8e8e] text-white font-semibold py-2 px-4 rounded-md"
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
            </form>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Card className="p-2">
          <div className="flex items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800 mr-4">
              Category List
            </h2>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
              {data1?.category?.length}
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

        <div className="overflow-x-auto max-w-[384px] md:max-w-full mt-4 shadow-sm ">
          <table className="table-auto min-w-full border-collapse  border border-gray-200">
            <thead className="bg-gray-100">
              <tr className=" text-sm">
                <th className=" px-4 py-2 ">Sl</th>
                <th className=" px-4 py-2 ">Image</th>
                <th className=" px-4 py-2 ">ID</th>
                <th className=" px-4 py-2 ">Category</th>
                <th className=" px-4 py-2 ">Status</th>
                <th className=" px-4 py-2  text-center">Priority</th>
                <th className=" px-4 py-2  text-center">Action</th>
              </tr>
            </thead>
            <tbody id="set-rows">
              {isLoading1 ? (
                <span className="text-center">No categories found</span>
              ) : (
                data1?.category?.length > 0 &&
                data1?.category?.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div className="text-center items-center">
                        {index + 1}
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center justify-center">
                        <img
                          className="circle w-10"
                          data-onerror-image="https://6ammart-admin.6amtech.com/public/assets/admin/img/160x160/img1.jpg"
                          src={`https://rent-karoo.s3.ap-south-1.amazonaws.com/${item.image[0]}`}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="text-center items-center">
                        <div className="font-light text-sm">{item?.id}</div>
                      </div>
                    </td>

                    <td className="text-center items-center ml-5 p-3">
                      <div className=" text-center l-5 p-3 ">{item.name}</div>
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

export default withAuth(Category);
