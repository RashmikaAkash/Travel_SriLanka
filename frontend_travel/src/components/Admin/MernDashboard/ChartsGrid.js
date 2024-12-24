import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const ChartsGrid = () => {
  useEffect(() => {
    const revenueOptions = {
      series: [{
        name: 'Revenue',
        data: [31, 40, 28, 51, 42, 109, 100]
      }],
      chart: {
        type: 'area',
        height: 350,
        foreColor: '#94a3b8',
        toolbar: { show: false }
      },
      colors: ['#3b82f6'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.3
        }
      },
      stroke: { curve: 'smooth' },
      grid: { borderColor: '#2a2d35' }
    };

    const userOptions = {
      series: [{
        name: 'Active Users',
        data: [44, 55, 57, 56, 61, 58, 63]
      }],
      chart: {
        type: 'bar',
        height: 350,
        foreColor: '#94a3b8',
        toolbar: { show: false }
      },
      colors: ['#8b5cf6'],
      plotOptions: {
        bar: {
          borderRadius: 4,
          columnWidth: '40%'
        }
      },
      grid: { borderColor: '#2a2d35' }
    };

    new ApexCharts(document.querySelector('#revenueChart'), revenueOptions).render();
    new ApexCharts(document.querySelector('#userChart'), userOptions).render();
  }, []);

  return (
    <div className="charts-grid">
      <div className="chart-card animate__animated animate__fadeInUp">
        <h3 className="mb-4">Revenue Overview</h3>
        <div id="revenueChart"></div>
      </div>
      <div className="chart-card animate__animated animate__fadeInUp">
        <h3 className="mb-4">User Activity</h3>
        <div id="userChart"></div>
      </div>
    </div>
  );
};

export default ChartsGrid;


