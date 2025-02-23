// src/components/Contact.js
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/contact.css'; 

function contact() {
  return (
    <div className="contact container">
      <h2>Kontakt</h2>
      
      {/* Contact Info Section */}
      <div className="contact-info">
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <h3>Telefon</h3>
          <p>(+49) 015731936078</p>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <p>rwadsalman@yahoo.com</p>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Adresse</h3>
          <p>Mahatma-Gandhi-Str.24, 70376 Stuttgart</p>
        </div>
      </div>
      
      {/* Contact Form Section */}
      <form className="contact-form">
        <h3>Schreiben Sie uns</h3>
        <input type="text" placeholder="Ihr Name" required />
        <input type="email" placeholder="Ihre Email" required />
        <textarea placeholder="Ihre Nachricht" rows="5" required></textarea>
        <button type="submit" className="btn">Absenden</button>
      </form>
    </div>
  );
}

export default contact;
