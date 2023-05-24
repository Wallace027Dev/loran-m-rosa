import { Routes, Route } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Forgot from '../pages/Forgot';
import User from '../pages/User';
import Users from '../pages/Users';
import NewUser from '../pages/NewUser';
import EditUser from '../pages/EditUser';
import Home from '../pages/Home';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/welcome" element={<Welcome />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot" element={<Forgot />} />

      <Route path="/user" element={<User />} />
      <Route path="/user/new" element={<NewUser />} />
      <Route path="/user/edit/:id" element={<EditUser />} />

      <Route path="/users" element={<Users />} />

      <Route
        path="/"
        element={
          /* <ProtectedRoute> */
          <Home />
          /* </ProtectedRoute> */
        }
      />
    </Routes>
  );
}

export default AppRoutes;
