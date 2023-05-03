import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Subscribe from '../pages/Subscribe';
import Forgot from '../pages/Forgot';

function AppRoutes() {
	return (
		<Routes>
			<Route path='/' element={ <Home /> } />
			<Route path='/login' element={ <Login /> } />
			<Route path='/subscribe' element={ <Subscribe /> } />
			<Route path='/forgot' element={ <Forgot /> } />
		</Routes>
	)
}

export default AppRoutes;