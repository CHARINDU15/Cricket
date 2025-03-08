const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Player = sequelize.define('Player', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  university: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  totalRuns: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  inningsPlayed: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  totalWickets: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  ballsBowled: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  totalRunsConceded: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  battingStrikeRate: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  bowlingStrikeRate: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  economyRate: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  points: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  value: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
});

module.exports = Player;