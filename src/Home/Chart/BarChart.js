import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';


  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Achievements',
      },
    },
  };

  const labels = ['%'];


  export const data = {
    labels,
    datasets: [
      {
        label: 'Media',
        data: [900],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'General',
        data: [1000],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
const BarChart = () => {
    return (
        <div>
            <Bar options={options} data={data} />
        </div>
    );
};

export default BarChart;