import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = () => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        // You can return a loading spinner or placeholder here
        return <div>Loading...</div>;
    }

    if (!user) {
        // Redirect to login page with the original location in state
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
