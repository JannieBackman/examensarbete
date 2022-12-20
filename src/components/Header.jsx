import React from 'react';
import brandName from './assets/text_logo.png';
import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <nav className="navbar">
        <img src={brandName} alt="brandName" />
        <div className="nav-menu">
          <ul>
            <a href="Services">
              <li>Tjänster</li>
            </a>
            <a href="About">
              <li>Om mig</li>
            </a>
            <a href="contact">
              <li>Kontakt</li>
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
