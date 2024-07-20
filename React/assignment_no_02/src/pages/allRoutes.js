import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Todo from './Todos'
import Auth from './auth'


// import Login from './auth/login'
// import Register from './auth/register'
// import ForgetPass from './auth/forgetPass'

export default function Index() {
    return (
        <>
            <Routes>
                <Route path='todo/*' element={<Todo />} />
                <Route path='/*' element={<Auth />} />
                {/* <Route exact path='/' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/forgetPass' element={<ForgetPass/>} /> */}
            </Routes>
        </>
    )
}