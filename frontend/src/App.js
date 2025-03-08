import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import { AuthProvider } from './context/AuthContext';
import './styles/tailwind.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col">
          <header className="bg-blue-800 text-white p-6 shadow-lg">
            <h1 className="text-4xl font-extrabold text-center">Fantasy Cricket League</h1>
          </header>
          <main className="flex-grow container mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/admin" component={AdminPage} />
            </Switch>
          </main>
          <footer className="bg-blue-800 text-white p-6 text-center mt-6">
            <p>&copy; 2025 Fantasy Cricket League. All rights reserved.</p>
          </footer>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;