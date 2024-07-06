import './App.scss';
import './scss/_bootstrap.scss'
import Header from '../src/components/Header/header'
import Footer from '../src/components/Footer/footer'

// Now use bootstrap classes

function App() {
  return (
    <>
    
    <Header/>

    <main className='d-flex align-items-center'>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className='mb-0 text-center'>Assignment No 01</h1>
          </div>
        </div>
      </div>

    </main>

    <Footer/>
    
    
    </>
  );
}

export default App;
