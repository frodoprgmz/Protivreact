import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';


const HeaderView = ({ isMenuOpen, toggleMenu, navRef }) => {
  return (
    <header className="header">
      <div className="logo"></div>

      <div 
        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav>
        <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`} ref={navRef}>
          <li><Link to="/" onClick={toggleMenu}>Strona Główna</Link></li>
          <li><Link to="/realizations" onClick={toggleMenu}>Realizacje</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>O Nas</Link></li> 
          {/* <li><Link to="/contact" onClick={toggleMenu}>Kontakt</Link></li> */}
        </ul>
      </nav>

      <div className='contact-now'>
        <div className='contactButton'>
        CONTACT NOW
        </div>
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