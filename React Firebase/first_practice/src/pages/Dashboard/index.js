import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home.jsx';

export default function Dashboard() {
    return (
        <Routes>
            <Route index element={<Home />} />
        </Routes>
    )
}
