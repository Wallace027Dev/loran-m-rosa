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
import PrivateRoutes from '../components/PrivateRoutes';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot" element={<Forgot />} />

      <Route
        path="/users"
        element={
          <PrivateRoutes>
            <Users />
          </PrivateRoutes>
        }
      />
      <Route
        path="/user/new"
        element={
          <PrivateRoutes>
            <NewUser />
          </PrivateRoutes>
        }
      />
      <Route
        path="/user/edit/:id"
        element={
          <PrivateRoutes>
            <EditUser />
          </PrivateRoutes>
        }
      />
      <Route
        path="/paymen/:idt"
        element={
          <PrivateRoutes>
            <Payment />
          </PrivateRoutes>
        }
      />
      <Route
        path="/dashboard/:id"
        element={
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        }
        s
      />
    </Routes>
  );
}

export default AppRoutes;
