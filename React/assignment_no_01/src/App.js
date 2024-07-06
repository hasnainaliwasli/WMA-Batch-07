import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.scss';
import './scss/_bootstrap.scss'
import Header from '../src/components/Header/header'
import Footer from '../src/components/Footer/footer'
import Register from '../src/pages/auth/register'
import Login from './pages/auth/login';
import ForgetPass from './pages/auth/forgetPass';

// Now use bootstrap classes

function App() {
  return (
    <>

      <Header />

      <main>
        <Router>
          <Routes>

            <Route exact path='/' Component={Login} />
            <Route path='/register' Component={Register} />
            <Route path='/forgetPass' Component={ForgetPass} />
            
          </Routes>

        </Router>
      </main>

      <Footer />


    </>
  );
}

export default App;
