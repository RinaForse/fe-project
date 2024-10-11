import React, {useEffect, useState} from 'react';
import api from '../services/api';

const HomePage: React.FC = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        api.get('/').then((response) => {
            setMessage(response.data);
        });
    }, []);

    return <h1>{message}</h1>;
};

export default HomePage;
