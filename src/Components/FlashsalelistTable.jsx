import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ToggleButton from "./ToggleButton";
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import SearchBox from "./SearchBox";

function FlashsalelistTable() {
  const navigate=useNavigate()
  const [flashSales, setFlashSales] = useState([
    {
      id: 1,
      title: "😊'Grocery Galore Flash Sale: Unbeatable Deals Await!'",
      duration: "19/Oct/2023 - 31/Dec/2023",
      activeProducts: 10,
      publish: false,
    },
    {
      id: 2,
      title: "😊'Grocery Galore Flash Sale: Unbeatable Deals Await!'",
      duration: "19/Oct/2023 - 31/Dec/2023",
      activeProducts: 10,
      publish: false,
    },
  ]);

  return (
    <div className="mt-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4 flex flex-wrap justify-between sm:p-6 border-b">
          <div className="text-lg sm:text-2xl font-semibold text-gray-800 flex items-center">
            Flash Sale List
            <span className="bg-gray-200 text-gray-700 px-3 py-1 text-xs font-semibold rounded-full mt-2 sm:mt-0 ml-2">
              {flashSales.length}
            </span>
          </div>
          <div><SearchBox/></div>
          
        </div>
       
        <div className="">
          
          <div className="overflow-x-auto max-w-[400px] overflow-auto md:max-w-full">
            <table className="w-full whitespace-nowrap">
              <thead className="bg-[#F8FAFD]">
                <tr className="text-left">
                  <th className="py-2 sm:py-4 px-4 sm:px-6">Sl</th>
                  <th className="py-2 sm:py-4 px-4 sm:px-6">Title</th>
                  <th className="py-2 sm:py-4 px-4 sm:px-6">Duration</th>
                  <th className="py-2 sm:py-4 px-4 sm:px-6">Active Products</th>
                  <th className="py-2 sm:py-4 px-4 sm:px-6">Publish</th>
                  <th className="py-2 sm:py-4 px-4 sm:px-6 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {flashSales.map((sale, index) => (
                  <tr key={sale.id} className="border-b border-gray-200">
                    <td className="py-2 sm:py-4 px-4 sm:px-6">{index + 1}</td>
                    <td className="py-2 sm:py-4 px-4 sm:px-6">{sale.title}</td>
                    <td className="py-2 sm:py-4 px-4 sm:px-6">{sale.duration}</td>
                    <td className="py-2 sm:py-4 px-4 sm:px-6">{sale.activeProducts}</td>
                    <td className="py-2 sm:py-4 px-4 sm:px-6">
                      <ToggleButton checked={sale.publish} />
                    </td>
                    <td className="py-2 sm:py-4 px-4 sm:px-6 text-center">
                      <div className="flex items-center justify-center space-x-4">
                        <button onClick={()=>{navigate("/flash-sale/add-product/")}} className="btn btn-sm btn-outline text-[#24bac3] hover:bg-[#24bac3]">
                          <AddIcon />
                          <span className="hidden sm:inline">Add New Product</span>
                        </button>
                      
                          <button type="button " onClick={()=>{navigate("/flash-sale/edit/")}} className="btn btn-sm btn-outline text-[#24bac3] hover:bg-[#24bac3]">
                            <EditIcon />
                          </button>
                      
                        <button className="btn btn-sm btn-outline  btn-error">
                          <DeleteIcon />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-gray-600 text-sm">
            Showing 1 to {flashSales.length} of {flashSales.length} entries
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlashsalelistTable;
