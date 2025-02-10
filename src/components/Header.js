import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li><Link to="/">Strona Główna</Link></li>
          <li><Link to="/realizations">Realizacje</Link></li>
          <li><Link to="/about">O Nas</Link></li>
          <li><Link to="/contact">Kontakt</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;