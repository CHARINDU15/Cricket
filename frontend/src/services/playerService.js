import axios from 'axios';

const API_URL = '/api/players';

// Get all players
export const getAllPlayers = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching players: ' + error.message);
    }
};

// Get player by ID
export const getPlayerById = async (playerId) => {
    try {
        const response = await axios.get(`${API_URL}/${playerId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching player: ' + error.message);
    }
};

// Create a new player
export const createPlayer = async (playerData) => {
    try {
        const response = await axios.post(API_URL, playerData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating player: ' + error.message);
    }
};

// Update a player
export const updatePlayer = async (playerId, playerData) => {
    try {
        const response = await axios.put(`${API_URL}/${playerId}`, playerData);
        return response.data;
    } catch (error) {
        throw new Error('Error updating player: ' + error.message);
    }
};

// Delete a player
export const deletePlayer = async (playerId) => {
    try {
        const response = await axios.delete(`${API_URL}/${playerId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error deleting player: ' + error.message);
    }
};

export const getTournamentSummary = async () => {
    try {
        const response = await axios.get('/api/tournament-summary');
        return response.data;
    } catch (error) {
        throw new Error('Error fetching tournament summary: ' + error.message);
    }
};