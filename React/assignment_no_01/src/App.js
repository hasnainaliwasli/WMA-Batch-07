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

        <Register />
        <Login/>
        <ForgetPass/>


      </main>

      <Footer />


    </>
  );
}

export default App;
