import { Switch } from "@mui/material";
import React, { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ExportButton from "../Components/ExportButton";
import withAuth from "../HOC/withAuth";
import { FaGear, FaHandPointer } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { MdOutlineCrop } from "react-icons/md";
import instructions from "../assets/instructions.gif";
import { APIProvider } from "@vis.gl/react-google-maps";
import GoogleMap from "../Map/googlemap";
import { useMutation, useQuery } from "react-query";
import {
  createZone,
  deleteZone,
  getAllAdminZones,
  handleStatusesChange,
  updateZone,
} from "../helpers/zone";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const ZoneSettings = () => {
  const navigate = useNavigate();

  const [loading, setIsLoading] = useState(false);
  const [cookies, setCookie] = useCookies(["admin"]);
  const [update, setUpdate] = useState(false);
  const [itemId, setItemId] = useState(false);
  const [name, setName] = useState("");
  const [points, setPoints] = useState([]);
  const [reset, setReset] = useState(false);

  const { isError, isLoading, data, refetch } = useQuery(
    ["adminzones", { cookies }], // Use a unique key and any relevant parameters
    () => getAllAdminZones(cookies) // Pass a function that returns a promise
  );

  //create zone
  const zoneMutation = useMutation(createZone, {
    onSuccess: (data) => {
      setIsLoading(false);
      if (data.success === true) {
        return Swal.fire({
          icon: "success",
          title: "Zone Created Successfully",
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
            window.location.reload();
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

  const handleCreate = (event) => {
    event.preventDefault();
    setIsLoading(true);
    zoneMutation.mutate({ name: name, points: points, cookies: cookies });
  };

  //update zone
  const updateZoneMutation = useMutation(updateZone, {
    onSuccess: (data) => {
      setIsLoading(false);
      if (data.success === true) {
        return Swal.fire({
          icon: "success",
          title: "Zone Updated",
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
            window.location.reload();
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

  const handleUpdate = (event) => {
    event.preventDefault();
    setIsLoading(true);

    updateZoneMutation.mutate({
      zoneId: itemId,
      name: name,
      points: points,
      cookies: cookies,
    });
  };

  //update service statuses
  const updateStatusesZoneMutation = useMutation(handleStatusesChange, {
    onSuccess: (data) => {
      setIsLoading(false);
      if (data.success === true) {
        return Swal.fire({
          icon: "success",
          title: data?.message || "Data Updated",
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

  const handleStatusesUpdate = (itemId, serviceName) => {
    updateStatusesZoneMutation.mutate({
      zoneId: itemId,
      serviceName,
      cookies: cookies,
    });
  };

  //delete zone
  const deleteZoneMutation = useMutation(deleteZone, {
    onSuccess: (data) => {
      setIsLoading(false);
      if (data.success === true) {
        return Swal.fire({
          icon: "success",
          title: "Zone Deleted",
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

  const handleDelete = (item) => {
    Swal.fire({
      icon: "warning",
      title: "Are You Sure ?",
      text: "Delete This Zone",
      confirmButtonText: "Confirm",
      showCancelButton: true,
      confirmButtonColor: "#00B5FF",
      cancelButtonColor: "#EF4C53",
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
      if (result.isConfirmed) {
        setIsLoading(true);
        deleteZoneMutation.mutate({ zoneId: item?._id, cookies: cookies });
      }
    });
  };

  return (
    <div className="h-full w-full">
      <div className="flex flex-col gap-5">
        <div className="flex gap-2 items-center text-[2.5vh] font-bold">
          <IoSettingsOutline />
          <h1>Zone Settings</h1>
        </div>
        <div className="shadow rounded">
          <div className="md:flex gap-5 justify-between items-start  px-5 py-5">
            <div className="flex flex-col gap-2 text-[2vh] md:w-1/2">
              <h1 className="text-green-400 font-semibold">Instructions</h1>
              <h1 className="text-[1.7vh]">
                Create & connect dots in a specific area on the map to add a new
                business zone.
              </h1>
              <div className="flex gap-3 items-center">
                <div className="px-1 py-1 rounded border border-black">
                  <FaHandPointer />
                </div>
                <h1 className="text-[1.6vh]">
                  Use this ‘Hand Tool’ to find your target zone.
                </h1>
              </div>
              <div className="flex gap-3 items-center">
                <div className="px-1 py-1 rounded border border-black">
                  <MdOutlineCrop />
                </div>
                <h1 className="text-[1.6vh]">
                  Use this ‘Shape Tool’ to point out the areas and connect the
                  dots. Minimum 3 points/dots are required.
                </h1>
              </div>
              <div className="h-fit mt-2">
                <img className="h-[35vh]" src={instructions} alt="" />
              </div>
            </div>
            <div className="flex flex-col gap-2 text-[2vh] md:w-1/2">
              <h1 className="font-semibold">Business Zone name (Default)</h1>
              <input
                className="border rounded px-3 py-1 text-[1.8vh] h-10"
                placeholder="Write a New Business Zone Name"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="w-full mt-4 h-[50vh]">
                <APIProvider apiKey={API_KEY} libraries={["places"]}>
                  <GoogleMap
                    polygon={true}
                    points={points}
                    setPoints={setPoints}
                    reset={reset}
                  />
                </APIProvider>
              </div>
              <div className="self-end w-fit flex gap-3 mt-20 font-semibold">
                <button
                  type="button"
                  onClick={() => setReset(true)}
                  className="bg-gray-100 px-5 py-3 rounded-md text-[1.9vh]"
                >
                  Reset
                </button>
                {update ? (
                  <button
                    type="submit"
                    onClick={handleUpdate}
                    className="bg-teal-500 px-5 py-3 rounded-md text-[1.9vh] text-white"
                    disabled={loading}
                  >
                    <span
                      className={`${
                        loading ? "block" : "hidden"
                      } loading loading-dots loading-sm`}
                    ></span>
                    <span className={`${loading ? "hidden" : "block"}`}>
                      Update
                    </span>
                  </button>
                ) : (
                  <button
                    type="submit"
                    onClick={handleCreate}
                    className="bg-teal-500 px-5 py-3 rounded-md text-[1.9vh] text-white"
                    disabled={loading}
                  >
                    <span
                      className={`${
                        loading ? "block" : "hidden"
                      } loading loading-dots loading-sm`}
                    ></span>
                    <span className={`${loading ? "hidden" : "block"}`}>
                      Submit
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="shadow rounded ">
          <div className="flex md:flex-row flex-col w-fit justify-between px-5 py-5 md:items-center">
            <div className="font-semibold">
              <h1>Zone List</h1>
            </div>
            <div className="flex md:flex-row flex-col gap-3">
              <form className="ml-auto flex items-center">
                <input
                  id="datatableSearch"
                  type="search"
                  name="search"
                  className="form-input border border-gray-300 rounded-l-lg px-4 py-3"
                  placeholder="Ex: Search Title ..."
                  aria-label="Search here"
                />
                <button
                  type="submit"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold px-4 py-3 rounded-r-lg "
                >
                  <SearchIcon />
                </button>
              </form>

              <ExportButton />
            </div>
          </div>
          <div className="overflow-x-auto max-w-[350px] md:max-w-full mt-4 shadow-sm">
            <table className="table-auto min-w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-slate-100 h-10 text-sm md:text-[1.8vh]">
                  <th className="px-4 py-2 text-left">SL</th>
                  <th className="px-4 py-2 text-left">Zone Id</th>
                  <th className="px-4 py-2 text-left">Business Zone Name</th>
                  <th className="px-4 py-2 text-left">Stores</th>
                  <th className="px-4 py-2 text-left">Deliveryman</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Digital Payment</th>
                  <th className="px-4 py-2 text-left">Cash On Delivery</th>
                  <th className="px-4 py-2 text-left">Offline Payment</th>
                  <th className="px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data?.zones?.map((item, index) => (
                    <tr key={index} className="text-sm md:text-[1.8vh]">
                      <td className="px-4 py-2">{index + 1}</td>
                      <td className="px-4 py-2">{item?.zoneId}</td>
                      <td className="px-4 py-2">{item?.name}</td>
                      <td className="px-4 py-2">{item?.stores}</td>
                      <td className="px-4 py-2">{item?.deliveryMan}</td>
                      <td className="px-4 py-2">
                        <Switch
                          className="ml-4"
                          checked={item?.status}
                          onChange={() =>
                            handleStatusesUpdate(item?._id, "status")
                          }
                        />
                      </td>
                      <td className="px-4 py-2">
                        <Switch
                          className="ml-4"
                          checked={item?.isDigitalPayment}
                          onChange={() =>
                            handleStatusesUpdate(item?._id, "isDigitalPayment")
                          }
                        />
                      </td>
                      <td className="px-4 py-2">
                        <Switch
                          className="ml-4"
                          checked={item?.isCashOnDelivery}
                          onChange={() =>
                            handleStatusesUpdate(item?._id, "isCashOnDelivery")
                          }
                        />
                      </td>
                      <td className="px-4 py-2">
                        <Switch
                          className="ml-4"
                          checked={item?.isOfflinePayment}
                          onChange={() =>
                            handleStatusesUpdate(item?._id, "isOfflinePayment")
                          }
                        />
                      </td>
                      <td className="px-4 py-2 flex items-center gap-2">
                        <button
                          type="button"
                          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-2 py-1 rounded"
                          onClick={() => (
                            setUpdate(true),
                            setName(item?.name),
                            setItemId(item?._id),
                            setPoints(item?.location?.coordinates[0])
                          )}
                        >
                          <EditIcon fontSize="8px" />
                        </button>
                        <button
                          onClick={() =>
                            navigate(
                              "/business-settings/ZoneSetup/module_settings"
                            )
                          }
                          className="bg-orange-500 hover:bg-red-600 text-white font-semibold px-2 py-2 rounded"
                        >
                          <FaGear />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(item)}
                          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-2 py-1 rounded"
                        >
                          <DeleteIcon fontSize="8px" />
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
};

export default withAuth(ZoneSettings);
