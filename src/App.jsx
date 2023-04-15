import React from 'react';
import ZoneSelector from './components/ZoneSelector';
import ShelfCard from './components/ShelfCard';
import SummaryCard from './components/SummaryCard';
import './styles.css';

function App() {
  return (
    <div className="container">
      <div className="left">
        <ZoneSelector />
        <ShelfCard />
      </div>
      <div className="right">
        <SummaryCard />
      </div>
    </div>
  );
}

export default App;
