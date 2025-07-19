import React from 'react';

function Summary({ totalMonthlyIncome, totalAnnualIncome }) {
  return (
    <div className="summary-box">
      <p className="income-summary">💰 Total Monthly Income: ${totalMonthlyIncome}</p>
      <p className="income-summary">📆 Total Annual Income: ${totalAnnualIncome}</p>
    </div>
  );
}

export default Summary;
