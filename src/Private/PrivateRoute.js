import { CircularProgress } from '@mui/material';
import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import UseAuth from '../pages/Hooks/UseAuth';

const PrivateRoute = ({ children, ...rest }) => {
    
    const { user, isLoading } = UseAuth();

    let location = useLocation();

    if (isLoading) { return <CircularProgress /> }
    if (!user?.email) {
        return <Navigate to="/signIn" state={{ from: location }} />;
    }
    return children;
};
export default PrivateRoute;