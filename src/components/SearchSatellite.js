import React from "react";


function Search(props) {
    const {searchTerm, setSearchTerm} = props;

    const handleChange = event => {
        const searchval = event
                             .target
                             .value;
            setSearchTerm(searchval);
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