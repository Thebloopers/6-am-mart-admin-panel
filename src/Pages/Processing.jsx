import React from 'react';
import OrderTable2 from '../Components/OrderTable2';
import SearchBox from '../Components/SearchBox';
import ExportButton from '../Components/ExportButton';

const ordersData = [
  // Sample orders data object
  {
    id: 1,
    orderId: '100085',
    orderDate: '19 Oct 2023',
    orderTime: '04:57:pm',
    customerName: 'bappy',
    customerPhone: '8**********',
    storeName: 'Family supermarket',
    storeLink: '',
    itemQuantity: 1,
    totalAmount: '$868.00',
    paymentStatus: 'Paid',
    orderStatusClass: 'info',
    orderStatus: 'Confirmed',
    deliveryMethod: 'Home Delivery',
    detailsLink: '',
    invoiceLink: '',
    status: 'status-confirmed', // Custom class for row styling (info, warning, etc.)
  },
  // Add more order data objects here
];

const Processing = () => {
  return (
    <>
      <div className="page-header">
        <div className="flex items-center justify-between">
          <div className="mb-3 sm:mb-0">
            <h1 className="page-header-title text-capitalize flex items-center">
              <span className="page-header-icon mr-2">
                <img
                  src="https://6ammart-admin.6amtech.com/public/assets/admin/img/order.png"
                  className="w-8 h-8"
                  alt=""
                />
              </span>
              <span className="flex items-center">
                Processing Orders
                <span className="badge badge-soft-dark ml-2">6</span>
              </span>
            </h1>
          </div>
          <div className="flex gap-4 items-center">
            {/* Search Form */}
            <SearchBox placeholder="Search..." />

            {/* Export Button */}
            <ExportButton />

            {/* Filter Button */}
            <button className="btn btn-white h-10" type="button">
              <i className="tio-filter-list mr-1"></i> Filter
              <span className="badge badge-success badge-pill ml-1">0</span>
            </button>

            {/* Columns Dropdown */}
            {/* Add your columns dropdown here */}
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-4 p-4">
        <h1 className="text-2xl font-bold mb-4">Order List</h1>
        <div className="overflow-x-auto">
          <OrderTable2 orders={ordersData} />
        </div>
      </div>
    </>
  );
};

export default Processing;
