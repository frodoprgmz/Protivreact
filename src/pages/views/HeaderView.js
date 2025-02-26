import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const HeaderView = ({ isMenuOpen, toggleMenu, navRef }) => {
  return (
    <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="logo">PROTIV</div>

      <div
        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Overlay covering the screen */}
      <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>

      <nav>
        <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`} ref={navRef}>
          <li><Link to="/" onClick={toggleMenu}>Strona Główna</Link></li>
          <li><Link to="/realizations" onClick={toggleMenu}>Realizacje</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>O Nas</Link></li>
          <li id='kont'><Link to="/contact" onClick={toggleMenu}>Kontakt</Link></li>
        </ul>
      </nav>

      <div className='contact-now'>
        <Link to="/contact" onClick={toggleMenu}><button className='contactButton'>Kontakt</button></Link>
      </div>
    </header>
  );
};

HeaderView.defaultProps = {
  isMenuOpen: false,
  toggleMenu: () => {},
  navRef: null
};

export default HeaderView;
