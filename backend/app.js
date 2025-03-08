const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const playerRoutes = require('./routes/playerRoutes');
const statsRoutes = require('./routes/statsRoutes');
const sequelize = require('./config/database'); // Import Sequelize configuration

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Test database connection
sequelize.authenticate()
  .then(() => console.log('MySQL connected'))
  .catch(err => console.error('MySQL connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/players', playerRoutes);
app.use('/api/stats', statsRoutes);

module.exports = app;