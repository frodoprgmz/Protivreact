import React, { useState } from 'react';
import "./css/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tutaj dodaj logikę do wysyłania danych do bazy danych
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="page">

      <div className="contact-content">
        <form onSubmit={handleSubmit} className="contact-form">
        <h1>Kontakt</h1>
          <label>
            Imię i nazwisko:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Telefon:
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </label>
          <label>
            Treść zapytania:
            <textarea name="message" value={formData.message} onChange={handleChange} required />
          </label>
          <button type="submit">Wyślij</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;