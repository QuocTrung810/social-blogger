import { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
	const [isAuthenticated, setIsAuthenticated] = useState(() => {
		return localStorage.getItem('auth') ?? false;
	});
	return (
		<>
			<AppContext.Provider
				value={{ isAuthenticated, setIsAuthenticated }}
			>
				{children}
			</AppContext.Provider>
		</>
	);
}
