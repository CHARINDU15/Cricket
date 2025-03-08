import React, { useEffect, useState } from 'react';
import { getPlayers } from '../services/playerService';

const PlayersView = () => {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const data = await getPlayers();
                setPlayers(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPlayers();
    }, []);

    if (loading) {
        return <div>Loading players...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="players-view">
            <h1 className="text-2xl font-bold mb-4">Players List</h1>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="border-b-2 border-gray-300 px-4 py-2">Name</th>
                        <th className="border-b-2 border-gray-300 px-4 py-2">Team</th>
                        <th className="border-b-2 border-gray-300 px-4 py-2">Points</th>
                        <th className="border-b-2 border-gray-300 px-4 py-2">Value</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map(player => (
                        <tr key={player.id}>
                            <td className="border-b border-gray-300 px-4 py-2">{player.name}</td>
                            <td className="border-b border-gray-300 px-4 py-2">{player.team}</td>
                            <td className="border-b border-gray-300 px-4 py-2">{player.points}</td>
                            <td className="border-b border-gray-300 px-4 py-2">{player.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PlayersView;