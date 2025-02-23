import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p>© {new Date().getFullYear()} RepairPro. Alle Rechte vorbehalten.</p>
        <div className="social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;