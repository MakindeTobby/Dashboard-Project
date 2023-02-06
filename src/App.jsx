import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import NotFound from './pages/Notfound';
import Staffs from './pages/UserManagement/Staff';
import AdminAuth from './pages/Auth/AdminRegister';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes >

        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/admin-auth" element={<AdminAuth />} />
        <Route exact path="/" element={<Dashboard />} errorElement={<NotFound />} />
        <Route exact path="/staffs" element={<Staffs />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
