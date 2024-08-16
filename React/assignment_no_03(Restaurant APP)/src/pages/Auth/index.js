import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ForgotPass from './ForgotPass'
import Register from './Register'
import Login from './Login'

export default function Auth() {
    return (
        <Routes>
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='forgot-Pass' element={<ForgotPass />} />
            <Route path='*' element={<h1>No Page, Auth Page Not Found, 404 Error</h1>} />
        </Routes>
    )
}
