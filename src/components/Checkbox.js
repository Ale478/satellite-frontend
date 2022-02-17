import React from "react";



function Checkbox(props) {

    const {setFilterBySuccess} = props;

    const handleChange = event => {
        setFilterBySuccess(event.target.checked);
    };
    
    return (
        <div className="Search">
            <input
                type="checkbox"
                placeholder="success"
                onChange={handleChange}
            />
        </div>
    );
}

export default Checkbox;