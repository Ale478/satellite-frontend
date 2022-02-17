import * as React from 'react';


// Stateless component that will return the list with the data.

const List = (props) => (
    <ul>
        {
            props.showingList.map((showingList, i) => {
                return <li key={i}>{showingList.name} <br/> {(new Date(showingList.date_local)).toDateString()}</li>
            })
        }
    </ul>
)

function ListSatellite(props) {
 
    const{showingList, done, success} = props;    
    
    // Prevents the user from seeingn a blank screen until the API returns values

    if(done){
        return( 
            <div>
                {
                    success ? (
                        <List showingList={showingList} />
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