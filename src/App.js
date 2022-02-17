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

  const [dateToFilter, setDateToFilter] = useState(0);
  const [filterBySuccess, setFilterBySuccess] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  

    // Make the call to the API
  useEffect(() => {
    fetch('https://api.spacexdata.com/v5/launches/')
      .then(result=>result.json())
      .then(itemsResponse=> {
        setSaveList(itemsResponse);
        setShowingList(itemsResponse);
        setDone(true);
        setSuccess(true);})
      .catch(() => {
          setDone(true);
          setSuccess(false);
      })
  }, []);

  useEffect(() => {
      const listToShow = saveList.filter(satellite => {
         let filter = true;
          
         // Filter by date
         if (dateToFilter) {
           filter = filter && Date.parse(satellite.date_local) > dateToFilter.getTime();
         }
    
         // Filter by name
         if (searchTerm) {
           filter = filter && (
              satellite.name
                       .toLowerCase()
                       .includes(searchTerm.toLowerCase())
            );
          }
     
          // Filter by check
          if (filterBySuccess) {
            filter = filter && satellite.success
          }
          return filter;
        });
        setShowingList(listToShow);
      }, [
        dateToFilter,
        searchTerm,
        filterBySuccess,
        saveList,
        setShowingList
      ]);
      
  return (
    <div className="tituloPrincipal">
      <h1>Satellite Coordination System</h1>
      <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
      <FilterDate setDateToFilter={setDateToFilter} dateToFilter={dateToFilter}/>
      <Checkbox setFilterBySuccess={setFilterBySuccess}/>
      <ListSatellite showingList={showingList} done={done} success={success}/>
    </div>
  );
}

export default App;