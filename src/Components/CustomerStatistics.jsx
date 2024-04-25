import React from "react";
import CustomerCard from "./CustomerCard";
import GrowthChart from "./GrowthChart";
import CustomerReviewList from "./CustomerReviewList";
import CustomerSatisfaction from "./CustomerSatisfaction";

const CustomerStatistics = () => {
  return (
    <div className="px-4"> 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
        {/* Customer Cards */}
        <div className="md:col-span-1 w-[90%]">
          <div className="grid grid-cols-1 gap-4">
            <CustomerCard
              imageSrc="https://6ammart-admin.6amtech.com/public/assets/admin/img/new-img/customer/active.svg"
              count={28}
              subtitle="Active customers"
              link="https://6ammart-admin.6amtech.com/admin/users/customer/list?zone_id=all&filter=active"
            />
            <CustomerCard
              imageSrc="https://6ammart-admin.6amtech.com/public/assets/admin/img/new-img/customer/newly.svg"
              count={4}
              subtitle="Newly joined"
              link="https://6ammart-admin.6amtech.com/admin/users/customer/list?zone_id=all&filter=new"
            />
            <CustomerCard
              imageSrc="https://6ammart-admin.6amtech.com/public/assets/admin/img/new-img/customer/blocked.svg"
              count={0}
              subtitle="Blocked customers"
              link="https://6ammart-admin.6amtech.com/admin/users/customer/list?zone_id=all&filter=blocked"
            />
          </div>
        </div>
       
    
        {/* Growth Chart */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="text-center mb-4 flex justify-between">
              <h2 className="text-lg font-semibold">Customer Growth</h2>
              <span className="inline-block bg-gray-200 text-sm text-gray-700 px-2 py-1 rounded-full">
                This year (2024)
              </span>
            </div>
            <GrowthChart />
          </div>
        </div>
      <CustomerSatisfaction/>
      </div>
    </div>
  );
};

export default CustomerStatistics;
