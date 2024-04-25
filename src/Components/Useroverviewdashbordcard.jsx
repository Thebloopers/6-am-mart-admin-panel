import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Link } from "react-router-dom";

function UserOverviewDashboardCard({textColor}) {
  return (
    <div className=" mb-4 mt-5 w-full md:min-w-[32%] lg:w-[25%] xl:w-[20%]">
      <Link

        className="block bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
      >
        <div className="p-4">
          <AvatarGroup max={4} className="mb-4">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar sx={{ bgcolor: "#107980"}} alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </AvatarGroup>
          <h3 className={`text-2xl lg:text-3xl xl:text-4xl font-bold ${textColor}`}>
            25
          </h3>
          <h5 className="text-base lg:text-lg text-gray-600 capitalize">
            Total customers
          </h5>
        </div>
      </Link>
    </div>
  );
}

export default UserOverviewDashboardCard;
