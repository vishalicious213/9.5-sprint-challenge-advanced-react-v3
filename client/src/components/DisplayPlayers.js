import React from 'react';

const DisplayPlayers = (props) => {
    return (
        <section className='players'>
            <h4 className='colHeader'>
                <div>Name</div>
                <div>Country</div>
                <div>Searches</div>
            </h4>

            <div className='container'>
                {props.players.map(player => {
                    return (
                        <div className='playerEntry' key={player.id}>
                            <div className='playerName' >{player.name}</div>
                            <div className='playerCountry' >{player.country}</div>
                            <div className='playerSearches' >{player.searches}</div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default DisplayPlayers;