import './App.css';
import React from 'react';
import Dashboard from './components/Dashboard';
import Simulator from './components/Simulator';
import ETFViewer from './components/ETFViewer';
import ETFChartPanel from './components/ETFChartPanel';

function App() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">📊 Dividend Tracker Dashboard</h1>

      <section>
        <h2>ETF Viewer</h2>
        <ETFViewer />
      </section>

      <section>
        <h2>Dashboard</h2>
        <Dashboard />
        <ETFChartPanel
          etfData={[
            { ticker: 'QYLD', monthlyIncome: 60 },
            { ticker: 'JEPI', monthlyIncome: 45 },
            { ticker: 'XYLD', monthlyIncome: 38 },
            { ticker: 'RYLD', monthlyIncome: 30 },
          ]}
        />
      </section>

      <section>
        <h2>Simulator</h2>
        <Simulator />
      </section>
    </div>
  );
}

export default App;
