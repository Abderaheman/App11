import React from 'react';
import EventList from './components/EventList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Event Planner</h1>
      </header>
      <EventList />
    </div>
  );
}

export default App;
