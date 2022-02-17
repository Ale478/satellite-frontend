import React from "react";



function Checkbox(props) {
    const {saveList, setShowingList} = props;
    const handleChange = event => {
        if(event.target.checked){
            const results = saveList.filter(satellite => satellite.success);
        setShowingList(results);
        }else{
            setShowingList(saveList);
        }
    
        
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