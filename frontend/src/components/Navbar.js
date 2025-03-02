// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <NavLink to="/">ComputerServices-Stuttgart</NavLink>
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <NavLink 
                to="/"
                end
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Startseite
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/angebote"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Angebote
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/services"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Service
              </NavLink>
            </li>
            {/*   <li>
              <NavLink 
                to="/hilfe"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Hilfe
              </NavLink>
            </li> */}
            <li>
              <NavLink 
                to="/Contact"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Kontakt
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
