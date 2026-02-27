import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-message">
          Oops! The page you're looking for doesn't exist.
        </p>
        <div className="not-found-actions">
          <button onClick={() => navigate(-1)} className="back-button">
            ← Go Back
          </button>
          <Link to="/" className="home-button">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;