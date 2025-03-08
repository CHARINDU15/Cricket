import axios from 'axios';

const API_URL = '/api/stats';

// Function to get player statistics
export const getPlayerStats = async (playerId) => {
    try {
        const response = await axios.get(`${API_URL}/players/${playerId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching player statistics');
    }
};

// Function to get tournament summary statistics
export const getTournamentSummary = async () => {
    try {
        const response = await axios.get(`${API_URL}/summary`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching tournament summary');
    }
};

// Function to get player performance reports
export const getPlayerPerformanceReport = async (playerId) => {
    try {
        const response = await axios.get(`${API_URL}/performance/${playerId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching player performance report');
    }
};