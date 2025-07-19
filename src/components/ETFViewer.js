import React from 'react';
import { etfData } from '../utils/data';

function ETFViewer() {const totalMonthlyIncome = etfData.reduce((acc, etf) => acc + etf.monthlyIncome, 0);
const totalAnnualIncome = (totalMonthlyIncome * 12).toFixed(2);

  return (
    <div>
      <h2>ETF Holdings</h2>
      <table>
   <h3 style={{ marginTop: '20px', color: '#2c3e50' }}>ETF Monthly Income Chart</h3>
<ETFIncomeChart etfData={etfData} />

  💰 Total Monthly Income: ${totalMonthlyIncome}
</p>
<p style={{ fontSize: '18px', fontWeight: 'bold', color: '#2c3e50' }}>
  📆 Total Annual Income: ${totalAnnualIncome}
</p>
   
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
Display total monthly and annual dividend income in ETFViewer
Style total income display with bold fonts and icons
