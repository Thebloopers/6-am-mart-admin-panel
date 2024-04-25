import React from 'react';
import { Link } from 'react-router-dom';

const CustomerCard = ({ imageSrc, count, subtitle, link }) => {
  return (
    <Link href={link} className="">
      <div className="customer-statistics-card bg-white rounded-lg shadow-md p-4 hover:shadow-lg md:w-full">
        <div className="title flex items-center justify-between">
          <img src={imageSrc} alt="Customer" className="w-12 h-12 mr-3" />
          <h4 className="text-xl font-bold">{count}</h4>
        </div>
        <h4 className="subtitle text-lg text-gray-600 capitalize mt-2">{subtitle}</h4>
      </div>
    </Link>
  );
};

export default CustomerCard;
