import React from 'react';

const PageHeader = ({ title, count }) => {
  return (
    <div className=" rounded-lg p">
      <div className="flex items-center">
        <div className="flex items-center space-x-4">
          <img
            src="https://6ammart-admin.6amtech.com/public/assets/admin/img/people.png"
            className="w-10 h-10 rounded-full bg-gray-200 p-1"
            alt=""
          />
          <h1 className="text-xl font-bold text-gray-800">{title}</h1>
        </div>
        <div className="flex items-center">
          <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">{count}</span>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
