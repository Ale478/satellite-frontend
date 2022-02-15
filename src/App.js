import React from 'react';
import './App.css';
import ListSatellite from './components/ListSatellite.js'

function App() {
  return (
    <div className="tituloPrincipal">
      <h1>Satellite Coordination System</h1>
      <ListSatellite/>
    </div>
  );
}

export default App;