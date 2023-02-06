import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './main.css'
import 'react-toastify/dist/ReactToastify.css';
import 'react-phone-number-input/style.css'
import { ToastContainer } from 'react-toastify'
import { UserProvider } from './context';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <Router>
        <ToastContainer position='top-right' />
        <App />
      </Router>
    </UserProvider>
  </React.StrictMode>
);
