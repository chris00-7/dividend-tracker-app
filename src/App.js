import './App.css';
import React from 'react';
import Dashboard from './components/Dashboard';
import Simulator from './components/Simulator';
import ETFViewer from './components/ETFViewer';

function App() {
  return (<ETFViewer />

    <div>
      <h1>Dividend Tracker Dashboard</h1>
      <Dashboard />
      <Simulator />
      <ETFViewer />
    </div>
  );
}

export default App;
Render Simulator component in App.js



