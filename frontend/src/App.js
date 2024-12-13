import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Login/LoginForm';
import Navbar from './Pages/Navbar';
import PrivateRoute from './Pages/PrivateRoute';
import RegisterForm from './Login/RegisterForm';
import VerifyEmail from './routers/VerifyEmail';

import './Styles/css.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/verifyEmail" element={<VerifyEmail />} />
        <Route path="/navbar" element={
          <PrivateRoute>
            <Navbar />
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
