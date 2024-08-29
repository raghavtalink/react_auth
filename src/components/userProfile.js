import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserProfile() {
    const [username, setUsername] = useState('');

    useEffect(() => {
        const fetchUsername = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:3000/api/username', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUsername(response.data.username);
            } catch (error) {
                console.error('Error fetching username', error);
            }
        };

        fetchUsername();
    }, []);

    return (
        <div className="p-4 text-center">
            <h2 className="text-3xl font-bold">Welcome, {username}!</h2>
        </div>
    );
}

export default UserProfile;
