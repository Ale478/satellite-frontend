import { useState, useEffect } from 'react';
import React from 'react';
import ListSatellite from './components/ListSatellite.js'
import Search from './components/SearchSatellite.js'
import FilterDate from './components/FilterDate.js';
import Checkbox from './components/Checkbox.js'
import './App.css';



function App() {

  // Status for the list to display
  const [showingList, setShowingList] = useState([]);

  // Status for the list to save
  const [saveList, setSaveList] = useState([]);

  const [success, setSuccess] = useState(0);
  const [done, setDone] = useState(0);


    // Make the call to the API
  useEffect(() => {
    fetch('https://api.spacexdata.com/v5/launches/')
    .then(result=>result.json())
    .then(itemsResponse=>{setSaveList(itemsResponse); setShowingList(itemsResponse); setDone(true); setSuccess(true);})
    .catch(() => {
        setDone(true);
        setSuccess(false);
    })
}, []);


  return (
    <div className="tituloPrincipal">
      <h1>Satellite Coordination System</h1>
      <Search saveList={saveList} setShowingList={setShowingList}/>
      <FilterDate saveList={saveList} setShowingList={setShowingList}/>
      <Checkbox saveList={saveList} setShowingList={setShowingList}/>
      <ListSatellite showingList={showingList} done={done} success={success}/>
    </div>
  );
}

export default App;