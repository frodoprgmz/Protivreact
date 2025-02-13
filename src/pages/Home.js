import React, { useState } from "react";
import "./css/Home.css";
import reactLogo from "../img/react-logo.png"; 
import animeLogo from "../img/anime-logo.png"; 
import mysqlLogo from "../img/mysql-logo.png"; 

function Home() {
  const [flipped, setFlipped] = useState({
    react: false,
    anime: false,
    mysql: false
  });

  const handleFlip = (tech) => {
    setFlipped((prevState) => ({
      ...prevState,
      [tech]: !prevState[tech]
    }));
  };

  return (
    <>
      <div className="container">
        <div className="content-first">
          <p>Zajmujemy się tworzeniem zaawansowanych</p>
          <p>stron internetowych</p>
          <div className="see-more">Dowiedz się więcej</div>
        </div>
      </div>

      {/* Sekcja technologies */}
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
              React – to narzędzie do budowania stron internetowych, które sprawia, że są one szybkie i dynamiczne. Dzięki Reactowi strona nie musi się odświeżać w całości przy każdej zmianie, co sprawia, że działa płynniej i wygląda nowocześnie.
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
              Anime.js – to biblioteka, która pomaga dodawać animacje na stronach internetowych. Dzięki niej można sprawić, że elementy na stronie będą się poruszać, zmieniać kolory czy płynnie pojawiać się i znikać, co sprawia, że strona wygląda atrakcyjniej.
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
              MySQL – to baza danych, czyli miejsce, w którym strona internetowa przechowuje informacje, np. dane użytkowników, produkty w sklepie internetowym czy wpisy na blogu. Dzięki MySQL można szybko i bezpiecznie przechowywać i wyszukiwać te dane.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
