import React from 'react';
import { useNavigate } from 'react-router';

const Error = () => {
    const navigate = useNavigate()

    return (
        <div className="h-screen flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-7xl mb-4 text-gray-700">404</h1>
            <p className="mb-6 text-gray-600 dark:text-gray-400">Page not found.</p>
            <button
                onClick={() => navigate("/")}
                className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
                Go Home
            </button>
        </div>
    );
};
export default Error;