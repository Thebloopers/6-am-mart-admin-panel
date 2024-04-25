import React from "react";
import { IoMdStar } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ToggleButton from "../Components/ToggleButton";
import withAuth from "../HOC/withAuth";

const SocialSettings = () => {
  const tableData = [
    {
      id: 1,
      storeName: "Organic Shop",
      imageUrl:
        "https://6ammart-admin.6amtech.com/storage/app/public/store/2022-03-22-62395ac6e1750.png",
      ratings: "98**************1",
      totalProducts: 4,
      totalOrders: 2,
      statusChecked: true,
      actionUrl:
        "https://6ammart-admin.6amtech.com/admin/store/recommended-store-remove/1",
    },
    {
      Sl: "1",
      "Store information": {
        title: "Country Fair",
        Id: "34",
        imgSrc:
          "https://6ammart-admin.6amtech.com/storage/app/public/store/2022-03-23-623aa192a4278.png",
      },
      "Owner information": {
        name: "John Doe G",
        phoneNumber: "020000000015",
      },
      Zone: "Main Demo Zone",
      Featured: true,
      Status: true,
      Action: {
        viewLink: "https://6ammart-admin.6amtech.com/admin/store/view/34",
        editLink: "https://6ammart-admin.6amtech.com/admin/store/edit/34",
        deleteLink: "https://6ammart-admin.6amtech.com/admin/store/delete/34",
      },
    },
  ];

  return (
    <div className="h-full w-full">
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-center text-[2.5vh] font-bold">
          <IoSettingsOutline />
          <h1>Social Media</h1>
        </div>
        <div className="flex flex-col justify-between px-5 shadow py-5 gap-8 text-[2vh]">
          <div className="flex w-full gap-8">
            <div className="flex flex-col gap-1 w-1/2">
              <label className="font-semibold" htmlFor="">
                Name
              </label>
              <select className="h-10 rounded border px-3" name="Social" id="">
                <option value="Instagram">Instagram</option>
                <option value="Facebook">Facebook</option>
                <option value="Twitter">Twitter</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Pinterest">Pinterest</option>
              </select>
            </div>
            <div className="flex flex-col gap-1 w-1/2">
              <label className="font-semibold" htmlFor="">
                Social Media Links
              </label>
              <input
                className="h-10 rounded border px-3"
                placeholder="Enter URL"
                type="text"
              />
            </div>
          </div>

          <div className="w-full h-fit flex py-3 px-3 justify-end gap-3 text-[1.9vh]">
            <button className="px-8 py-2 rounded-md bg-gray-200 font-semibold">
              Reset
            </button>
            <button className="px-6 py-2 rounded-md bg-cyan-500 text-white ">
              Save Changes
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between px-5 shadow py-5 gap-8 text-[2vh]">
          <div className="overflow-x-auto max-w-[350px] md:max-w-full mt-4 shadow-sm">
            <table className="table-auto min-w-full border-collapse  border border-gray-200">
              <thead className="bg-gray-100">
                <tr className=" text-sm">
                  <th className=" px-4 py-2 ">Sl</th>
                  <th className=" px-4 py-2 ">Name</th>
                  <th className=" px-4 py-2 ">Link</th>
                  <th className=" px-4 py-2">Status</th>
                  <th className=" px-4 py-2  text-center">Action</th>
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
                        <div className="   ">
                          <div className="text-sm text-center ">Instagram</div>
                        </div>
                      </div>
                    </td>

                    <td className="flex text-center gap-1 items-center ml-5 p-3">
                      <i className="  "></i>https://www.instagram.com/?hl=en
                    </td>

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
};

export default withAuth(SocialSettings);
