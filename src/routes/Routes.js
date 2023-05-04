import { Routes, Route } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Forgot from '../pages/Forgot';
import Home from '../pages/Home';

function AppRoutes() {
	return (
		<Routes>
			<Route path='/' element={ <Welcome /> } />
			<Route path='/login' element={ <Login /> } />
			<Route path='/signup' element={ <Signup /> } />
			<Route path='/forgot' element={ <Forgot /> } />
			<Route path='/home' element={ <Home /> } />
		</Routes>
	)
}

export default AppRoutes;