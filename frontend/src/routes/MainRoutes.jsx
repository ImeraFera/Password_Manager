import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Backup from '../pages/Backup';
import AmISafe from '../pages/AmISafe';
import Logs from '../pages/Logs';
import PasswordCase from '../pages/PasswordCase';
import PasswordGenerator from '../pages/PasswordGenerator';
import Profile from '../pages/Profile';

import Starting from '../pages/Starting';

function MainRoutes() {
    return (
        <>
            <Routes>
                <Route
                    path='/home'
                    element={<Home />}
                />
                <Route
                    path='/backup'
                    element={<Backup />}
                />
                <Route
                    path='/logs'
                    element={<Logs />}
                />
                <Route
                    path='/profile'
                    element={<Profile />}
                />
                <Route
                    path='/password-generator'
                    element={<PasswordGenerator />}
                />
                <Route
                    path='/password-case'
                    element={<PasswordCase />}
                />

                <Route
                    path='/password-case/:id'
                    element={<PasswordCase />}
                />
                <Route
                    path='/am-i-safe'
                    element={<AmISafe />}
                />
                <Route
                    path='/'
                    element={<Starting />}
                />
            </Routes>
        </>
    );
}

export default MainRoutes;
