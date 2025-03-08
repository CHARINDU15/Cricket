const Player = require('../models/playerModel');
const { calculatePoints } = require('../utils/calculatePoints');

// Get all player statistics
exports.getAllPlayerStats = async (req, res) => {
    try {
        const players = await Player.find();
        const playerStats = players.map(player => ({
            name: player.name,
            runs: player.totalRuns,
            wickets: player.totalWickets,
            points: calculatePoints(player)
        }));
        res.status(200).json(playerStats);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving player statistics', error });
    }
};

// Get detailed statistics for a specific player
exports.getPlayerStats = async (req, res) => {
    const { playerId } = req.params;
    try {
        const player = await Player.findById(playerId);
        if (!player) {
            return res.status(404).json({ message: 'Player not found' });
        }
        const stats = {
            name: player.name,
            totalRuns: player.totalRuns,
            totalWickets: player.totalWickets,
            points: calculatePoints(player)
        };
        res.status(200).json(stats);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving player statistics', error });
    }
};

// Get tournament summary
exports.getTournamentSummary = async (req, res) => {
    try {
      const players = await Player.find();
      const overallRuns = players.reduce((sum, player) => sum + player.runs, 0);
      const overallWickets = players.reduce((sum, player) => sum + player.wickets, 0);
      const highestRunScorer = players.reduce((max, player) => (player.runs > max.runs ? player : max), players[0]);
      const highestWicketTaker = players.reduce((max, player) => (player.wickets > max.wickets ? player : max), players[0]);
  
      res.status(200).json({
        overallRuns,
        overallWickets,
        highestRunScorer,
        highestWicketTaker
      });
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving tournament summary', error });
    }
  };

  // Get player performance reports
exports.getPlayerPerformanceReports = async (req, res) => {
    try {
      // Implement logic to get player performance reports
      res.status(200).json({ message: 'Player performance reports' });
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving player performance reports', error });
    }
  };
  
  // Get team performance reports
  exports.getTeamPerformanceReports = async (req, res) => {
    try {
      // Implement logic to get team performance reports
      res.status(200).json({ message: 'Team performance reports' });
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving team performance reports', error });
    }
  };