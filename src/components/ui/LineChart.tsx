'use client';

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

type LineChartProps = {
  data: string[];
  coin: string;
};

export default function LineChart({ data, coin }: LineChartProps) {
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
      },
      y: {
        display: true,
        grid: {
          display: false,
        },
      },
    },
    plugins: {},
  };

  function generateTimestamps(): string[] {
    const currentHour = new Date().getHours();
    const timestamps = [];

    for (let i = 0; i < 24; i++) {
      const hour = (currentHour + i) % 24;
      const timestamp = `${hour}:00`;
      timestamps.push(timestamp);
    }

    return timestamps;
  }

  const colorChart = data[0] > data[data.length - 1] ? '#EA3943' : '#16C784';

  const labels = generateTimestamps();

  const chartData = {
    labels,
    datasets: [
      {
        label: coin,
        data: data.map((number) => Number(number)),
        borderColor: colorChart,
        fill: true,
        backgroundColor: '#FCFCFC',
      },
    ],
  };

  return (
    <div className=" w-full h-full">
      <Line data={chartData} options={options} />
    </div>
  );
}
