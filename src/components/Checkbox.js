import React from "react";
//import Checkbox from '@mui/material/Checkbox';



function Checkbox(props) {

    const {setFilterBySuccess, filterBySuccess} = props;

    const handleChange = event => {
        setFilterBySuccess(event.target.checked);
    };
    
    return (
        <Checkbox checked={filterBySuccess} onChange={handleChange} />
    );
}

export default Checkbox;