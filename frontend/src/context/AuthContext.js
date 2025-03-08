import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { login, signup } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const history = useHistory();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
        }
        setLoading(false);
    }, []);

    const login = async (credentials) => {
        try {
            const userData = await loginUser(credentials);
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
            history.push('/'); // Redirect to home after login
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const signup = async (userData) => {
        try {
            const newUser = await signupUser(userData);
            setUser(newUser);
            localStorage.setItem('user', JSON.stringify(newUser));
            history.push('/'); // Redirect to home after signup
        } catch (error) {
            console.error('Signup failed:', error);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        history.push('/login'); // Redirect to login after logout
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};