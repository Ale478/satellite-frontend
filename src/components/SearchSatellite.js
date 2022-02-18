import React from 'react';
import TextField from '@mui/material/TextField';

function Search(props) {
  const { searchTerm, setSearchTerm } = props;

  const handleChange = (event) => {
    const searchval = event
      .target
      .value;
    setSearchTerm(searchval);
  };

  return (
    <TextField
      label="Search"
      value={searchTerm}
      onChange={handleChange}
    />
  );
}

export default Search;
