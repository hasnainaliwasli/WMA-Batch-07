import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home'


export default function Frontend() {
    return (
        <Routes>
            <Route element={<Home />} />
        </Routes>
    )
}
