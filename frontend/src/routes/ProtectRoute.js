import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Navigate } from 'react-router-dom';

export default function ProtectRoute({ children }) {
	const auth = useContext(AppContext);
	return auth.isAuthenticated ? children : <Navigate to='/login' />;
}
