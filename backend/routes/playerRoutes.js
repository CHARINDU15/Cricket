const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

// Route to get all players
router.get('/', playerController.getAllPlayers);

// Route to get a player by ID
router.get('/:id', playerController.getPlayerById);

// Route to create a new player
router.post('/', playerController.createPlayer);

// Route to update a player
router.put('/:id', playerController.updatePlayer);

// Route to delete a player
router.delete('/:id', playerController.deletePlayer);

module.exports = router;