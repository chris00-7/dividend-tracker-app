import React from 'react';
import Holdings from './Holdings';

const holdings = [
  { ticker: 'O', monthlyDividend: 15 },
  { ticker: 'JEPI', monthlyDividend: 32 },
  { ticker: 'AGNC', monthlyDividend: 20 },
  { ticker: 'MAIN', monthlyDividend: 18 },
];

function calculateTotal(data) {
  return data.reduce((total, item) => total + item.monthlyDividend, 0);
}

function App() {
  const totalMonthlyDividend = calculateTotal(holdings);

  return (
    <div
      className="App"
      style={{
        padding: '2rem',
        fontFamily: 'Arial, sans-serif',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      <h1>💸 Dividend Tracker</h1>
      <p>Welcome to your portfolio dashboard.</p>

      <div
        style={{
          marginTop: '1rem',
          background: '#f0f4f8',
          padding: '1rem',
          borderRadius: '8px',
        }}
      >
        <h2>
          Total Monthly Dividend:{' '}
          <span style={{ color: '#2e8b57' }}>
            ${totalMonthlyDividend.toFixed(2)}
          </span>
        </h2>
      </div>
      
    </div>
  );
}

export default App;