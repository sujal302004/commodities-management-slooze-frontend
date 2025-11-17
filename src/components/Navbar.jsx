import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/dashboard">Slooze Commodities</Link>
      </div>
      
      <div className="navbar-menu">
        {user?.role === 'manager' && (
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
        )}
        <Link to="/products" className="nav-link">Products</Link>
        {user?.role === 'manager' && (
          <Link to="/products/new" className="nav-link">Add Product</Link>
        )}
      </div>
      
      <div className="navbar-actions">
        <button onClick={toggleTheme} className="theme-toggle">
          {isDarkMode ? '☀️' : '🌙'}
        </button>
        <span className="user-info">Welcome, {user?.name}</span>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;