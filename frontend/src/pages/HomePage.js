import React from 'react';

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome to Spirit11 Fantasy Cricket League!</h1>
            <p className="text-lg mb-8">Build your dream team, analyze player stats, and compete for the top spot!</p>
            <a href="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Get Started
            </a>
        </div>
    );
};

export default HomePage;