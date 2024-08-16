import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './login'
import Register from './register'
import ForgotPassword from './forgetPass'

export default function Auth() {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='forgetPass' element={<ForgotPassword />} />
            <Route path='*' element={<h1>No Page, Auth Page Not Found, 404 Error</h1>} />
        </Routes>
    )
}