import React, { useState } from 'react';
import "./css/Contact.css";

function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement form submission logic
    console.log("Form submitted:", { name, email, message })
    // Reset form fields
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <div className="contact-container">
      <h1 className="contact-title">Skontaktuj się z Nami</h1>
      <div className="contact-layout">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Imie</label>
            <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Wiadomość</label>
            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
          </div>
          <button type="submit" className="submit-button">
            Wyślij Wiadomość
          </button>
        </form>

        <div className="contact-info">
          <h2>Dane Kontaktowe</h2>
          <div className="info-group">
            <div className="info-item">
              <i className="icon phone-icon"></i>
              <span>+48 213 742 069</span>
            </div>
            <div className="info-item">
              <i className="icon email-icon"></i>
              <span>Papież@gmail.com</span>
            </div>
            <div className="info-item">
              <i className="icon address-icon"></i>
              <span>Urzędnicza 2, 87-100, Toruń </span>
            </div>
          </div>
          <div className="business-hours">
            <h3>Godziny Pracy</h3>
            <p>Poniedziałek - Piątek: 14:00 - 20:00</p>
            <p>Sobota: 10:00 - 15:00</p>
            <p>Niedziela: Zamknięte</p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Contact;