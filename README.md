# Spirit11 Fantasy Cricket League

Welcome to the Spirit11 Fantasy Cricket League project! This application allows cricket fans to engage with the Inter-University Cricket Tournament by creating their own fantasy teams, analyzing player statistics, and competing for the top spot on the leaderboard.

## Project Overview

The Spirit11 project consists of a backend and a frontend, designed to provide a seamless experience for both administrators and users. The key features include:

- **Admin Panel**: Manage players, their statistics, and oversee the tournament.
- **User Engagement**: Users can draft players, manage budgets, and receive insights from the AI-powered Spiriter Chatbot.
- **Reports and Analytics**: Generate various reports and visualizations to analyze player and team performance.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MySQL

## Features

### Admin Panel
- View and manage players and their statistics.
- Generate tournament summaries and performance reports.
- Admin-only authentication for secure access.

### User Features
- Create and manage fantasy teams using real university players.
- Compare teams and receive recommendations based on player performance.

## Getting Started

### Prerequisites
- Node.js
- MySQL
- npm

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd spirit11-fantasy-cricket-league
   ```

2. Set up the backend:
   - Navigate to the `backend` directory and install dependencies:
     ```
     cd backend
     npm install
     ```
   - Create a `.env` file and configure your database connection.

3. Set up the frontend:
   - Navigate to the `frontend` directory and install dependencies:
     ```
     cd frontend
     npm install
     ```

4. Initialize the database:
   - Run the SQL schema located in `database/schema.sql` to set up the database structure.

### Running the Application

- Start the backend server:
  ```
  cd backend
  node server.js
  ```

- Start the frontend application:
  ```
  cd frontend
  npm start
  ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to the contributors and the community for their support in making this project a reality. 

Happy coding and may the best team win!