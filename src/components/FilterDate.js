import * as React from 'react';
import { useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const FilterDate = (props) => {
    const {saveList, setShowingList} = props
    const [startDate, setStartDate] = useState(new Date());
    const handleDateChange = event => {
        const searchdate = event
                        .target
                        .value
            setStartDate(searchdate);
            const date = searchdate;
        const results = saveList.filter(satellite => 
                satellite.date_local.include(date)
        );
        setShowingList(results)
    }
    const handleDateSelect = (date) => {
        setStartDate(date);
    };
    return (
        <DatePicker
            selected={startDate}
            onSelect={handleDateSelect}
            onChange={(handleDateChange)} 
            showMonthYearPicker
            dateFormat="MM/yyyy"
        />
    );
};


export default FilterDate;
