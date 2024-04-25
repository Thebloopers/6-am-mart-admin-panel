import React from "react";
import TabComponent2 from "../Components/TabComponents2";
import { Box } from "@mui/material";

function UpdateCampaingsedit() {
  return (
    <>

   
      <div className="page-header bg-white py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="page-header-title text-2xl font-bold flex items-center">
          <span className="page-header-icon mr-2">
            <img
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/campaign.png"
              className="w-8 h-8"
              alt=""
            />
          </span>
          <span>Update campaign</span>
        </h1>
      </div>
    <div className="shadow-md">
      <TabComponent2 placeholder={"Get Your Grocery Items"} />
    
    <div className=" mx-auto px-4 py-8">
      <div className="bg-white p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Update Campaign</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="date_from" className="block text-sm font-medium text-gray-700">
                Start Date
              </label>
              <input
                type="date"
                id="date_from"
                className="form-input w-1/2 border py-2 p-2 rounded-md"
                required
                name="start_date"
                value="2023-10-19"
                max="2023-12-30"
              />
            </div>
            <div>
              <label htmlFor="date_to" className="block text-sm font-medium text-gray-700">
                End Date
              </label>
              <input
                type="date"
                id="date_to"
                className="form-input w-1/2 border py-2 p-2 rounded-md"
                required
                name="end_date"
                value="2023-12-30"
                min="2023-10-19"
              />
            </div>
            <div>
              <label htmlFor="start_time" className="block text-sm font-medium text-gray-700">
                Daily Start Time
              </label>
              <input
                type="time"
                id="start_time"
                className="form-input w-1/2 border py-2 p-2 rounded-md"
                name="start_time"
                value="07:40"
              />
            </div>
            <div>
              <label htmlFor="end_time" className="block text-sm font-medium text-gray-700">
                Daily End Time
              </label>
              <input
                type="time"
                id="end_time"
                className="form-input w-1/2 border py-2 p-2 rounded-md"
                name="end_time"
                value="22:41"
              />
            </div>
          </div>
          <div>
            <label htmlFor="customFileEg1" className="block text-sm font-medium text-gray-700 mb-1">
              Campaign Image
              <span className="text-red-500">*</span>
              <span className="text-xs text-gray-500"> (Ratio 900x300)</span>
            </label>
            <div className="flex items-center justify-center bg-gray-100 border border-gray-300 rounded-lg p-3 mb-3">
              <img
                className="w-full h-40 object-cover rounded-lg"
                id="viewer"
                src="https://6ammart-admin.6amtech.com/storage/app/public/campaign/2023-10-19-6530a56f60ee3.png"
                alt="campaign image"
                onError={(e) => {
                  e.target.src = 'https://6ammart-admin.6amtech.com/public/assets/admin/img/900x400/img1.jpg';
                }}
              />
            </div>
            <div>
              <input
                type="file"
                name="image"
                id="customFileEg1"
                className="form-input w-full  py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
              />
              <p className="text-xs text-gray-500 mt-1">Choose file (jpg, png, jpeg, gif, bmp, tif, tiff)</p>
            </div>
            <div className="flex justify-end mt-3">
      <button
        type="reset"
        id="reset_btn"
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
      >
        Reset
      </button>
      <button
        type="submit"
        className="bg-[#24bac3] hover:bg-[#20A7AF] text-white font-bold py-2 px-4 rounded"
      >
        Update
      </button>
    </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default UpdateCampaingsedit;
