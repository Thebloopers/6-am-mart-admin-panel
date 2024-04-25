import React from "react";

const CustomerLoyaltyCard = () => {
  return (
    <div className="card mb-3 shadow-lg">
      <div className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Points Earned */}
          <div className="col-md-4">
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg p-2 text-white">
              <div className="flex items-center justify-center mb-4">
                <img
                  className="w-16"
                  src="https://6ammart-admin.6amtech.com/public/assets/admin/img/customer-loyality/1.png"
                  alt="transactions"
                />
              </div>
              <div className="flex flex-col justify-center items-center">

              <h2 className="text-4xl font-bold mb-2">3988</h2>
              <div className="text-lg">Points Earned</div>
              </div>
            </div>
          </div>

          {/* Points Converted */}
          <div className="col-md-4">
            <div className="bg-gradient-to-br from-red-500 to-yellow-500 rounded-lg p-2 text-white">
              <div className="flex items-center justify-center mb-4">
                <img
                  className="w-16"
                  src="https://6ammart-admin.6amtech.com/public/assets/admin/img/customer-loyality/4.png"
                  alt="transactions"
                />
              </div>
              <div className="flex flex-col justify-center items-center">

              <h2 className="text-4xl font-bold mb-2">180</h2>
              <div className="text-lg">Points Converted</div>
              </div>
            </div>
          </div>

          {/* Current Points in Wallet */}
          <div className="col-md-4">
            <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-lg p-2 text-white">
              <div className="flex items-center justify-center mb-4">
                <img
                  className="w-16"
                  src="https://6ammart-admin.6amtech.com/public/assets/admin/img/customer-loyality/2.png"
                  alt="transactions"
                />
              </div>
              <div className="flex flex-col justify-center items-center">

              <h2 className="text-4xl font-bold mb-2">3808</h2>
              <div className="text-lg">Current Points in Wallet</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerLoyaltyCard;
