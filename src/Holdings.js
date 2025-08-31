import React from 'react';
import Dividend from './Dividend';

function Holdingslist({ data }) {
  return (
    <div style={{ marginTop: '1rem' }}>
      <h3>📋 Holdings Breakdown</h3>
      {data.map((item, index) => (
        <Dividend
          key={index}
          ticker={item.ticker}
          monthlyDividend={item.monthlyDividend}
        />
      ))}
    </div>
  );
}

export default Holdingslist;
