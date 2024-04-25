
import React, { useState, useEffect } from 'react';

import ReactApexChart from 'react-apexcharts';
import series from './seriesData';

const CustomerGrowthChart = () => {
    const [chartData, setChartData] = useState({
        series: [{
          name: "STOCK ABC",
          data: series.monthDataSeries1.prices
        }],
        options: {
          chart: {
            type: 'area',
            height: 350,
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
         
          labels: series.monthDataSeries1.dates,
          xaxis: {
            type: 'datetime',
          },
          yaxis: {
            opposite: true
          },
          legend: {
            horizontalAlign: 'left'
          }
        }
      });
    
      useEffect(() => {
        // ComponentDidMount logic can go here
        return () => {
          // ComponentWillUnmount logic can go here
        };
      }, []); // Empty dependency array ensures this effect runs only once after initial render
    
  return (
    <div>
    <div id="chart">
      <ReactApexChart options={chartData.options} series={chartData.series} type="area" height={300} />
    </div>
    <div id="html-dist"></div>
  </div>
  )
}

export default CustomerGrowthChart
