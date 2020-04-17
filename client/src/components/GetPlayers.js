import React from 'react';
import axios from 'axios';

class GetPlayers extends React.Component {
    constructor() {
        super();
        this.state = {
            players: [],
        }
    }

    getUserData = () => {
      axios
        .get(`http://localhost:5000/api/players`)
        .then(results => {
          console.log('Results ', results.data);
          this.setState({players: results.data}); // don't run in render() - creates loop
        })
        .catch(error => console.log('Error: ', error));
    }

//lifecycle. run this when the component mounts for the first time
    componentDidMount() {
        this.getUserData();
    }
    
    render() {
        return (
            <section>
                <header>
                    <div className='App-header'>
                        <h2 className='title'>Women's World Cup</h2>
                        <div className='subtitle'>2019 Player Search Rankings</div>
                    </div>
                </header>
            </section>
        )
    }
}

export default GetPlayers;