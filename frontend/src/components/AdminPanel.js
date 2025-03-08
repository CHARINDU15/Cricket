import React, { useEffect, useState } from 'react';
import {  getTournamentSummary,getAllPlayers } from '../services/playerService';

const AdminPanel = () => {
    const [players, setPlayers] = useState([]);
    const [tournamentSummary, setTournamentSummary] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const playersData = await getPlayers();
            const summaryData = await getTournamentSummary();
            setPlayers(playersData);
            setTournamentSummary(summaryData);
        };

        fetchData();
    }, []);

    return (
        <div className="admin-panel">
            <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
            <div className="players-view mb-6">
                <h2 className="text-xl font-semibold">Players</h2>
                <ul>
                    {players.map(player => (
                        <li key={player.id} className="border-b py-2">
                            {player.name} - Points: {player.points} - Value: {player.value}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="tournament-summary">
                <h2 className="text-xl font-semibold">Tournament Summary</h2>
                <p>Overall Runs: {tournamentSummary.overallRuns}</p>
                <p>Overall Wickets: {tournamentSummary.overallWickets}</p>
                <p>Highest Run Scorer: {tournamentSummary.highestRunScorer}</p>
                <p>Highest Wicket Taker: {tournamentSummary.highestWicketTaker}</p>
            </div>
        </div>
    );
};

export default AdminPanel;