import React, {useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {logout} from '../services/auth';
import {AuthContext} from "../context/AuthContext";

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const {user, setUser} = useContext(AuthContext);

    const handleLogout = async () => {
        await logout();
        setUser(null);
        navigate('/login');
    };

    return (
        <nav>
            <Link to="/">Home</Link> |{' '}
            {user ? (
                <>
                    <Link to="/protected">Protected</Link> |{' '}
                    {user.role === 'ADMIN' && (
                        <>
                            <Link to="/admin">Admin</Link> |{' '}
                        </>
                    )}
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <Link to="/login">Login</Link>
            )}
        </nav>
    );
};

export default Navbar;
