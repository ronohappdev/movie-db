// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../config/Router.jsx';
import { useAuth } from '../context/AuthContext';
import '../styles/Header.css';

const Header = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header>
      <nav>
        <div className='logo'>Movie App</div>
        <div className='nav-item'>
          <div className='nav-links'>
            {routes.map((route) => {
              if (route.isHeaderElement) {
                return (
                  <li key={route.title}>
                    <Link to={route.path} className='link'>
                      {route.title}
                    </Link>
                  </li>
                );
              }
              return null;
            })}
            
            {/* User Profile Section */}
            {user ? (
              <li className='user-section'>
                <div className='user-info'>
                  <img 
                    src={user.photoURL} 
                    alt={user.displayName} 
                    className='user-avatar'
                  />
                  <span className='user-name'>{user.displayName}</span>
                </div>
                <button onClick={handleLogout} className='logout-button'>
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <Link to='/login' className='link login-link'>
                  Login
                </Link>
              </li>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;