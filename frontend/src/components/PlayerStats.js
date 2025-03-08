import React from 'react';

const PlayerStats = ({ player }) => {
    if (!player) {
        return <div>No player selected</div>;
    }

    return (
        <div className="p-4 border rounded shadow">
            <h2 className="text-xl font-bold">{player.name}</h2>
            <p><strong>Runs Scored:</strong> {player.runs}</p>
            <p><strong>Wickets Taken:</strong> {player.wickets}</p>
            <p><strong>Batting Average:</strong> {player.battingAverage}</p>
            <p><strong>Bowling Average:</strong> {player.bowlingAverage}</p>
            <p><strong>Player Points:</strong> {player.points}</p>
            <p><strong>Player Value:</strong> ₹{player.value}</p>
        </div>
    );
};

export default PlayerStats;