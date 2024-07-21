import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Todos from './Todos'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import Users from './Users'
import CreateTodo from "./Todos/CreateTodo"

export default function Todo() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='todo' element={<Todos />} />
                    <Route path='users' element={<Users />} />
                    <Route path='todo/CreateTodo' element={<CreateTodo />} />

                    <Route path='*' element={<h1>No Page, Page Not Found, 404 Error</h1>} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}