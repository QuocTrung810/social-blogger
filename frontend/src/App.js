import { useContext } from 'react';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';

import Main from './components/layout/Main';
import Login from './views/Login';
import Register from './views/Register';
import NotFound from './views/NotFound';
import Home from './components/layout/MainLayout/Home';
import Blog from './components/layout/MainLayout/Blog';
import Podcast from './components/layout/MainLayout/Podcast';
import About from './components/layout/MainLayout/About';

import { AppContext } from './context/AppContext';
import ProtectRoute from './routes/ProtectRoute';

function App() {
	const auth = useContext(AppContext);
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Main />}
				>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path='/blog'
						element={<Blog />}
					/>
					<Route
						path='/podcast'
						element={<Podcast />}
					/>
					<Route
						path='/about'
						element={
							<ProtectRoute>
								<About />
							</ProtectRoute>
						}
					/>
				</Route>
				<Route
					path='/login'
					element={
						auth.isAuthenticated ? (
							<Navigate to='/about' />
						) : (
							<Login />
						)
					}
				/>
				<Route
					path='/register'
					element={<Register />}
				/>
				<Route
					path='*'
					element={<NotFound />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
