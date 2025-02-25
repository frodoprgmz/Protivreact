import React, { useState } from "react";
import "./css/Home.css";
import reactLogo from "../img/react-logo.png";
import animeLogo from "../img/anime-logo.png";
import mysqlLogo from "../img/mysql-logo.png";
import { Instagram, Facebook, Linkedin, Info, Github  } from "lucide-react";
import Footer from '../components/Footer';

function Home() {
  const [flipped, setFlipped] = useState({
    react: false,
    anime: false,
    mysql: false,
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleFlip = (tech) => {
    setFlipped((prevState) => ({
      ...prevState,
      [tech]: !prevState[tech],
    }));
  };

  const togglePhoneIcons = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };


  return (
    <>
      <div className="container">
        <div className="content-first">

          <div className="content-texts">
            <div className="content-text1">
            <a>TWORZENIE</a>
            <a><strong>STRON</strong></a> 
            <a id="ty"><strong>INTERNETOWYCH</strong></a> 
            </div>
            <div className="content-text2">
              <a>Zaufaj naszym umiejętnością i zleć nam projekt.<br/> Sumiennie wykonamy stronę wedle twoich preferencji</a>
              <div className="quotation">
                <div className='quotationButton'>
                  SZYBKA WYCENA
                </div>
              </div>
            </div>
          </div>
          {/* <div className="see-more">Dowiedz się więcej</div> */}
          <div className="social-media">
            <Instagram className="social-media-icon" />
            <Facebook className="social-media-icon" />
            <Linkedin className="social-media-icon" />
            <Github className="social-media-icon" />
          </div>
          <div className={`social-media-on-phone ${isOpen ? "open" : ""}`}>
            <div className="social-media-icons">
              {isOpen && (
                <>
                  <Instagram className="social-media-icon" />
                  <Facebook className="social-media-icon" />
                  <Linkedin className="social-media-icon" />
                  <Github className="social-media-icon" />
                </>
              )}
            </div>
            <Info
              className="social-media-icon info-icon"
              onClick={togglePhoneIcons}
            />
          </div>
        </div>
      </div>
      <div className="technologies">
        <div
          className={`tech-card ${flipped.react ? "flipped" : ""}`}
          onClick={() => handleFlip("react")}
        >
          <div className="tech-inner">
            <div className="tech-front">
              <img className="technology-logo" src={reactLogo} alt="React" />
            </div>
            <div className="tech-back">
              React – to narzędzie do budowania stron internetowych, które
              sprawia, że są one szybkie i dynamiczne. Dzięki Reactowi strona
              nie musi się odświeżać w całości przy każdej zmianie, co sprawia,
              że działa płynniej i wygląda nowocześnie.
            </div>
          </div>
        </div>
        <div
          className={`tech-card ${flipped.anime ? "flipped" : ""}`}
          onClick={() => handleFlip("anime")}
        >
          <div className="tech-inner">
            <div className="tech-front">
              <img className="technology-logo" src={animeLogo} alt="Anime.js" />
            </div>
            <div className="tech-back">
              Anime.js – to biblioteka, która pomaga dodawać animacje na
              stronach internetowych. Dzięki niej można sprawić, że elementy na
              stronie będą się poruszać, zmieniać kolory czy płynnie pojawiać
              się i znikać, co sprawia, że strona wygląda atrakcyjniej.
            </div>
          </div>
        </div>
        <div
          className={`tech-card ${flipped.mysql ? "flipped" : ""}`}
          onClick={() => handleFlip("mysql")}
        >
          <div className="tech-inner">
            <div className="tech-front">
              <img className="technology-logo" src={mysqlLogo} alt="MySQL" />
            </div>
            <div className="tech-back">
              MySQL – to baza danych, czyli miejsce, w którym strona internetowa
              przechowuje informacje, np. dane użytkowników, produkty w sklepie
              internetowym czy wpisy na blogu. Dzięki MySQL można szybko i
              bezpiecznie przechowywać i wyszukiwać te dane.
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;
