import React from 'react';
import ReactDOM from 'react-dom/client';
import ETFViewer from './components/ETFViewer';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ETFViewer />
  </React.StrictMode>
);
