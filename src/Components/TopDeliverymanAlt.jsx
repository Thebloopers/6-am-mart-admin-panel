import React from 'react'
import { Link } from 'react-router-dom'

function TopDeliveryman({ imageUrl, name, phoneNumber, orders, link }) {
  return (
    <Link href={link} className="flex bg-[#F8F9FB] rounded-lg shadow-md hover:shadow-lg overflow-hidden p-2">
    <div className="relative overflow-hidden w-20 h-20">
      <img src={imageUrl} alt={name} className="object-cover w-full h-full onerror-image" />
    </div>
    <div className="p-4 flex justify-between flex-grow">
      <div>
        <h6 className="text-xl font-semibold mb-2">{name}</h6>
        <span className="text-gray-600">{phoneNumber}</span>
      </div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-sm text-gray-700 bg-gray-200 px-2 py-1 rounded-full">Orders: {orders}</span>
      </div>
    </div>
  </Link>
  )
}

export default TopDeliveryman
