import { Routes, Route } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Forgot from '../pages/Forgot';
import Categories from '../pages/Categories';
import NewCategory from '../pages/NewCategory';
import Users from '../pages/Users';
import NewUser from '../pages/NewUser';
import EditUser from '../pages/EditUser';
import Home from '../pages/Home';
import { Payment } from '../pages/Payment';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/welcome" element={<Welcome />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot" element={<Forgot />} />

      <Route path="/categories" element={<Categories />} />
      <Route path="/categorie/new" element={<NewCategory />} />
      <Route path="/categorie/edit/:id" element={<EditUser />} />

      <Route path="/users" element={<Users />} />
      <Route path="/user/new" element={<NewUser />} />
      <Route path="/user/edit/:id" element={<EditUser />} />
      <Route path="/user/id/payment" element={<Payment />} />


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
