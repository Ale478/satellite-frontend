import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

function Check(props) {
  const { setFilterBySuccess, filterBySuccess } = props;

  const handleChange = (event) => {
    setFilterBySuccess(event.target.checked);
  };

  return (
    <FormControlLabel control={<Checkbox checked={filterBySuccess} onChange={handleChange} />} label="Succesfull launch" />
  );
}

export default Check;
