import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

const Logout = () => {
    const { LogoutUser } = useAuth();

    useEffect(() => {
        LogoutUser();  // Corrected function name
    }, [LogoutUser]);

    return <Navigate to="/Signin" />;
};

export default Logout;