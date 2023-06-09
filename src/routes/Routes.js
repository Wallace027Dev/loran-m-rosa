import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Forgot from '../pages/Forgot';
import Categories from '../pages/Categories';
import NewCategory from '../pages/NewCategory';
import EditCategory from '../pages/EditCategory';
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

      <Route path="/categories" element={<Categories />} />
      <Route path="/category/new" element={<NewCategory />} />
      <Route path="/category/edit/:id" element={<EditCategory />} />

      <Route path="/users" element={<Users />} />
      <Route path="/user/new" element={<NewUser />} />
      <Route path="/user/edit/:id" element={<EditUser />} />
      <Route path="/user/id/payment" element={<Payment />} />


      <Route
        path="/dashboard/:id"
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
