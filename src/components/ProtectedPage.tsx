import React, {useEffect, useState} from 'react';
import {getUserInfo} from '../services/auth';
import {User} from '../types/User';
import {useNavigate} from 'react-router-dom';

const ProtectedPage: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        getUserInfo()
            .then((data) => setUser(data))
            .catch(() => {
                navigate('/login');
            });
    }, [navigate]);

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>Protected Page</h2>
            <p>Username: {user.username}</p>
            <p>Role: {user.role}</p>
        </div>
    );
};

export default ProtectedPage;
