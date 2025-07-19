import React from 'react';
import { etfData } from '../utils/data';
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
Link ETFViewer.js to data.js for dynamic ticker and income display
