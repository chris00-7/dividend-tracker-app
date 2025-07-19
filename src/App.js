import React from 'react';
import Dashboard from './components/Dashboard';
import Simulator from './components/Simulator';
import ETFViewer from './components/ETFViewer';

function App() {
  return (
    <div>
      <h1>Dividend Tracker Dashboard</h1>
      <Dashboard />
      <Simulator />
      <ETFViewer />
    </div>
  );
}

export default App;
Fix App.js layout and remove extra component


