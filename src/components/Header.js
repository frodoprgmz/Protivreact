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
      gsap.set(navRef.current, {
        opacity: 1,
        y: 0,
        display: 'flex',
      });
      setIsMenuOpen(false); // Zamykamy menu na dużych ekranach
    }
  };

  // Funkcja do natychmiastowego ukrycia menu na małych ekranach
  const hideMenuForSmallScreens = () => {
    if (window.innerWidth <= 768) {
      gsap.set(navRef.current, {
        opacity: 0,
        y: -20,
        display: 'none',
      });
      setIsMenuOpen(false); // Zamykamy menu na małych ekranach
    }
  };

  // Obsługa zmiany rozmiaru ekranu
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        resetMenuForLargeScreens();
      } else {
        hideMenuForSmallScreens(); // Natychmiastowe ukrycie menu na małych ekranach
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animacja menu tylko na małych ekranach
  useEffect(() => {
    const isMobile = window.innerWidth <= 768; // Sprawdź, czy ekran jest mały

    if (isMobile) {
      if (isMenuOpen) {
        // Rozwijanie menu
        gsap.to(navRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: 'power2.out',
          display: 'flex',
        });
      } else {
        // Zwijanie menu
        gsap.to(navRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: 'power2.in',
          onComplete: () => {
            gsap.set(navRef.current, { display: 'none' });
          },
        });
      }
    } else {
      resetMenuForLargeScreens(); // Resetuj menu na dużych ekranach
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {/* Logo na górze (wyśrodkowane na małych ekranach) */}
      <div className="logo">Nasze Logo</div>

      {/* Przycisk hamburgera (po prawej stronie na małych ekranach) */}
      <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu (animowane na małych ekranach) */}
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