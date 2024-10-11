import React, {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {getUserInfo, login} from '../services/auth';
import {AuthContext} from "../context/AuthContext";

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const { setUser } = useContext(AuthContext);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login(username, password);
            const userData = await getUserInfo();
            setUser(userData);
            navigate('/');
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Username:{' '}
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Password:{' '}
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Login</button>
                {error && <p style={{color: 'red'}}>{error}</p>}
            </form>
        </div>
    );
};

export default LoginPage;
