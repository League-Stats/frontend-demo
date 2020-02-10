import React from 'react';

const Rank = ({ rank }) => {
    return (
        <div>
                <h1>{rank.queueType}</h1>
                <h1>{rank.tier} {rank.rank} - {rank.leaguePoints} LP</h1>
                <h1>{rank.wins} W / {rank.losses} L</h1>
        </div>
    )
}

export default Rank;