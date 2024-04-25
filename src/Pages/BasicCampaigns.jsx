import React from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";
import CampaignsTable from "../Components/CampaignsTable";
import withAuth from "../HOC/withAuth";

function BasicCampaigns() {
  const campaigns = [
    {
      id: 1,
      title: "Get Your Grocery Items",
      dateDuration: "30 Dec 2023-30 Dec 2023",
      timeDuration: "07:40:am-10:41:pm",
      status: true, // Assuming status is boolean
    },
    {
      id: 2,
      title: "Buy One Get One",
      dateDuration: "16 Jan 2024-16 Jan 2024",
      timeDuration: "09:02:am-10:03:pm",
      status: true,
    },
    // Add more campaign objects as needed
  ];
  return (
    <>
      <div className=" mx-auto px-4 py-8">
        <div className="bg-white shadow-md rounded-lg">
          <div className="px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src="https://6ammart-admin.6amtech.com/public/assets/admin/img/campaign.png"
                  className="w-10 h-10 mr-2"
                  alt=""
                />
                <h1 className="text-lg font-semibold text-gray-800">
                  Campaign
                </h1>
              </div>
              <button className="btn btn-outline text-[#24bac3] hover:bg-[#24bac3]">
                <AddIcon />
                <span className="hidden sm:inline">Add New Campaign</span>
              </button>
            </div>
            <hr className="my-4" />
            <div className="flex items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800 mr-4">
                Campaign list
              </h2>
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full mr-5">
                2
              </span>
              <form className="ml-auto flex items-center">
                <input
                  id="datatableSearch"
                  type="search"
                  name="search"
                  className="form-input border border-gray-300 rounded-l-lg px-4 py-2"
                  placeholder="Ex: Search Title ..."
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
            <div className="overflow-x-auto max-w-[400px] md:max-w-full">
              <CampaignsTable campaigns={campaigns} />
            </div>
          </div>
          <div className="px-6 py-4">
            <div className="text-right">
              <Link to="#" className="text-blue-500 hover:underline">
                View All
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withAuth(BasicCampaigns);
