import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactUs from './ContactUs'
import Layout from './Layout';
import Header from './Header';
import Footer from './Footer';
import Cart from './Cart';
import User from './User';

export default function Frontend() {
    return (


        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Layout />} />
                    <Route path='contact-us' element={<ContactUs />} />
                    <Route path='cart' element={<Cart />} />
                    <Route path='user' element={<User />} />
                    <Route path='*' element={<h1>No Page, Auth Page Not Found, 404 Error</h1>} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}
