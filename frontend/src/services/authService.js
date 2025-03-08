import axios from 'axios';

const API_URL = '/api/auth/';

// Signup user
const signup = async (userData) => {
    const response = await axios.post(`${API_URL}signup`, userData);
    return response.data;
};

// Login user
const login = async (userData) => {
    const response = await axios.post(`${API_URL}login`, userData);
    return response.data;
};

// Logout user
const logout = () => {
    localStorage.removeItem('user');
};

// Get current user
const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

const authService = {
    signup,
    login,
    logout,
    getCurrentUser,
};

export default authService;