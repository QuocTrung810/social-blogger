import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
	const auth = useContext(AppContext);
	const navigate = useNavigate();
	const handleLogin = () => {
		auth.setIsAuthenticated(true);
		localStorage.setItem('auth', true);
		navigate('/');
	};

	return (
		<>
			<button
				className='p-2 border rounded active:bg-slate-200'
				onClick={handleLogin}
			>
				Login
			</button>
		</>
	);
}
