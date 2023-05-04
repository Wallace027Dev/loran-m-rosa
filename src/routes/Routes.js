import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Forgot from '../pages/Forgot';

function AppRoutes() {
	return (
		<Routes>
			<Route path='/' element={ <Home /> } />
			<Route path='/login' element={ <Login /> } />
			<Route path='/signup' element={ <Signup /> } />
			<Route path='/forgot' element={ <Forgot /> } />
		</Routes>
	)
}

export default AppRoutes;