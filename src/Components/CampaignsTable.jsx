import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ToggleButton from "./ToggleButton";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function CampaignsTable({ campaigns, price }) {

   const navigate=useNavigate()
   const[newNavigate,SetNewNavigate]=useState()
  return (
    <div className="md:max-w-full overflow-auto max-w-[400px]">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-2 px-4 text-left">Title</th>
            <th className="py-2 px-4 text-left">Date Duration</th>
            <th className="py-2 px-4 text-left">Time Duration</th>
            <th className="py-2 px-4 text-left">Status</th>
            {price && <th className="py-2 px-4 text-left">{price}</th>}
            <th className="py-2 px-4 text-center">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {campaigns.map((campaign) => (
            <tr key={campaign.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-4">
                <Link to={`/${campaign.id}`} className="text-blue-500 hover:underline">
                  {campaign.title}
                </Link>
              </td>
              <td className="py-3 px-4">{campaign.dateDuration}</td>
              <td className="py-3 px-4">{campaign.timeDuration}</td>
              <td className="py-3 px-4">
                <ToggleButton checked={campaign.status} />
              </td>
              {price && <td className="py-3 px-4">{campaign.price}</td>}
              <td className="py-3 px-4 text-center space-x-2">
             
                  <button onClick={()=>{navigate("/campaign/basic/edit/")}} className="btn btn-sm btn-outline text-[#24bac3] hover:bg-[#24bac3]">
                    <EditIcon />
                  </button>
          
                <button className="bg-red-500 btn-sm hover:bg-red-600 text-white btn btn-outline mt-2">
                  <DeleteIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CampaignsTable;
