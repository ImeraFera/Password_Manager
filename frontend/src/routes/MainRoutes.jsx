import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
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
                    path='/'
                    element={<Starting />}
                />
            </Routes>
        </>
    );
}

export default MainRoutes;
