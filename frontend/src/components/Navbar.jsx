import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <h1>Farewell Party</h1>
          </Link>
        </div>
        <div className="navbar-menu">
          <ul className="navbar-links">
            <li className={location.pathname === '/' ? 'active' : ''}>
              <Link to="/">Register</Link>
            </li>
            <li className={location.pathname === '/verify' ? 'active' : ''}>
              <Link to="/verify">Scanner</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;