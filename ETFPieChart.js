import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function ETFChartPanel({ etfData }) {
  const barData = {
    labels: etfData.map(etf => etf.ticker),
    datasets: [
      {
        label: 'Monthly Income ($)',
        data: etfData.map(etf => etf.monthlyIncome),
        backgroundColor: '#3498db',
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' },
      title: { display: true, text: 'Income by ETF' },
    },
  };

  const pieData = {
    labels: etfData.map(etf => etf.ticker),
    datasets: [
      {
        label: 'Income Share',
        data: etfData.map(etf => etf.monthlyIncome),
        backgroundColor: [
          '#3498db', '#2ecc71', '#e74c3c', '#9b59b6', '#f1c40f',
          '#1abc9c', '#34495e', '#d35400', '#7f8c8d', '#16a085',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <div className="chart-panel">
        <h3>📊 Income by ETF</h3>
        <Bar data={barData} options={barOptions} />
      </div>
      <div className="chart-panel">
        <h3>🍕 Income Allocation by ETF</h3>
        <Pie data={pieData} />
      </div>
    </div>
  );
}

export default ETFChartPanel;
