import './App.css';
import React from 'react';
import Dashboard from './components/Dashboard';
import Simulator from './components/Simulator';
import ETFViewer from './components/ETFViewer';

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
    </section>

    <section>
      <h2>Simulator</h2>
      <Simulator />
    </section>
  </div>
);

    </div>
  );
}

export default App;
Render Simulator component in App.js



