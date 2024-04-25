import React from 'react'

const DispatchOrderStatisticsCard = ({ iconSrc, title, count, color }) => {
  return (
    <div>
     <a href="#" className="order--card h-full gap-6 bg-white rounded-lg shadow-md p-4 flex items-center justify-between transition duration-300 ease-in-out transform hover:scale-105">
      <div className="flex items-center">
        <img src={iconSrc} alt="dashboard" className="oder--card-icon w-8 h-8 mr-2" />
        <span className="text-sm">{title}</span>
      </div>
      <span className={`text-sm font-bold ${color}`}>{count}</span>
    </a>
      
    </div>
  )
}

export default DispatchOrderStatisticsCard
