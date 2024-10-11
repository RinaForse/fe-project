import api from './api';
import {User} from '../types/User';

export async function login(username: string, password: string): Promise<void> {
    await api.post('/login', {username, password});
}

export async function logout(): Promise<void> {
    await api.post('/logout');
}

export async function getUserInfo(): Promise<User> {
    const response = await api.get('/protected');
    return response.data;
}

export async function getAllUsers(): Promise<User[]> {
    const response = await api.get('/admin/users');
    return response.data;
}
