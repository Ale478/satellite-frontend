import React from "react";
import { useState, useEffect } from 'react';



function Search(props) {
    const {saveList, setShowingList} = props;
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };
    useEffect(() => {
        const results = saveList.filter(satellite => 
            satellite.name.toLowerCase().includes(searchTerm)
        );
        setShowingList(results)
    }, [searchTerm, saveList, setShowingList]);

    return (
        <div className="Search">
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
            />
        </div>
    );
}

export default Search;