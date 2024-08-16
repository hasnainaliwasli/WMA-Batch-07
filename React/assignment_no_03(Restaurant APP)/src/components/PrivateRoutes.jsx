import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

export default function PrivateRoute({ Component }) {

    const { isAuthenticated } = useAuthContext()
    if (!isAuthenticated) return <Navigate to="/auth/login" />
    return <Component />
}
