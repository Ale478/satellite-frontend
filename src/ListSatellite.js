import * as React from 'react';
import { useState, useEffect } from 'react';
//import { fetchRequest, fetchHandlerError } from '../utils/fetchHandler';



// Stateless component that will return the list with the data.

const List = (props) => (
    <ul>
        {
            props.items.map((item, i) => {
                return <li key={i}>{item.name}</li>
            })
        }
    </ul>
)

function ListSatellite() {

    const [done, setDone] = useState(0);
    const [items, setItems] = useState([]);
    const [success, setSucces] = useState(0);

    // Make the call to the API

    useEffect(() => {
        fetch('https://api.spacexdata.com/v5/launches/')
        .then(result=>result.json())
        .then(itemsResponse=>{setItems(itemsResponse); console.log(itemsResponse); setDone(true); setSucces(true);})
        
        .catch(() => {
            setDone(true);
            setSucces(false);
        })
    }, []);
    
    // Prevents the user from seeing a blank screen until the API returns values

    if(done){
        return( 
            <div>
                {
                    success ? (
                        <List items={items} />
                    ) : ( <p>Unable to recover server data</p>
                        )
                }
            </div>
        );
    } else {
        return (<p>Loading content...</p>);
    }
    
}


export default ListSatellite;
      