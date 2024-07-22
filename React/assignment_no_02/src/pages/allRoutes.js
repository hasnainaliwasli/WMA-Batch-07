import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Todo from './Todos'
import Auth from './auth'

export default function Index() {
    return (
        <>
            <Routes>
                <Route path='todo/*' element={<Todo />} />
                <Route path='/*' element={<Auth />} />
            </Routes>
        </>
    )
}