import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ETFIncomeChart({ etfData }) {
  const chartData = {
    labels: etfData.map(etf => etf.ticker),
    datasets: [
      {
        label: 'Monthly Income ($)',
        data: etfData.map(etf => etf.monthlyIncome),
        backgroundColor: '#3498db',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' },
      title: { display: true, text: 'Income by ETF' },
    },
  };

  return <Bar data={chartData} options={chartOptions} />
}

export default ETFIncomeChart;
