import React from 'react';
import Dashboard from './components/Dashboard';
import Simulator from './components/Simulator';

function App() {
  return (
    <div>
      <h1>Dividend Tracker Dashboard</h1>
      <Dashboard />
      <Simulator />
    </div>
  );
}

export default App;
Render Simulator component in App.js

