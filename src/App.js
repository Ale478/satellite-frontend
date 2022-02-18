import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ListSatellite from './components/ListSatellite';
import Search from './components/SearchSatellite';
import FilterDate from './components/FilterDate';
import Check from './components/Checkbox';
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
  const [searchTerm, setSearchTerm] = useState('');

  // Make the call to the API
  useEffect(() => {
    fetch('https://api.spacexdata.com/v5/launches/')
      .then((result) => result.json())
      .then((itemsResponse) => {
        setSaveList(itemsResponse);
        setShowingList(itemsResponse);
        setDone(true);
        setSuccess(true);
      })
      .catch(() => {
        setDone(true);
        setSuccess(false);
      });
  }, []);

  useEffect(() => {
    const listToShow = saveList.filter((satellite) => {
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
        filter = filter && satellite.success;
      }
      return filter;
    });
    setShowingList(listToShow);
  }, [
    dateToFilter,
    searchTerm,
    filterBySuccess,
    saveList,
    setShowingList,
  ]);

  return (
    <Container maxWidth="sm">
      <h1>Satellites Coordination System</h1>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
        </Grid>
        <Grid item xs={6}>
          <FilterDate setDateToFilter={setDateToFilter} dateToFilter={dateToFilter} />
        </Grid>
        <Grid item xs={6}>
          <Check setFilterBySuccess={setFilterBySuccess} />
        </Grid>
      </Grid>

      <ListSatellite showingList={showingList} done={done} success={success} />

    </Container>
  );
}

export default App;
