import { createContext, useEffect, useState } from 'react';
import api from '../api/customAxios';

export const AppContext = createContext();

export function AppProvider({ children }) {
	const [isAuthorized, setIsAuthorized] = useState(null);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const getPosts = async () => {
			try {
				const response = await api.get('/posts');
				const data = response.data;
				setPosts(data.data);
			} catch (err) {
				console.log(err);
			}
		};

		const checkAuth = async () => {
			try {
				const { data } = await api.get('/users/user-profile');
				setIsAuthorized(data);
			} catch (err) {
				if (err.response?.status === 401) {
					setIsAuthorized(null);
				}
			}
		};
		checkAuth();
		getPosts();
	}, []);

	return (
		<>
			<AppContext.Provider
				value={{ isAuthorized, setIsAuthorized, posts }}
			>
				{children}
			</AppContext.Provider>
		</>
	);
}
