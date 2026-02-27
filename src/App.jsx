// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './config/Router.jsx';
import './App.css';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        {/* Public route - Login */}
        <Route path="/login" element={<Login />} />
        
        {/* Protected routes */}
        {routes.map((route) => (
          <Route 
            key={route.path}
            path={route.path} 
            element={
              <PrivateRoute>
                <Layout>{route.component}</Layout>
              </PrivateRoute>
            }
          />
        ))}
        
        {/* Catch-all route for 404 pages */}
        <Route 
          path="*" 
          element={<Layout><NotFound /></Layout>}
        />
      </Routes>
    </Router>
  );
}

export default App;