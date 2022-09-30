import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';


ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


export const data = {
  labels,
  datasets: [
    {
      type: 'line' as const,
      label: 'Dataset 1',
      backgroundColor: '#f7b731',
      borderColor: '#f7b731',
      borderWidth: 2,
      fill: false,
      data: [100, 420, 210, 420, 210, 320, 350]
    },
    {
      type: 'line' as const,
      label: 'Dataset 2',
      backgroundColor: '#05c3fb',
      borderColor: '#05c3fb',
      borderWidth: 2,
      data: [450, 200, 350, 250, 480, 200, 400],

    },
    {
      type: 'bar' as const,
      label: 'Dataset 3',
      backgroundColor: '#09ad95',
      data: [200, 450, 290, 367, 256, 543, 345],

    },
  ],
};

const options = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
}

export function Chartdetails() {
  return <Chart type='bar' data={data} options={options} className="appchart" />;
}
