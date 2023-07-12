import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';

import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Forgot from '../pages/Forgot';

import Users from '../pages/Users';
import NewUser from '../pages/NewUser';
import EditUser from '../pages/EditUser';

import Dashboard from '../pages/Dashboard';
import UserAds from '../pages/UserAds';

import Adverts from '../pages/Adverts';
import NewAdverts from '../pages/NewAdverts';
import EditAdvert from '../pages/EditAdvert';

import PrivateRoutes from '../components/PrivateRoutes';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot" element={<Forgot />} />

      <Route
        path="/adverts"
        element={
          <PrivateRoutes>
            <Adverts />
          </PrivateRoutes>
        }
      />
      <Route
        path="/adverts/:id"
        element={
          <PrivateRoutes>
            <UserAds />
          </PrivateRoutes>
        }
      />
      <Route
        path="/advert/edit/:id"
        element={
          <PrivateRoutes>
            <EditAdvert />
          </PrivateRoutes>
        }
      />
      <Route
        path="/advert/new/:id"
        element={
          <PrivateRoutes>
            <NewAdverts />
          </PrivateRoutes>
        }
      />
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
        path="/dashboard/:id"
        element={
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
