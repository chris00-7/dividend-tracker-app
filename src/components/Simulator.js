import React, { useState } from 'react';

function Simulator() {
  const [monthlyDividend, setMonthlyDividend] = useState(100);
  const [reinvestmentRate, setReinvestmentRate] = useState(100);
  const [years, setYears] = useState(5);

  const calculateGrowth = () => {
    let total = monthlyDividend * 12;
    for (let i = 1; i <= years; i++) {
      total += total * (reinvestmentRate / 100);
    }
    return total.toFixed(2);
  };

  return (
    <div>
      <h2>Dividend Reinvestment Simulator</h2>
      <label>
        Monthly Dividend ($):&nbsp;
        <input type="number" value={monthlyDividend} onChange={(e) => setMonthlyDividend(Number(e.target.value))} />
      </label><br />
      <label>
        Reinvestment Rate (%):&nbsp;
        <input type="number" value={reinvestmentRate} onChange={(e) => setReinvestmentRate(Number(e.target.value))} />
      </label><br />
      <label>
        Years:&nbsp;
        <input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} />
      </label><br />
      <p><strong>Projected Value:</strong> ${calculateGrowth()}</p>
    </div>
  );
}

export default Simulator;
Add Simulator component for dividend reinvestment projections
