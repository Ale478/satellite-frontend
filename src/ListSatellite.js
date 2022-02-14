import React, { Component } from 'react';



// Stateless component that will return the list with the data.

const List = (props) => (
    <ul>
        {
            props.item.map((item, i) => {
                return <li key={i}>{item}</li>
            })
        }
    </ul>
)
// Quiero cambiar esto a un hook porque me perturba trabajar con clases gg
class Home extends Component {
    constructor() {
        super();
        this.state = {
            done: false,
            items: []
        };
    }

    // Make the call to the API

    componentDidMount() {
    fetch('https://api.spacexdata.com/v5/launches/')
    .then(result=>result.json())
    .then(items=>this.setState({
        done: true,
        items
    }))
     .catch(() => {
        this.setState({ 
            done: true,
            success: false
        })
    })

   
    }

    // Prevents the user from seeing a blank screen until the API returns values

    render() {
        if(this.state.done){
            return( 
                <div>
                    {
                        this.state.done && this.state.success ? (
                            <List items={this.state.items} />
                        ) : (
                            <p>Unable to recover server data</p>
                        )
                    }
                </div>
            )
        } else {
            return (<p>Loading content...</p>)
        }
        
    }
}
export default Home
      