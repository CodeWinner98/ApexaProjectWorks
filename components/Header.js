import React from 'react';
import { NavLink } from 'react-router-dom'; // Make sure to import NavLink from react-router-dom
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">APEXA</div>
      <nav>
        <ul>
          <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} end>Home</NavLink></li>
          <li><NavLink to="/signin" className={({ isActive }) => isActive ? "active" : ""}>Sign In</NavLink></li>
          <li><NavLink to="/pricing" className={({ isActive }) => isActive ? "active" : ""}>Pricing</NavLink></li>
          <li><NavLink to="/gallery" className={({ isActive }) => isActive ? "active" : ""}>Gallery</NavLink></li>
          <li><NavLink to="/create" className={({ isActive }) => isActive ? "active" : ""}>Create</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
