import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';
import { Instagram, Facebook, Linkedin, Info, Github  } from "lucide-react";
const FooterView = ()=>{
return(


    <footer className="footer">
    <div className="footer-container">
      <div className="footer-section">
       <a id='protiv'>PROTIV</a>
        <div className="social-icons">
          <a href="#" className="social-icon">

          <div className='social-media-footer'> <Facebook className="social-media-icon" /></div>
          </a>
          <a href="#" className="social-icon">
          <div className='social-media-footer'> <Instagram className="social-media-icon" /></div>
          </a>
        </div>
      </div>
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <a href="/onas">O nas</a>
          </li>
          <li>
            <a href="/kontakt">Kontakt</a>
          </li>
          <li>
            <a href="/home">Strona Główna</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Newsletter</h3>
        <p>Bądź na bieżąco z nowymi zmianami.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="E-mail" className="newsletter-input" />
          <button type="submit" className="newsletter-button">
            Zapisz się
          </button>
        </form>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} PROTIV. All rights reserved.</p>
    </div>
  </footer>
);
};









export default FooterView;

