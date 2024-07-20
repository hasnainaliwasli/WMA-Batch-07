import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import './scss/_bootstrap.scss'
import Header from '../src/components/Header/header'
import Footer from '../src/components/Footer/footer'
// import Register from '../src/pages/auth/register'
// import Login from './pages/auth/login';
// import ForgetPass from './pages/auth/forgetPass';
import AllRoutes from './pages/allRoutes';


// Now use bootstrap classes

function App() {
  return (
    <>
      <AllRoutes />
    </>
  );
}

export default App;
