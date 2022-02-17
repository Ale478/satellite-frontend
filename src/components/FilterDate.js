import * as React from 'react';
import { useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const FilterDate = (props) => {
    const {saveList, setShowingList} = props
    const [startDate, setStartDate] = useState(new Date());
    const handleDateChange = date => {
        console.log(saveList)
        const results = saveList.filter(satellite => 
                Date.parse(satellite.date_local) > date.getTime()
        );

        setShowingList(results);
        setStartDate(date);
    }
    return (
        <DatePicker
            selected={startDate}
            onChange={(handleDateChange)} 
            showMonthYearPicker
            dateFormat="MM/yyyy"
        />
    );
};


export default FilterDate;
