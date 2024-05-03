import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  { id: 0, value: 10, label: 'Customer' },
  { id: 1, value: 15, label: 'Store' },
  { id: 2, value: 20, label: 'Delivery man' },
];

function UserStatistics() {
  return (
    <div className="w-full md:w-auto">
      <PieChart
        series={[
          {
            data,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          },
        ]}
        height={200}
        options={{
          legend: {
            position: 'bottom',
            alignment: 'center',
          },
          pie: {
            size: '100%',
          },
        }}
      />
    </div>
  );
}

export default UserStatistics;
