import React from "react";
import { Button, Card } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ItemListTable from "../Components/ItemListTable";
import SearchIcon from "@mui/icons-material/Search";
import ExportButton from "../Components/ExportButton";
import ReviewListTable from "../Components/ReviewListTable";
import withAuth from "../HOC/withAuth";

const top100Films = [
  { label: "Organic Shop (Main Demo Zone)", year: 1994 },
  { label: "Eorange (سوبر ماركت)", year: 1972 },
  { label: "Family supermarket (Main Demo Zone)", year: 1974 },
  { label: "Fresh local (Main Demo Zone)", year: 2008 },
  { label: "Online market (Main Demo Zone)", year: 1957 },
  { label: "Sk General Store (Main Demo Zone)", year: 1993 },
  { label: "Smart Shopping (Main Demo Zone)", year: 1994 },
];
const AllZones = [
  { label: "All Zones", year: 1994 },
  { label: "Main Demo Zone", year: 1972 },
];
const AllTypes = [
  { label: "All Types" },
  { label: "Pending" },
  { label: "Rejected" },
  { label: "Custom Date" },
];

const AllCategory = [
  { label: "Organic Shop (Main Demo Zone)", year: 1994 },
  { label: "Eorange (سوبر ماركت)", year: 1972 },
  { label: "Family supermarket (Main Demo Zone)", year: 1974 },
  { label: "Fresh local (Main Demo Zone)", year: 2008 },
  { label: "Online market (Main Demo Zone)", year: 1957 },
  { label: "Sk General Store (Main Demo Zone)", year: 1993 },
  { label: "Smart Shopping (Main Demo Zone)", year: 1994 },
];
const AllSubCategory = [
  { label: "Organic Shop (Main Demo Zone)", year: 1994 },
  { label: "Eorange (سوبر ماركت)", year: 1972 },
  { label: "Family supermarket (Main Demo Zone)", year: 1974 },
  { label: "Fresh local (Main Demo Zone)", year: 2008 },
  { label: "Online market (Main Demo Zone)", year: 1957 },
  { label: "Sk General Store (Main Demo Zone)", year: 1993 },
  { label: "Smart Shopping (Main Demo Zone)", year: 1994 },
];

function Review() {
  return (
    <>
      {" "}
      <div className="py-2 px-6">
        <div className="flex items-center">
          <img
            src="https://6ammart-admin.6amtech.com/public/assets/admin/img/items.png"
            className="w-5 h-5"
            alt=""
          />
          <h1 className="text-xl font-bold text-gray-800">Item Reviews</h1>
          <span className="badge badge-primary ml-3 rounded-md w-5 h-5 border flex justify-center items-center p-3 bg-[#E7E8EC]">
            0
          </span>
        </div>
      </div>
      {/* <Card className="py-6 w-full mt-2">
    <div className="bg-white rounded-lg ">
      <div className="px-6 py-4 border-b">
        <h5 className="text-lg font-semibold text-gray-800">
          <span className="mr-2"></span>
          Search Data
        </h5>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-1">
            <div className="mb-4">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField {...params} label=" All Store" />
                )}
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="mb-4">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={AllZones}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField {...params} label="All Zones" />
                )}
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="mb-4">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField {...params} label="All category" />
                )}
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="mb-4">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField {...params} label=" All Sub category" />
                )}
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="mb-4">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={AllTypes}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField {...params} label=" All Types" />
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card> */}
      <Card className="mt-8">
        <div className="flex flex-col md:flex-row md:items-center py-4 px-6 bg-white shadow-md rounded-lg">
          <form className="flex items-center mb-4 md:mb-0 md:mr-4">
            <div className="relative">
              <input
                id="datatableSearch"
                name="search"
                value=""
                type="search"
                className="form-input border h-10 pr-10 pl-4 rounded-lg focus:outline-none focus:ring focus:border-[#24BAC3]"
                placeholder="Search item by name"
                aria-label="Search here"
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-0 px-3 py-2 bg-[#99a7ba] text-white rounded-r-lg focus:outline-none hover:bg-[#8A96A7]"
              >
                <SearchIcon />
              </button>
            </div>
          </form>
          <div className="flex flex-wrap justify-start md:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <ExportButton />
          </div>
        </div>
        <ReviewListTable />
      </Card>
    </>
  );
}

export default withAuth(Review);
