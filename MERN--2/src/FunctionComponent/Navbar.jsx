import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDrop = () => {
    setDropdown(!dropdown);
  };

  return (
    <header className="navbar-header">
      <nav className="navbar">
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/gallery" className="navbar-link">Gallery</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">Contact</Link>
          </li>
          <li className="navbar-item">
            <Link to="/sign-up" className="navbar-link">Sign-Up</Link>
          </li>
          <li className="navbar-item">
            <Link to="/login" className="navbar-link">Login</Link>
          </li>
          <li
            className="navbar-item dropdown"
            onMouseEnter={toggleDrop}
            onMouseLeave={toggleDrop}
          >
            <span className="dropdown-toggle">Hooks</span>
            {dropdown && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <Link to="/useState" className="dropdown-link">UseState</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/useeffect" className="dropdown-link">UseEffect</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/usecallback" className="dropdown-link">UseCallback</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/useeffectapi" className="dropdown-link">UseEffectAPI</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/useeffectapiimage" className="dropdown-link">UseEffectAPIimage</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/usereducer" className="dropdown-link">UseReducer</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/useref" className="dropdown-link">UseRef</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/usememo" className="dropdown-link">UseMemo</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/list" className="dropdown-link">List</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
