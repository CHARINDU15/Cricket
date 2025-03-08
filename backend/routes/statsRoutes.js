const express = require('express');
const router = express.Router();
const statsController = require('../controllers/statsController');

// Route to get overall tournament statistics
router.get('/tournament-summary', statsController.getTournamentSummary);

// Route to get detailed statistics for a specific player
router.get('/player/:id', statsController.getPlayerStats);

// Route to get player performance reports
router.get('/player-performance', statsController.getPlayerPerformanceReports);

// Route to get team performance reports
router.get('/team-performance', statsController.getTeamPerformanceReports);

module.exports = router;