import React from 'react';

function Summary({ etfData }) {
  const totalIncome = etfData.reduce((sum, etf) => sum + etf.monthlyIncome, 0);
  const topETF = etfData.reduce((prev, current) =>
    current.monthlyIncome > prev.monthlyIncome ? current : prev
  );

  return (
    <div className="summary-box">
      <h3>💼 Portfolio Summary</h3>
      <p><strong>Total Monthly Income:</strong> ${totalIncome.toFixed(2)}</p>
      <p><strong>Top ETF:</strong> {topETF.ticker} (${topETF.monthlyIncome}/mo)</p>
    </div>
  );
}

export default Summary;
