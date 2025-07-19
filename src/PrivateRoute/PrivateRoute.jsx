import React, { use } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Share/Loading/Loading'

const PrivateRoute = ({ children }) => {

    const location = useLocation()
    const { user, loading } = use(AuthContext)

    if (loading) return <Loading></Loading>

    if (user && user?.email) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;