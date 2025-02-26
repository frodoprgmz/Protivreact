"use client"
import { Link } from 'react-router-dom';
import { useState, useEffect, useCallback } from "react"
import "./css/Onas.css"


const Onas = ({toggleMenu, navRef}) => {
  const teamMembers = [
    {
      id: 1,
      name: 'Anna Kowalska',
      position: 'CEO & Founder',
      image: '/placeholder.svg?height=300&width=300',
      bio: 'Anna has over 15 years of experience in the industry.'
    },
    {
      id: 2,
      name: 'Jan Nowak',
      position: 'CTO',
      image: '/placeholder.svg?height=300&width=300',
      bio: 'Jan leads our technical team with innovative solutions.'
    },
    {
      id: 3,
      name: 'Maria Wiśniewska',
      position: 'Design Director',
      image: '/placeholder.svg?height=300&width=300',
      bio: 'Maria brings creative vision to all our projects.'
    }
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${require('../img/mysqlbg.png')})` }}>
        <div className="hero-content">
          <h1>O Nas</h1>
          <p>Poznaj naszą historię i zespół</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="company-overview">
        <div className="section-content">
          <h2>Nasza Historia</h2>
          <div className="overview-layout">
            <div className="overview-text">
              <p>
                Nasza firma została założona w 2010 roku z misją dostarczania 
                innowacyjnych rozwiązań dla naszych klientów. Przez lata 
                rozwijaliśmy się, budując zespół ekspertów i poszerzając 
                naszą ofertę.
              </p>
              <p>
                Dziś jesteśmy liderem w branży, obsługując klientów w całym 
                kraju i poza jego granicami. Naszym celem jest nieustanne 
                doskonalenie i przekraczanie oczekiwań.
              </p>
            </div>
            <div className="overview-image">
              <img 
                src="/placeholder.svg?height=400&width=600" 
                alt="Nasze biuro" 
                className="about-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="mission-section">
        <div className="section-content">
          <h2>Nasza Misja i Wartości</h2>
          <div className="values-container">
            <div className="value-card">
              <h3>Jakość</h3>
              <p>Dostarczamy produkty i usługi najwyższej jakości.</p>
            </div>
            <div className="value-card">
              <h3>Innowacja</h3>
              <p>Nieustannie poszukujemy nowych, lepszych rozwiązań.</p>
            </div>
            <div className="value-card">
              <h3>Współpraca</h3>
              <p>Wierzymy w siłę zespołu i partnerskie relacje z klientami.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="section-content">
          <h2>Nasz Zespół</h2>
          <p className="team-intro">
            Poznaj ludzi, którzy stoją za naszym sukcesem. Nasz zespół składa się 
            z doświadczonych specjalistów z różnych dziedzin.
          </p>
          <div className="team-grid">
            {teamMembers.map(member => (
              <div className="team-member" key={member.id}>
                <div className="member-image">
                  <img src={member.image || "/placeholder.svg"} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-position">{member.position}</p>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="section-content">
          <h2>Nasza Droga</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2010</h3>
                <p>Założenie firmy</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2015</h3>
                <p>Otwarcie nowego biura</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2018</h3>
                <p>Ekspansja na rynki międzynarodowe</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2023</h3>
                <p>Wprowadzenie nowych innowacyjnych produktów</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <div className="section-content">
          <h2>Skontaktuj się z nami</h2>
          <p>Chcesz dowiedzieć się więcej o naszej firmie lub nawiązać współpracę?</p>
          <Link to="/contact" onClick={toggleMenu}><button className="cta-button">Napisz do nas</button></Link>
        </div>
      </section>
    </div>
  );
};

export default Onas;
