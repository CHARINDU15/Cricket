import React, { useEffect, useState } from 'react';
import { getTournamentSummary } from '../services/statsService';

const TournamentSummary = () => {
    const [summary, setSummary] = useState({
        totalRuns: 0,
        totalWickets: 0,
        highestRunScorer: '',
        highestWicketTaker: ''
    });

    useEffect(() => {
        const fetchSummary = async () => {
            const data = await getTournamentSummary();
            setSummary(data);
        };

        fetchSummary();
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Tournament Summary</h2>
            <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold">Overall Statistics</h3>
                <p>Total Runs: {summary.totalRuns}</p>
                <p>Total Wickets: {summary.totalWickets}</p>
                <p>Highest Run Scorer: {summary.highestRunScorer}</p>
                <p>Highest Wicket Taker: {summary.highestWicketTaker}</p>
            </div>
        </div>
    );
};

export default TournamentSummary;