import React, { useState } from "react";
import TabsComponent from "../Components/TabsComponent";
import { Card } from "@mui/material";
import CategoryListTable from "../Components/CategoryListTable";
import SearchIcon from "@mui/icons-material/Search";
import AttributeListTable from "../Components/AttributeListTable";
import UnitListTable from "../Components/UnitListTable";
import withAuth from "../HOC/withAuth";
import { useCookies } from "react-cookie";
import { createUnit, getAdminUnits } from "../helpers/units";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import { useMutation, useQuery } from "react-query";
import { signout } from "../helpers/auth";
import { useNavigate } from "react-router-dom";

function Units() {
  const navigate = useNavigate();
  const [loading, setIsLoading] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["admin"]);

  const { isError, isLoading, data, refetch } = useQuery(
    ["units", { cookies }], // Use a unique key and any relevant parameters
    () => getAdminUnits(cookies) // Pass a function that returns a promise
  );

  // Add Unit
  const addUnitMutation = useMutation(createUnit, {
    onSuccess: (data) => {
      setIsLoading(false);
      if (data.success === true) {
        return Swal.fire({
          icon: "success",
          title: "Unit Created Successfully",
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
            refetch();
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

  const handleCreateUnit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target);
    addUnitMutation.mutate({ formData: formData, cookies: cookies });

    // Reset the form after submission
    event.target.reset();
  };

  return (
    <>
      <div className="page-header flex ">
        <h1 className="page-header-title flex items-center">
          <span className="page-header-icon">
            <img
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/category.png"
              className="w-26"
              alt=""
            />
          </span>
          <span className="ml-2 text-xl font-semibold">Add new Units</span>
        </h1>
      </div>

      <div className="card-body bg-white rounded-md shadow-md p-6 mt-5">
        <form onSubmit={handleCreateUnit}>
          <div className="flex flex-col">
            <label htmlFor="unit-name" className="mb-2 text-gray-700">
              Unit *
            </label>
            <input
              type="text"
              name="name"
              id="unit-name"
              className="form-control bg-white border border-gray-300 rounded px-3 py-2 w-[75%] focus:outline-none focus:border-blue-500"
              placeholder="kg, pascal etc."
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="reset"
              className="btn btn--reset bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-md mr-2 focus:outline-none focus:bg-gray-400"
              fdprocessedid="qrwx6"
            >
              Reset
            </button>
            <button
              type="submit"
              className="btn btn--primary bg-[#24BAC3] hover:bg-[#20A7AF] text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:bg-blue-600"
              fdprocessedid="l9piv"
              disabled={loading}
            >
              <span
                className={`${
                  loading ? "block" : "hidden"
                } loading loading-dots loading-lg`}
              ></span>
              <span className={`${loading ? "hidden" : "block"}`}>Submit</span>
            </button>
          </div>
        </form>
      </div>

      <div className="mt-8">
        <Card className="p-2">
          <div className="flex items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800 mr-4">
              Unit List
            </h2>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
              {data?.data?.length || 0}
            </span>
            <form className="ml-auto flex items-center">
              <input
                id="datatableSearch"
                type="search"
                name="search"
                className="form-input border border-gray-300 rounded-l-lg px-4 py-2"
                placeholder="Unit Name"
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
        {/*Delete This Component <UnitListTable /> */}

        <div className="overflow-x-auto max-w-[384px] md:max-w-full mt-4 shadow-sm ">
          <table className="table-auto min-w-full border-collapse  border border-gray-200">
            <thead className="bg-gray-100">
              <tr className=" text-sm">
                <th className=" px-4 py-2 ">Sl</th>
                <th className=" px-4 py-2 ">Unit</th>
                <th className=" px-4 py-2  text-center">Action</th>
              </tr>
            </thead>
            <tbody id="set-rows">
              {isLoading ? (
                <span className="text-center">No units found</span>
              ) : data?.error === "Token has expired" ||
                data?.error === "Invalid token" ? (
                signout(removeCookie, () => {
                  navigate("/login");
                  return null;
                })
              ) : (
                data?.data?.length > 0 &&
                data?.data?.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div className="text-center items-center">
                        {index + 1}
                      </div>
                    </td>

                    <td className="text-center items-center ml-5 p-3">
                      <div className=" text-center l-5 p-3 ">{item.name}</div>
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

export default withAuth(Units);
