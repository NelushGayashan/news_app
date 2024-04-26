// src/Footer.js
import React from 'react';
import './style.css';

function Footer() {
  return (
    <footer className="Footer">
      <p>&copy; {new Date().getFullYear()} News Best. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
