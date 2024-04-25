import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactApexChart from 'react-apexcharts';

export default function PieChartWithCenterLabel() {
    const [chartData, setChartData] = useState({
        series: [44, 55, 41, 17, 15],

        options: {
            sgd:"adjdh",
          chart: {
            type: 'donut',
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: 'bottom',
                },
              },
            },
          ],
        },
      });
    
      useEffect(() => {
        // Simulate componentDidMount to initialize the chart when component mounts
        const initializeChart = () => {
          const domContainer = document.querySelector('#chart');
    
          // Check if the chart container exists before rendering the chart
          if (domContainer) {
            ReactDOM.render(
              <ReactApexChart options={chartData.options} series={chartData.series} type="donut" />,
              domContainer
            );
          }
        };
    
        initializeChart();
    
        // Cleanup function to unmount the chart when component unmounts
        return () => {
          const domContainer = document.querySelector('#chart');
          if (domContainer) {
            ReactDOM.unmountComponentAtNode(domContainer);
          }
        };
      }, []); // Empty dependency array to run effect only once on mount
    
      return (
        <div>
          <div id="chart"></div>
          <div id="html-dist"></div>
        </div>
      );
    };
    
    
  
