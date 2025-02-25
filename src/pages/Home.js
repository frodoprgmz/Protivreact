import React, { useState } from "react";
import "./css/Home.css";
import reactLogo from "../img/react-logo.png";
import animeLogo from "../img/anime-logo.png";
import mysqlLogo from "../img/mysql-logo.png";
import { Instagram, Facebook, Linkedin, Info, Github } from "lucide-react";
import Footer from '../components/Footer';

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);

  const handleExpand = (card) => {
    setExpandedCard(expandedCard === card ? null : card);
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
              <a>Zaufaj naszym umiejętnością i zleć nam projekt.<br /> Sumiennie wykonamy stronę wedle twoich preferencji</a>
              <div className="quotation">
                <div className='quotationButton'>
                  SZYBKA WYCENA
                </div>
              </div>
            </div>
          </div>
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

      <div className={`technologies ${expandedCard ? 'expanded' : ''}`}>
  
        {[{
          id: 'react',
          logo: reactLogo,
          alt: 'React',
          description: 'React – to narzędzie do budowania stron internetowych, które sprawia, że są one szybkie i dynamiczne. Dzięki Reactowi strona nie musi się odświeżać w całości przy każdej zmianie, co sprawia, że działa płynniej i wygląda nowocześnie.'
        }, {
          id: 'anime',
          logo: animeLogo,
          alt: 'Anime.js',
          description: 'Anime.js – to biblioteka, która pomaga dodawać animacje na stronach internetowych. Dzięki niej można sprawić, że elementy na stronie będą się poruszać, zmieniać kolory czy płynnie pojawiać się i znikać, co sprawia, że strona wygląda atrakcyjniej.'
        }, {
          id: 'mysql',
          logo: mysqlLogo,
          alt: 'MySQL',
          description: 'MySQL – to baza danych, czyli miejsce, w którym strona internetowa przechowuje informacje, np. dane użytkowników, produkty w sklepie internetowym czy wpisy na blogu. Dzięki MySQL można szybko i bezpiecznie przechowywać i wyszukiwać te dane.'
        }].map((tech, index) => (
          <div
            key={tech.id}
            className={`tech-card ${expandedCard === tech.id ? 'expanded' : ''}`}
            onClick={() => handleExpand(tech.id)}
            style={{ order: expandedCard ? (expandedCard === tech.id ? 0 : index < ["react", "anime", "mysql"].indexOf(expandedCard) ? -1 : 1) : 0 }}
          >
            <div className="tech-front">
              <img className="technology-logo" src={tech.logo} alt={tech.alt} />
            </div>
            {expandedCard === tech.id && (
              <div className="tech-back">
                {tech.description}
              </div>
            )}
          </div>
        ))}
      </div>

    </>
  );
}

export default Home;