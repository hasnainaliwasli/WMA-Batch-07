import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Register from './register'
import Login from './login';


export default function Auth() {
    return (
        <Routes>
            <Route path='login' element={<Login />} />
            <Route index path='register' element={<Register />} />
        </Routes>
    )
}
