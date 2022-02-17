import * as React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const FilterDate = (props) => {
    const {setDateToFilter, dateToFilter} = props
    const handleDateChange = date => {
        setDateToFilter(date);
    }
    return (
        <DatePicker
            selected={dateToFilter}
            onChange={handleDateChange} 
        />
    );
};


export default FilterDate;
