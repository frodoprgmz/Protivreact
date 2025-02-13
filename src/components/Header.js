import React, { useState, useRef, useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import HeaderView from '../pages/views/HeaderView';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Dodaj style początkowe dla menu
  useEffect(() => {
    anime.set(navRef.current, {
      translateX: '100%',
      opacity: 0,
      display: 'none'
    });
  }, []);

  const resetMenuForLargeScreens = () => {
    if (window.innerWidth > 768) {
      anime.set(navRef.current, {
        translateX: '0%',
        opacity: 1,
        display: 'flex'
      });
      setIsMenuOpen(false);
    }
  };

  const hideMenuForSmallScreens = () => {
    if (window.innerWidth <= 768) {
      anime.set(navRef.current, {
        translateX: '100%',
        opacity: 0,
        display: 'none'
      });
      setIsMenuOpen(false);
    }
  };

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

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const navElement = navRef.current;

    if (isMobile) {
      if (isMenuOpen) {
        anime({
          targets: navElement,
          translateX: '0%',
          opacity: 1,
          duration: 300,
          easing: 'easeOutQuad',
          begin: () => {
            anime.set(navElement, { display: 'flex' });
          }
        });
      } else {
        anime({
          targets: navElement,
          translateX: '100%',
          opacity: 0,
          duration: 300,
          easing: 'easeInQuad',
          complete: () => {
            anime.set(navElement, { display: 'none' });
          }
        });
      }
    } else {
      resetMenuForLargeScreens();
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderView
      isMenuOpen={isMenuOpen}
      toggleMenu={toggleMenu}
      navRef={navRef}
    />
  );
}

export default Header;