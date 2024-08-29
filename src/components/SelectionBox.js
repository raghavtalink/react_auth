import React from 'react';

function SelectionBox({ onSelect }) {
    return (
        <div className="max-w-lg w-full bg-white p-10 border border-gray-300 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-6">Welcome</h2>
            <p className="mb-6 text-gray-700">Please select an option:</p>
            <div className="flex justify-around">
                <button 
                    onClick={() => onSelect('login')}
                    className="bg-black text-white py-3 px-6 rounded-lg hover:bg-slate-900 transition duration-200"
                >
                    Login
                </button>
                <button 
                    onClick={() => onSelect('signup')}
                    className="bg-gray-700 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition duration-200"
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
}

export default SelectionBox;
