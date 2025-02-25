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
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-layout">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>

        <div className="contact-info">
          <h2>Get in Touch</h2>
          <div className="info-group">
            <div className="info-item">
              <i className="icon phone-icon"></i>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="info-item">
              <i className="icon email-icon"></i>
              <span>contact@example.com</span>
            </div>
            <div className="info-item">
              <i className="icon address-icon"></i>
              <span>123 Main St, City, State 12345</span>
            </div>
          </div>
          <div className="business-hours">
            <h3>Business Hours</h3>
            <p>Monday - Friday: 9am - 5pm</p>
            <p>Saturday: 10am - 2pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Contact;