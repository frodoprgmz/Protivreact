import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Funkcja do resetowania menu na dużych ekranach
  const resetMenuForLargeScreens = () => {
    if (window.innerWidth > 768) {
      gsap.set(navRef.current, { opacity: 1, y: 0, display: 'flex' });
      setIsMenuOpen(false);
    }
  };

  // Funkcja do natychmiastowego ukrycia menu na małych ekranach
  const hideMenuForSmallScreens = () => {
    if (window.innerWidth <= 768) {
      gsap.set(navRef.current, { opacity: 0, y: -20, display: 'none' });
      setIsMenuOpen(false);
    }
  };

  // Obsługa zmiany rozmiaru ekranu
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        resetMenuForLargeScreens();
      } else {
        hideMenuForSmallScreens();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animacja menu tylko na małych ekranach
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      if (isMenuOpen) {
        gsap.to(navRef.current, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out', display: 'flex' });
      } else {
        gsap.to(navRef.current, { opacity: 0, y: -20, duration: 0.3, ease: 'power2.in', onComplete: () => gsap.set(navRef.current, { display: 'none' }) });
      }
    } else {
      resetMenuForLargeScreens();
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {/* Logo na górze */}
      <div className="logo">
        
      </div>

      {/* Przycisk hamburgera */}
      <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu */}
      <nav>
        <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`} ref={navRef}>
          <li><Link to="/" onClick={toggleMenu}>Strona Główna</Link></li>
          <li><Link to="/realizations" onClick={toggleMenu}>Realizacje</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>O Nas</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Kontakt</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;