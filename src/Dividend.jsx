import React from 'react';

function Dividend({ ticker, monthlyDividend }) {
  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid #ccc',
        borderRadius: '6px',
        padding: '0.75rem',
        marginBottom: '0.5rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      }}
    >
      <strong>{ticker}</strong>: ${monthlyDividend.toFixed(2)} / month
    </div>
  );
}

export default Dividend;
