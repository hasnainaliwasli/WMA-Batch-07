import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Auth from './Auth/index';

export default function index() {
    return (
        <Routes>
            <Route path='auth/*' element={<Auth />} />
            <Route path='dashboard/*' element={<Dashboard />} />
        </Routes>
    )
}
