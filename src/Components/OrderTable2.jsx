import React from 'react'


// Component for table headers
const TableHeader = ({ label }) => (
  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{label}</th>
);

// Component for table cells
const TableCell = ({ children }) => (
  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{children}</td>
);

// Component for table rows
const TableRow = ({ data }) => (
  <tr className={data.status === 'Paid' ? 'bg-green-50' : 'bg-red-50'}>
    <TableCell>{data.id}</TableCell>
    <TableCell>{data.orderId}</TableCell>
    <TableCell>{data.orderDate}</TableCell>
    <TableCell>
      <strong>{data.customerName}</strong>
      <div>{data.customerPhone}</div>
    </TableCell>
    <TableCell>
      <a className="text-blue-600 hover:underline" href={data.storeLink} alt="view store">{data.storeName}</a>
    </TableCell>
    <TableCell className="text-center">{data.itemQuantity}</TableCell>
    <TableCell className="text-right">{data.totalAmount}</TableCell>
    <TableCell className={`text-center text-${data.status === 'Paid' ? 'green' : 'red'}-600 font-medium`}>{data.orderStatus}</TableCell>
    <TableCell>
      <a className="text-blue-600 hover:underline mr-2" href={data.detailsLink}>Details</a>
      <a className="text-blue-600 hover:underline" href={data.invoiceLink}>Invoice</a>
    </TableCell>
  </tr>
);

const OrderTable2 = ({ orders }) => {
  return (
    <>
   <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <TableHeader label="Sl" />
          <TableHeader label="Order ID" />
          <TableHeader label="Order Date" />
          <TableHeader label="Customer Information" />
          <TableHeader label="Store" />
          <TableHeader label="Item Quantity" />
          <TableHeader label="Total Amount" />
          <TableHeader label="Order Status" />
          <TableHeader label="Actions" />
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {/* Render each order as a table row */}
        {orders.map((order, index) => (
          <TableRow key={index} data={order} />
        ))}
      </tbody>
    </table>
  </div>
      
    </>
  )
}

export default OrderTable2
