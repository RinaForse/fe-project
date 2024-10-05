import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {User} from "./types";

const App: React.FC = () => {
    const [user, setUser] = useState<User>();
    const [newUser, setNewUser] = useState<User>();

    useEffect(() => {
        const id = '1';

        axios.get<User>(`http://localhost:3000/api/v1/users/${id}`).then((response) => {
            let user = response.data;

            setUser(user);
        });
    }, []);

    // const createUser = () => {
    //     axios.post<User>('http://localhost:3000/api/v1/users/clinet', {newUser}).then((response) => {
    //         if (response.status === 201) {
    //             console.log('User created');
    //         }
    //     });
    // };
    //
    // const setUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setNewUser({
    //         address: "",
    //         created: new Date(),
    //         email: "",
    //         fullName: "",
    //         id: "",
    //         password: "",
    //         phone: "",
    //         updated: new Date(),
    //         username: "", ...newUser, [e.target.name]: e.target.value});
    // }

    return (
        <div>
            <h1>User:</h1>
            <ul>
                {user && (
                    <li key={user.id}>
                        <p>Username: {user.username}</p>
                        <p>Full Name: {user.fullName}</p>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                        <p>Address: {user.address}</p>
                    </li>
                )}
            </ul>
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<h1>Create User:</h1>*/}
            {/*<input type="text" placeholder="Username" onChange={(e) => setNewUser({...newUser, username: e.target.value})}/>*/}
            {/*<input type="text" placeholder="Full Name" onChange={(e) => setNewUser({...newUser, fullName: e.target.value})}/>*/}
            {/*<input type="email" placeholder="Email" onChange={(e) => setNewUser({...newUser, email: e.target.value})}/>*/}
            {/*<input type="tel" placeholder="Phone" onChange={(e) => setNewUser({...newUser, phone: e.target.value})}/>*/}
            {/*<input type="text" placeholder="Address" onChange={(e) => setNewUser({...newUser, address: e.target.value})}/>*/}
            {/*<input type="password" placeholder="Password" onChange={(e) => setNewUser({...newUser, password: e.target.value})}/>*/}
            {/*<button onClick={createUser}>Create User</button>*/}
        </div>
    );
};

export default App;
