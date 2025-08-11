import React from 'react';
import Header from './components/Header';
import ETFSnapshot from './components/ETFSnapshot';
import DividendList from './components/DividendList';
import ReinvestmentSimulator from './components/ReinvestmentSimulator';
import './styles/App.css';

export default function App() {
  return (
    <div className="app">
      <Header title="Dividend Tracker" />
      <ETFSnapshot />
      <DividendList />
      <ReinvestmentSimulator />
    </div>
  );
}

