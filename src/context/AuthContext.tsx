import React, {createContext, useState, useEffect} from 'react';
import {User} from '../types/User';
import {getUserInfo} from '../services/auth';

interface AuthContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    setUser: () => {
    },
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        getUserInfo()
            .then((userData) => setUser(userData))
            .catch(() => {
                setUser(null);
            });
    }, []);

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    );
};
