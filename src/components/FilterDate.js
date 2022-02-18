import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

function FilterDate(props) {
  const { setDateToFilter, dateToFilter } = props;
  const handleDateChange = (date) => {
    setDateToFilter(date);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Date"
        value={dateToFilter}
        onChange={handleDateChange}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>

  );
}

export default FilterDate;
