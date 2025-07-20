import React from 'react';
import { etfData } from '../utils/data';
import ETFIncomeChart from './ETFIncomeChart';
import ETFPieChart from './ETFPieChart';
import Summary from './Summary';

function ETFViewer() {
  const totalMonthlyIncome = etfData.reduce((acc, etf) => acc + etf.monthlyIncome, 0);
  const totalAnnualIncome = (totalMonthlyIncome * 12).toFixed(2);

  return (
    <div>
      <h2>ETF Holdings</h2>

      {/* Bar Chart Panel */}
      <div className="chart-panel">
        <h3>📊 Monthly Income Breakdown</h3>
        <ETFIncomeChart etfData={etfData} />
      </div>

      {/* Pie Chart Panel */}
      <div className="chart-panel">
        <h3>🍕 Income Allocation by ETF</h3>
        <ETFPieChart etfData={etfData} />
      </div>

      {/* Income Summary */}
      <Summary
        totalMonthlyIncome={totalMonthlyIncome}
        totalAnnualIncome={totalAnnualIncome}
      />

      {/* ETF Table */}
      <table>
        <thead>
          <tr>
            <th>ETF</th>
            <th>Yield (%)</th>
            <th>Monthly Income ($)</th>
          </tr>
        </thead>
        <tbody>
          {etfData.map((etf, index) => (
            <tr key={index}>
              <td>{etf.name}</td>
              <td>{etf.yield}</td>
              <td>{etf.monthlyIncome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ETFViewer;


