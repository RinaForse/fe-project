import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import ProtectedPage from './components/ProtectedPage';
import AdminPage from './components/AdminPage';

const App: React.FC = () => {
    return (
        <Router>
            <Navbar/>
            <div style={{padding: '20px'}}>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/protected" element={<ProtectedPage/>}/>
                    <Route path="/admin" element={<AdminPage/>}/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
