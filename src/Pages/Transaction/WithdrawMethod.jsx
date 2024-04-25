import React from "react";
import { MdOutlineAdd } from "react-icons/md";
import {
  AiOutlineSearch,
  AiOutlineDownload,
  AiOutlineFilter,
  AiOutlineTable,
} from "react-icons/ai";
import Switch from "@mui/material/Switch";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import withAuth from "../../HOC/withAuth";
const tableData = [
  {
    id: "1",
    MethodName: "6cash",
    type: "String",
    Accountname: "Account name",
    Placeholder: "Enter your account name",
    Required: "Required",
    action: "",
  },
  {
    id: "2",
    MethodName: "6cash",
    type: "String",
    Accountname: "Account name",
    Placeholder: "Enter your account name",
    Required: "Required",
    action: "",
  },
];
const label = { inputProps: { "aria-label": "Switch demo" } };

function WithdrawMethod() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="page-header-title flex items-center">
          <span className="page-header-icon mr-2">
            <img
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/icons/withdraw.png"
              className="w-[25px] "
              alt=""
            />
          </span>
          <span className="font-bold text-2xl">Withdraw Method List</span>
        </h1>
      </div>

      <div className="md:flex  items-center justify-between md:gap-4 mt-5 border  ">
        <div class="card-header py-4 border-b-0 md:flex md:flex-wrap md:items-center md:justify-between">
          <form class="flex items-center">
            <div class="relative border  rounded-md rounded-r-lg w-full mx-2">
              <input
                id="datatableSearch_"
                type="search"
                name="search"
                class="form-control py-3 w-full px-10  rounded-lg relative  border-[#24bac3] "
                placeholder="Ex:Search store name"
                aria-label="Search"
              />
              <button
                type="submit"
                class="absolute right-0 top-0 bottom-0 flex items-center justify-center  text-white  bg-[#24bac3] px-3  rounded-r-lg"
              >
                <AiOutlineSearch size={20} />
              </button>
            </div>
          </form>
        </div>

        <div className="col-auto flex items-center rounded-md font-bold bg-[#24bac3] border px-10 py-3 mr-3 ml-2 text-white hover:bg-[#24bac3]]">
          <i className="tio-add mr-1 font-extrabold">
            <MdOutlineAdd />
          </i>
          <span>Add new method</span>
        </div>
      </div>

      <div className="overflow-x-auto max-w-[348px] md:max-w-full mt-4 shadow-sm ">
        <table className="table-auto min-w-full border-collapse  border border-gray-200">
          <thead className="bg-gray-100">
            <tr className=" text-sm ">
              <th className=" px-4 py-2 ">Sl</th>
              <th className=" px-4 py-2 ">Method Name</th>
              <th className=" px-4 py-2 ">Method Fields</th>
              <th className=" px-4 py-2 text-center">Active Status</th>
              <th className=" px-4 py-2 text-center">Default Method</th>

              <th className=" px-4 py-2  text-center">Action</th>
            </tr>
          </thead>
          <tbody id="set-rows  ">
            {tableData?.map((item) => (
              <tr key={item.id}>
                <td>
                  <span className="ml-7">{item.id}</span>
                </td>
                <td className="text-sm text-center ">{item.MethodName}</td>

                <td className=" text-center text-sm  mt-2  ">
                  <div>
                    <div>
                      <span className="font-bold p-1"> Name: </span>
                      <span>{item.Accountname}</span>
                    </div>
                    <div>
                      <span className="font-bold"> Type: </span>
                      <span>{item.type}</span>
                    </div>
                    <div>
                      <span className="font-bold">
                        {" "}
                        Placeholder:<span> {item.Placeholder}</span>{" "}
                      </span>
                    </div>
                    <p className="font-bold"> {item.Required}</p>
                  </div>
                </td>
                <td className="text-center">
                  <i>
                    <Switch
                      color="#24bac3" // Set default color to #24bac3
                      {...label}
                      defaultChecked
                      sx={{ "& .MuiSwitch-thumb": { bgcolor: "#24bac3" } }} // Customize thumb color
                      inputProps={{
                        "aria-label": "checkbox with default color",
                      }}
                    />
                  </i>
                </td>
                <td className="text-center">
                  <i>
                    <Switch
                      color="#24bac3" // Set default color to #24bac3
                      {...label}
                      sx={{ "& .MuiSwitch-thumb": { bgcolor: "#24bac3" } }} // Customize thumb color
                      inputProps={{
                        "aria-label": "checkbox with default color",
                      }}
                    />
                  </i>
                </td>
                <td className="py-3 px-2  text-center   ">
                  <button className="border border-[#24bac3] hover:bg-[#24bac3] hover:text-[#24bac3] text-[#24bac3] text-center font-semibold py-1 px-3 rounded md:mr-2">
                    {item.action}
                    <FaPen className="text-[#24bac3] hover:text-white" />
                  </button>
                  <button className="border border-[#ff7500] hover:bg-[#ff7500] hover:text-[#ff7500] text-white text-center font-semibold py-1 px-3 rounded md:mr-2">
                    {item.action}
                    <MdDelete className="text-[#ff7500] hover:text-white" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default withAuth(WithdrawMethod);
