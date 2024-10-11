import React, {useEffect, useState} from 'react';
import {getAllUsers} from '../services/auth';
import {User} from '../types/User';
import {useNavigate} from 'react-router-dom';

const AdminPage: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        getAllUsers()
            .then((data) => setUsers(data))
            .catch(() => {
                setError('Access denied. Admins only.');
                navigate('/login');
            });
    }, [navigate]);

    if (error) {
        return <p style={{color: 'red'}}>{error}</p>;
    }

    return (
        <div>
            <h2>Admin Page</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.username}>
                        {user.username} - {user.role}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPage;
