import React from "react";
import { useState} from 'react';

// Microsoft > cualquier otra empresa

function Search(props) {
    const {saveList, setShowingList} = props;
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = event => {
        const searchval = event
                             .target
                             .value;
            setSearchTerm(searchval  );
            const searchterm = searchval.toLowerCase();
        const results = saveList.filter(satellite => 
            satellite.name.toLowerCase().includes(searchterm)
        );
        setShowingList(results)
    };
    
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