import { Switch } from "@mui/material";
import React from "react";
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

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const ZoneSettings = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full w-full">
      <div className="flex flex-col gap-5">
        <div className="flex gap-2 items-center text-[2.5vh] font-bold">
          <IoSettingsOutline />
          <h1>Zone Settings</h1>
        </div>
        <div className="shadow rounded">
          <div className="flex gap-5 justify-between items-start  px-5 py-5">
            <div className="flex flex-col gap-2 text-[2vh] w-1/2">
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
            <div className="flex flex-col gap-2 text-[2vh] w-1/2">
              <h1 className="font-semibold">Business Zone name (Default)</h1>
              <input
                className="border rounded px-3 py-1 text-[1.8vh] h-10"
                placeholder="Write a New Business Zone Name"
                type="text"
              />
              <div className="w-full mt-4">
                <APIProvider apiKey={API_KEY}>
                  <div style={{ width: "37vw", height: "50vh" }}>
                    <GoogleMap />
                  </div>
                </APIProvider>
              </div>
              <div className="self-end w-fit flex gap-3 mt-3 font-semibold">
                <button className="bg-gray-100 px-5 py-3 rounded-md text-[1.9vh]">
                  Reset
                </button>
                <button className="bg-teal-500 px-5 py-3 rounded-md text-[1.9vh] text-white">
                  Submit
                </button>
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
            <table className="table-auto min-w-full border-collapse  border border-gray-200">
              <thead className="">
                <tr className="bg-slate-100 h-10 text-sm md:text-[1.8vh]">
                  <th className="px-4 py-2">SL</th>
                  <th className="px-4 py-2">Zone Id</th>
                  <th className="px-4 py-2">Business Zone Name</th>
                  <th className="px-4 py-2">Stores</th>
                  <th className="px-4 py-2">Deliveryman</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Digtial Payment</th>
                  <th className="px-4 py-2">Cash On Delivery</th>
                  <th className="px-4 py-2">Offline Payment</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2</td>
                  <td>1</td>
                  <td>Some Zone</td>
                  <td>55</td>
                  <td>6</td>
                  <td>
                    <Switch />
                  </td>
                  <td>
                    <Switch />
                  </td>
                  <td>
                    <Switch />
                  </td>
                  <td>
                    <Switch />
                  </td>
                  <td className="flex items-center justify-center gap-2">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-2 py-1 rounded">
                      <EditIcon fontSize="8px" />
                    </button>
                    <button
                      onClick={() =>
                        navigate("/business-settings/ZoneSetup/module_settings")
                      }
                      x
                      className="bg-orange-500 hover:bg-red-600 text-white font-semibold px-2 py-2  rounded"
                    >
                      <FaGear />
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-2 py-1  rounded">
                      <DeleteIcon fontSize="8px" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>Example Zone</td>
                  <td>3</td>
                  <td>1</td>
                  <td>
                    <Switch />
                  </td>
                  <td>
                    <Switch />
                  </td>
                  <td>
                    <Switch />
                  </td>
                  <td>
                    <Switch />
                  </td>
                  <td className="flex items-center justify-center gap-2">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-2 py-1 rounded">
                      <EditIcon fontSize="8px" />
                    </button>
                    <button
                      onClick={() =>
                        navigate("/business-settings/ZoneSetup/module_settings")
                      }
                      className="bg-orange-500 hover:bg-red-600 text-white font-semibold px-2 py-2  rounded"
                    >
                      <FaGear />
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-2 py-1  rounded">
                      <DeleteIcon fontSize="8px" />
                    </button>
                  </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(ZoneSettings);
