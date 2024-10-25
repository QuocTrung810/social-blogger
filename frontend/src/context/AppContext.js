import { createContext, useEffect, useState } from 'react';
import api from '../api/customAxios';

export const AppContext = createContext();

export function AppProvider({ children }) {
	const [isAuthorized, setIsAuthorized] = useState();

	useEffect(() => {
		checkAuth();
	}, []);

	const checkAuth = async () => {
		try {
			const { data } = await api.get('/users/user-profile');
			setIsAuthorized(data);
		} catch (err) {
			if (err.status === 401) {
				console.log(err);
				setIsAuthorized(null);
			}
		}
	};

	return (
		<>
			<AppContext.Provider value={{ isAuthorized, setIsAuthorized }}>
				{children}
			</AppContext.Provider>
		</>
	);
}
