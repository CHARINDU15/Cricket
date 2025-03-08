const Player = require('../models/playerModel');

// Get all players
exports.getAllPlayers = async (req, res) => {
    try {
        const players = await Player.find();
        res.status(200).json(players);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving players', error });
    }
};

// Create a new player
exports.createPlayer = async (req, res) => {
    const newPlayer = new Player(req.body);
    try {
        const savedPlayer = await newPlayer.save();
        res.status(201).json(savedPlayer);
    } catch (error) {
        res.status(400).json({ message: 'Error creating player', error });
    }
};

// Update a player
exports.updatePlayer = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedPlayer = await Player.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedPlayer) {
            return res.status(404).json({ message: 'Player not found' });
        }
        res.status(200).json(updatedPlayer);
    } catch (error) {
        res.status(400).json({ message: 'Error updating player', error });
    }
};

// Delete a player
exports.deletePlayer = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedPlayer = await Player.findByIdAndDelete(id);
        if (!deletedPlayer) {
            return res.status(404).json({ message: 'Player not found' });
        }
        res.status(200).json({ message: 'Player deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting player', error });
    }
};

// Get player by ID
exports.getPlayerById = async (req, res) => {
    const { id } = req.params;
    try {
        const player = await Player.findById(id);
        if (!player) {
            return res.status(404).json({ message: 'Player not found' });
        }
        res.status(200).json(player);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving player', error });
    }
};