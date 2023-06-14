import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Forgot from '../pages/Forgot';
import Users from '../pages/Users';
import NewUser from '../pages/NewUser';
import EditUser from '../pages/EditUser';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Payment from '../pages/Payment';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot" element={<Forgot />} />

      <Route path="/users" element={<Users />} />
      <Route path="/user/new" element={<NewUser />} />
      <Route path="/user/edit/:id" element={<EditUser />} />

      <Route path="/:id/payment" element={<Payment />} />
      <Route
        path="/:id/dashboard"
        element={
          /* <ProtectedRoute> */
          <Dashboard />
          /* </ProtectedRoute> */
        }
      />
    </Routes>
  );
}

export default AppRoutes;
