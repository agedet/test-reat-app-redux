import './App.css';
import { Route, Routes } from 'react-router-dom';
// import HomeScreen from './pages/HomeScreen';
import LoginScreen from './pages/auth/LoginScreen';
import Register from './pages/auth/Register';
import AuthLayout from './components/Auth/Layout';
import HomeScreen from './pages/shop-view/home';
import AdminLayout from './pages/admin-view/layout';
import AdminOrders from './pages/admin-view/orders';
import AdminProducts from './pages/admin-view/products';
import ShopLayout from './pages/shop-view/layout';
import ShopOrders from './pages/shop-view/orders';
import ShopProducts from './pages/shop-view/products';
import ShopCheckout from './pages/shop-view/checkout';
import CheckAuth from './pages/Check-Auth/CheckAuth';
import UpdateProfile from './pages/auth/UpdateProfile';
import ResetScreen from './pages/auth/ResetScreen';
import UnauthPage from './pages/auth/UnauthPage';
import NotFoundPage from './pages/auth/NotFoundPage';

function App() {
  const isAuthenticated = false;
  // const user = null;

  const user = {
    name: 'Aniekan',
    role: 'user',
  }

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* components */}

      <Routes>
        <Route path='/auth' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout />
          </CheckAuth>
        }>
          <Route path='login' element={<LoginScreen />} />      
          <Route path='register' element={<Register />} />
         
        </Route> 
        <Route path='update' element={<UpdateProfile />} />
        <Route path='reset' element={<ResetScreen />} />

        {/* <Route path='/' element={<HomeScreen />} /> */}

        <Route path='/admin' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout />
          </CheckAuth>
        }>
          <Route path='orders' element={<AdminOrders />} />
          <Route path='products' element={<AdminProducts />} />
        </Route>

        <Route path='/shop' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <ShopLayout />
          </CheckAuth>
        }>
          <Route path='home' element={<HomeScreen />} />
          <Route path='orders' element={<ShopOrders />} />
          <Route path='products' element={<ShopProducts />} />
          <Route path='checkout' element={<ShopCheckout />} />
        </Route>
        
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/unauth-page' element={<UnauthPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
