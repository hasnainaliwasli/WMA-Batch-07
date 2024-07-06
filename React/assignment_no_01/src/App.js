import './App.scss';
import './scss/_bootstrap.scss'
import Header from '../src/components/Header/header'
import Footer from '../src/components/Footer/footer'
import Register from '../src/pages/auth/register'

// Now use bootstrap classes

function App() {
  return (
    <>
    
    <Header/>

    <main>

              <Register/>


    </main>

    <Footer/>
    
    
    </>
  );
}

export default App;
