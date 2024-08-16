import { Navigate, Route, Routes } from 'react-router-dom';
import Frontend from './Frontend';
import Auth from './Auth/index';
import { useAuthContext } from '../context/AuthContext';
import PrivateRoute from '../components/PrivateRoutes';

export default function MainRoute() {
    const { isAuthenticated } = useAuthContext()

    console.log("isAuthenticated", isAuthenticated);


    return (
        <Routes>
            <Route path='/*' element={<Navigate to="auth/register" />} />
            <Route path='auth/*' element={!isAuthenticated ? <Auth /> : <Navigate to="/home" />} />
            <Route path='home/*' element={<PrivateRoute Component={Frontend} />} />
        </Routes>
    )
}
