import React from 'react';

const DeliveryManStatisticsCard = ({ statistics }) => {
  return (
    <div className="px-2 py-8">
      <div className="flex flex-wrap justify-center">
        {statistics.map((statistic, index) => (
          <div key={index} className="w-full md:w-1/2 px-4 mb-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <a href={statistic.link} className="flex items-center justify-center">
                <img src={statistic.imageUrl} alt={statistic.altText} className="w-12 h-12 mr-4" />
                <div>
                  <h4 className="text-xl font-semibold">{statistic.value}</h4>
                  <p className="text-sm text-gray-600">{statistic.label}</p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryManStatisticsCard;
