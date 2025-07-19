import React from 'react';

const etfData = [
  { name: 'JEPI', yield: 7.45, monthlyIncome: 45 },
  { name: 'SCHD', yield: 3.7, monthlyIncome: 22 },
  { name: 'VYM', yield: 3.2, monthlyIncome: 18 },
];

function ETFViewer() {
  return (
    <div>
      <h2>ETF Holdings</h2>
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
Add ETFViewer component with mock data
