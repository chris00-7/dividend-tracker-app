import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function ETFPieChart({ etfData }) {
  const chartData = {
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
    <div className="chart-panel">
      <h3>🍕 Income Allocation by ETF</h3>
      <Pie data={chartData} />
    </div>
  );
}

export default ETFPieChart;
