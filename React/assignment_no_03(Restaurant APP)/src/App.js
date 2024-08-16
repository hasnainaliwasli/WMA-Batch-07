import './App.scss';
import ScreenLoading from './components/ScreenLoading';
import { useAuthContext } from './context/AuthContext';
import MainRoute from './pages/MainRoutes';
import "bootstrap/dist/js/bootstrap.bundle";

function App() {

  const { isAppLoading } = useAuthContext()
  return (
    <>
      {!isAppLoading ? <MainRoute /> : <ScreenLoading />}
    </>
  );
}

export default App;
